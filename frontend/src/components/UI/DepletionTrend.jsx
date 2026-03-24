import { LineChart, Line } from 'recharts';

export default function DepletionTrend({ monthlyReadings }) {
  if (!monthlyReadings || monthlyReadings.length === 0) return null;
  const trend = monthlyReadings;
  const last = trend[trend.length - 1].depth;
  const first = trend[0].depth;
  const color = last > first ? 'var(--danger)' : 'var(--success)';

  return (
    <LineChart width={120} height={40} data={trend} style={{ margin: '0 auto' }}>
      <Line type='monotone' dataKey='depth' stroke={color} strokeWidth={2} dot={false} />
    </LineChart>
  );
}
