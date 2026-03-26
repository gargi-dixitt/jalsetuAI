const express = require('express');
const router = express.Router();
const { groundwaterData } = require('../data/groundwaterData');
const { calculateAquiferHealth } = require('../algorithms/groundwaterEngine');

router.get('/', (req, res) => {
  const enriched = groundwaterData.map(calculateAquiferHealth);
  res.json(enriched);
});

router.get('/summary', (req, res) => {
  const enriched = groundwaterData.map(calculateAquiferHealth);
  const avgHealth = Math.round(enriched.reduce((sum, gw) => sum + gw.aquiferHealthScore, 0) / enriched.length);
  const depletedCount = enriched.filter(gw => gw.depletionStatus === 'DEPLETED').length;
  const stableCount = enriched.filter(gw => gw.depletionStatus === 'STABLE').length;
  res.json({ avgHealthScore: avgHealth, depletedCount, stableCount, total: enriched.length });
});

router.get('/:villageId', (req, res, next) => {
  const gw = groundwaterData.find(p => p.villageId === req.params.villageId);
  if (!gw) return next({ status: 404, message: 'Groundwater data not found for village' });
  res.json(calculateAquiferHealth(gw));
});

module.exports = router;
