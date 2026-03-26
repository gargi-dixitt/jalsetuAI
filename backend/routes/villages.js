const express = require('express');
const router = express.Router();
const { villages } = require('../data/villageData');
const { calculateRisk } = require('../algorithms/riskEngine');

router.get('/', (req, res) => {
  const enriched = villages.map(calculateRisk);
  res.json(enriched);
});

router.get('/:id', (req, res, next) => {
  const village = villages.find(v => v.id === req.params.id);
  if (!village) return next({ status: 404, message: 'Village not found' });
  res.json(village);
});

module.exports = router;
