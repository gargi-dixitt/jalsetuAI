import './WaterMeter.css';

export default function WaterMeter({ stock, dailyUsage, daysLeft }) {
  return (
    <div className='water-meter'>
      <div className='wm-header'><strong>Surface Water</strong></div>
      <div>Stock: {stock} L</div>
      <div>Daily use: {dailyUsage} L</div>
      <div>Days Left: {daysLeft}</div>
      <div className='meter'><div className='fill' style={{ width: `${Math.min(100, (daysLeft/20)*100)}%` }} /></div>
    </div>
  );
}
