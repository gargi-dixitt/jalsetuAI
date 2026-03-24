import './StatCard.css';

export default function StatCard({ title, value, subtitle, color }) {
  return (
    <div className='stat-card' style={{ borderLeftColor: color || 'var(--primary)'}}>
      <h3>{title}</h3>
      <strong>{value}</strong>
      {subtitle && <small>{subtitle}</small>}
    </div>
  );
}
