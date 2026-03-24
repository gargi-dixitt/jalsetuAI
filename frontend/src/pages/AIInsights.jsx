import { useEffect, useState } from 'react';
import { getVillages, getAIInsights } from '../services/api';
import './AIInsights.css';

export default function AIInsights() {
  const [villages, setVillages] = useState([]);
  const [selected, setSelected] = useState([]);
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getVillages().then(res => setVillages(res.data)).catch(() => {});
  }, []);

  const run = () => {
    setLoading(true);
    getAIInsights(selected)
      .then(res => setOutput(res.data))
      .catch(() => setOutput({ error: 'Failed to get AI insights' }))
      .finally(() => setLoading(false));
  };

  const toggle = (id) => setSelected((prev) => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  return (
    <div className='ai-insights'>
      <h2>🤖 जलसेतु एआई विश्लेषण रिपोर्ट</h2>
      <div className='ai-panels'>
        <aside className='ai-left'>
          <button onClick={() => setSelected(villages.filter(v => v.riskLevel === 'CRITICAL').map(v => v.id))}>Select All Critical</button>
          <button onClick={() => setSelected(villages.filter(v => v.riskLevel === 'CRITICAL').map(v=>v.id))}>Select All Dual Crisis</button>
          <p>{selected.length} villages selected</p>
          <ul>
            {villages.map(v => (
              <li key={v.id}>
                <label>
                  <input type='checkbox' checked={selected.includes(v.id)} onChange={() => toggle(v.id)} />
                  {v.name} ({v.district})
                </label>
              </li>
            ))}
          </ul>
          <button className='generate' onClick={run}>Generate AI Report</button>
        </aside>
        <section className='ai-right'>
          {loading ? <p>Generating report...</p> : output ? (
            <div>
              <h3>Situation Overview</h3>
              <p>{output.situationOverview}</p>
              <h3>Immediate Tanker Dispatch</h3>
              <ol>{output.immediateDispatch?.map((t,i) => <li key={i}>{t}</li>)}</ol>
              <h3>Groundwater Alert</h3>
              <p>{output.groundwaterAlert?.join?.(', ') || output.groundwaterAlert}</p>
              <h3>Preventive Advisory</h3>
              <p>{output.preventiveAdvisory}</p>
              <h3>Seasonal Pattern</h3>
              <p>{output.seasonalPattern}</p>
            </div>
          ) : <p>No data yet.</p> }
        </section>
      </div>
    </div>
  );
}
