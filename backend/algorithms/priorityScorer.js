const { getDaysSince } = require('./riskEngine');

function calculatePriorityScore(village, gwData) {
  const daysLeft = village.waterStockLiters / Math.max(village.dailyUsageLiters, 1);
  const daysSinceTanker = getDaysSince(village.lastTankerDate);

  const urgencyScore = Math.max(0, (14 - daysLeft) / 14) * 40;
  const neglectScore = Math.min(daysSinceTanker / 30, 1) * 20;
  const populationScore = Math.min(village.population / 5000, 1) * 20;

  const gwPenalty = gwData
    ? Math.max(0, (100 - gwData.aquiferHealthScore) / 100) * 20
    : 0;

  const priorityScore = urgencyScore + neglectScore + populationScore + gwPenalty;

  return {
    ...village,
    daysLeft: Math.floor(daysLeft),
    priorityScore: Math.round(priorityScore),
    scoreBreakdown: {
      urgencyScore: Math.round(urgencyScore),
      neglectScore: Math.round(neglectScore),
      populationScore: Math.round(populationScore),
      groundwaterPenalty: Math.round(gwPenalty)
    }
  };
}

module.exports = { calculatePriorityScore };
