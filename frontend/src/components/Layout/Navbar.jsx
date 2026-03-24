import { useEffect, useState } from 'react';
import './Navbar.css';

function formatClock(date) {
  return date.toLocaleString('en-IN', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export default function Navbar() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className='navbar'>
      <div className='navbar-inner'>
        <div className='navbar-left'>
          <div className='brand'>
            <span className='emblem'>🇮🇳</span>
            <div>
              <h1>जलसेतु एआई · JalSetu AI</h1>
              <p>Smart Water Distribution Network — मध्यप्रदेश</p>
            </div>
          </div>
        </div>

        <div className='navbar-right'>
          <div>Madhya Pradesh Water Authority</div>
          <div>{formatClock(now)}</div>
        </div>
      </div>
      <div className='tricolor-strip'>
        <span className='stripe saffron'></span>
        <span className='stripe white'></span>
        <span className='stripe green'></span>
      </div>
    </header>
  );
}
