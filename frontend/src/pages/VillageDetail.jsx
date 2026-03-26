import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getVillage, getGroundwater } from '../services/api';
import WaterMeter from '../components/UI/WaterMeter';
import AquiferGauge from '../components/UI/AquiferGauge';
import DepletionTrend from '../components/UI/DepletionTrend';
import './VillageDetail.css';

export default function VillageDetail() {
  const { id } = useParams();
  const [village, setVillage] = useState(null);
  const [groundwater, setGroundwater] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getVillage(id), getGroundwater(id)])
      .then(([vRes, gwRes]) => {
        setVillage(vRes.data);
        setGroundwater(gwRes.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading detail...</p>;
  if (!village) return <p>Village not found.</p>;

  return (
    <div className='village-detail'>
      <div className='detail-header'><Link to='/villages'>← Back</Link><h2>{village.name} - {village.district}</h2></div>
      <div className='detail-grid'>
        <div className='detail-panel'>
          <h3>SURFACE WATER</h3>
          <WaterMeter stock={village.waterStockLiters} dailyUsage={village.dailyUsageLiters} daysLeft={village.daysLeft} />
          <p>Last Tanker: {village.lastTankerDate}</p>
        </div>
        <div className='detail-panel'>
          <h3>GROUNDWATER</h3>
          <AquiferGauge currentDepth={groundwater?.currentDepthMeters} criticalDepth={groundwater?.criticalDepthMeters} healthScore={groundwater?.aquiferHealthScore} />
          <p>Days until critical: {groundwater?.daysUntilCritical}</p>
        </div>
      </div>
      <div className='detail-section'>
        <h4>GROUNDWATER TREND</h4>
        <DepletionTrend monthlyReadings={groundwater?.monthlyReadings} />
      </div>
      <div className='detail-section'>
        <h4>TANKER DISPATCH HISTORY</h4>
        <ul>
          {village.tankerHistory.map((h,i) => <li key={i}>{h.date}: {h.liters} L</li>)}
        </ul>
      </div>
    </div>
  );
}
