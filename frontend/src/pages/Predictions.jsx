import { useState } from 'react';
import { usePredictions } from '../hooks/usePredictions';
import './Predictions.css';

export default function Predictions() {
  const { data, loading, error } = usePredictions();
  const [showDetails, setShowDetails] = useState(null);

  if (loading) return <p>Loading predictions...</p>;
  if (error || !data) return <p>Failed to load predictions.</p>;

  const dualCrisis = data.dualCrisis > 0;

  return (
    <div className='predictions'>
      <h2>🔮 Dispatch Priority Engine</h2>
      {dualCrisis && <div className='alert'>⚠ DUAL CRISIS ALERT — {data.dualCrisis} villages with both surface and groundwater crisis</div>}
      <p>Last run: {new Date(data.runAt).toLocaleString('en-IN')}</p>
      <div className='predictions-table-wrap'>
        <table>
          <thead>
            <tr><th>#</th><th>Village</th><th>District</th><th>Days</th><th>Score</th><th>GW Health</th><th>Action</th></tr>
          </thead>
          <tbody>
            {data.rankedVillages.map(v => (
              <tr key={v.id} className={(v.riskLevel==='CRITICAL'&&['CRITICAL','DEPLETED'].includes(v.depletionStatus)) ? 'dual' : ''}>
                <td>{v.priorityRank}</td>
                <td>{v.name}</td>
                <td>{v.district}</td>
                <td>{v.daysLeft}</td>
                <td>{v.priorityScore}</td>
                <td>{v.aquiferHealthScore || 'N/A'}</td>
                <td><button onClick={() => setShowDetails(showDetails === v.id ? null : v.id)}>Details</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showDetails && (
        <div className='details'>
          <h3>Score Breakdown</h3>
          {data.rankedVillages.filter(v => v.id === showDetails).map(v => (
            <ul key={v.id}>
              <li>Urgency: {v.scoreBreakdown.urgencyScore}</li>
              <li>Neglect: {v.scoreBreakdown.neglectScore}</li>
              <li>Population: {v.scoreBreakdown.populationScore}</li>
              <li>Groundwater penalty: {v.scoreBreakdown.groundwaterPenalty}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}
