const express = require('express');
const router = express.Router();
const { villages } = require('../data/villageData');
const { groundwaterData } = require('../data/groundwaterData');
const { calculateRisk } = require('../algorithms/riskEngine');
const { calculateAquiferHealth } = require('../algorithms/groundwaterEngine');
const { calculatePriorityScore } = require('../algorithms/priorityScorer');

// Lite on dependencies; in real project should call Groq SDK + authentication.
router.post('/insights', async (req, res) => {
  const { villageIds } = req.body || {};

  const surface = villages
    .filter(v => !villageIds || villageIds.length === 0 || villageIds.includes(v.id))
    .map(calculateRisk);

  const withGw = surface.map(v => {
    const gw = groundwaterData.find(g => g.villageId === v.id);
    const gwCalc = gw ? calculateAquiferHealth(gw) : null;
    return {
      ...v,
      groundwater: gwCalc,
      priority: calculatePriorityScore(v, gwCalc)
    };
  });

  const dualCrisis = withGw.filter(x => x.riskLevel === 'CRITICAL' && x.groundwater && (x.groundwater.depletionStatus === 'CRITICAL' || x.groundwater.depletionStatus === 'DEPLETED')).map(x => x.name);

  const runAt = new Date().toISOString();

  const response = {
    runAt,
    situationOverview: `MP pilot of 8 districts shows pre-monsoon stress with several villages in critical surface and groundwater conditions. Total selected villages: ${withGw.length}.`,
    immediateDispatch: withGw
      .sort((a,b) => b.priority.priorityScore - a.priority.priorityScore)
      .slice(0,3)
      .map(v => `${v.name} (${v.district}, ${v.block}) - ${v.riskLevel} surface, ${v.groundwater ? v.groundwater.depletionStatus : 'GW unknown'}`),
    groundwaterAlert: dualCrisis,
    preventiveAdvisory: 'Deploy emergency recharge pits in Bundelkhand Deccan Basalt blocks and pre-place tankers in low recharge zones.',
    seasonalPattern: 'Narmada valley villages recover better post-monsoon; Vindhya-Bundelkhand demand surge is highest March-June.',
    ranked: withGw
  };

  res.json(response);
});

module.exports = router;
