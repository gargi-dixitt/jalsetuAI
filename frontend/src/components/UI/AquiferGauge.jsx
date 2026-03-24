import './AquiferGauge.css';

export default function AquiferGauge({ currentDepth, criticalDepth, healthScore }) {
  let color = healthScore > 60 ? 'var(--success)' : healthScore > 35 ? 'var(--warning)' : 'var(--danger)';
  return (
    <div className='aquifer-gauge'>
      <div className='gauge-bar' style={{ borderColor: 'var(--groundwater)' }}>
        <div className='gauge-fill' style={{ height: `${Math.min(100, (currentDepth/criticalDepth)*100)}%`, background: color }} />
      </div>
      <div className='gauge-labels'>
        <div>Current: {currentDepth}m</div>
        <div>Critical: {criticalDepth}m</div>
        <div>Health: {healthScore}%</div>
      </div>
    </div>
  );
}
