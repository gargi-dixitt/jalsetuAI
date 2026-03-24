const express = require('express');
const router = express.Router();
const { villages } = require('../data/villageData');
const { groundwaterData } = require('../data/groundwaterData');
const { calculateRisk } = require('../algorithms/riskEngine');
const { calculateAquiferHealth } = require('../algorithms/groundwaterEngine');
const { calculatePriorityScore } = require('../algorithms/priorityScorer');

function findGw(villageId) {
  const gw = groundwaterData.find(g => g.villageId === villageId);
  return gw ? calculateAquiferHealth(gw) : null;
}

router.post('/run', (req, res) => {
  const enrichedVillages = villages.map(v => calculateRisk(v));
  const ranked = enrichedVillages
    .map(v => {
      const gw = findGw(v.id);
      const priority = calculatePriorityScore(v, gw);
      return {
        ...priority,
        ...gw,
        depletionStatus: gw ? gw.depletionStatus : 'UNKNOWN',
        aquiferHealthScore: gw ? gw.aquiferHealthScore : null,
      };
    })
    .sort((a, b) => b.priorityScore - a.priorityScore || a.daysLeft - b.daysLeft)
    .map((v, i) => ({ ...v, priorityRank: i + 1 }));

  const criticalSurface = ranked.filter(v => v.riskLevel === 'CRITICAL').length;
  const criticalGroundwater = ranked.filter(v => v.depletionStatus === 'CRITICAL' || v.depletionStatus === 'DEPLETED').length;
  const dualCrisis = ranked.filter(v => v.riskLevel === 'CRITICAL' && (v.depletionStatus === 'CRITICAL' || v.depletionStatus === 'DEPLETED')).length;

  res.json({
    runAt: new Date().toISOString(),
    totalVillages: ranked.length,
    criticalSurface,
    criticalGroundwater,
    dualCrisis,
    rankedVillages: ranked
  });
});

module.exports = router;
