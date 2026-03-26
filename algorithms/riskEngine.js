function calculateRisk(village) {
  const daysLeft = Math.floor(village.waterStockLiters / Math.max(village.dailyUsageLiters, 1));
  let riskLevel = 'SAFE';

  if (daysLeft <= 3) riskLevel = 'CRITICAL';
  else if (daysLeft <= 7) riskLevel = 'HIGH';
  else if (daysLeft <= 14) riskLevel = 'MODERATE';

  const daysSinceTanker = getDaysSince(village.lastTankerDate);

  return {
    ...village,
    daysLeft,
    riskLevel,
    daysSinceTanker
  };
}

function getDaysSince(dateString) {
  if (!dateString) return null;
  const from = new Date(dateString);
  const now = new Date();
  const diff = now - from;
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
}

module.exports = { calculateRisk, getDaysSince };
