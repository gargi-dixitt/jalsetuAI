import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const sections = [
  { label: 'Dashboard', path: '/dashboard', icon: '📊' },
  { label: 'Villages', path: '/villages', icon: '🏘' },
  { label: 'Groundwater', path: '/groundwater', icon: '💧' },
  { label: 'Predictions', path: '/predictions', icon: '🔮' },
  { label: 'AI Insights', path: '/ai', icon: '🤖' },
  { label: 'About', path: '/about', icon: 'ℹ️' }
];

export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className='sidebar-block'>
        <h3>NAVIGATION</h3>
        <nav>
          {sections.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
              <span>{item.icon}</span> {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className='sidebar-block'>
        <h3>PILOT DISTRICTS</h3>
        <p>Sagar · Damoh · Panna · Chhatarpur · Tikamgarh · Vidisha · Raisen · Narsinghpur</p>
      </div>

      <div className='sidebar-block'>
        <h3>SYSTEM STATUS</h3>
        <p>&#9679; API Live</p>
        <p>&#9679; 22 Villages</p>
        <p>&#9679; Groq Connected</p>
      </div>

      <div className='sidebar-footer'>
        <div className='ashoka'>੦</div>
      </div>
    </aside>
  );
}
