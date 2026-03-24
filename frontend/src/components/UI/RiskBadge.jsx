import './RiskBadge.css';

const colors = {
  CRITICAL: '#C0392B',
  HIGH: '#D4AC0D',
  MODERATE: '#2E86C1',
  SAFE: '#1E8449'
};

export default function RiskBadge({ risk }) {
  return <span className='risk-badge' style={{ background: colors[risk] || '#566573' }}>{risk}</span>;
}
