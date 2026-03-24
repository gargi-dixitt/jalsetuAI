import { useMemo } from 'react';
import { useVillages } from '../hooks/useVillages';
import { useGroundwater } from '../hooks/useGroundwater';
import StatCard from '../components/UI/StatCard';
import RiskBadge from '../components/UI/RiskBadge';
import './Dashboard.css';

export default function Dashboard() {
  const { data: villages, loading: vLoading, error: vError } = useVillages();
  const { data: groundwater, summary, loading: gwLoading, error: gwError } = useGroundwater();

  const stats = useMemo(() => {
    if (!villages.length || !groundwater.length) return null;
    const criticalSurface = villages.filter(v => v.riskLevel === 'CRITICAL').length;
    const highSurface = villages.filter(v => v.riskLevel === 'HIGH').length;
    const avgDays = Math.round(villages.reduce((s,v) => s + (v.daysLeft || 0), 0)/villages.length);
    const aquiferStable = groundwater.filter(g => g.depletionStatus === 'STABLE').length;
    const dual = villages.filter(v => v.riskLevel === 'CRITICAL').filter(v => {
      const gw = groundwater.find(g => g.villageId === v.id);
      return gw && (gw.depletionStatus === 'CRITICAL' || gw.depletionStatus === 'DEPLETED');
    }).length;
    return { criticalSurface, highSurface, avgDays, aquiferStable, dual };
  }, [villages, groundwater]);

  if (vLoading || gwLoading) return <p>Loading dashboard...</p>;
  if (vError || gwError) return <p>Error loading dashboard</p>;

  return (
    <div className='dashboard'>
      <h2>Dashboard · डैशबोर्ड</h2>
      <div className='stat-grid'>
        <StatCard title='Villages' value={villages.length} subtitle='MP Pilot' />
        <StatCard title='Critical Dispatch' value={stats?.criticalSurface || 0} subtitle='Surface water critical' color='var(--danger)' />
        <StatCard title='High Risk' value={stats?.highSurface || 0} subtitle='Monitor immediately' color='var(--warning)' />
        <StatCard title='Avg Days Left' value={stats?.avgDays || 0} subtitle='Overall' />
        <StatCard title='Aquifer Stable' value={`${stats?.aquiferStable || 0}/22`} subtitle='' color='var(--groundwater)' />
        <StatCard title='Dual Crisis' value={stats?.dual || 0} subtitle='Both water types' color='var(--danger)' />
      </div>

      <section className='dashboard-section'>
        <h3>All Villages Summary</h3>
        <div className='table-wrap'>
          <table>
            <thead>
              <tr><th>Village</th><th>District</th><th>Population</th><th>Days Left</th><th>Risk</th><th>Aquifer Health</th><th>Last Tanker</th></tr>
            </thead>
            <tbody>
              {villages.slice(0,22).map(v => {
                const gw = groundwater.find(g => g.villageId === v.id);
                return (
                  <tr key={v.id} style={{ background: v.riskLevel === 'CRITICAL' ? '#fdecea' : v.riskLevel === 'HIGH' ? '#fffbe6' : 'transparent' }}>
                    <td>{v.name}</td>
                    <td>{v.district}</td>
                    <td>{v.population}</td>
                    <td>{v.daysLeft}</td>
                    <td><RiskBadge risk={v.riskLevel} /></td>
                    <td>{gw ? `${gw.aquiferHealthScore}%` : 'N/A'}</td>
                    <td>{v.lastTankerDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
