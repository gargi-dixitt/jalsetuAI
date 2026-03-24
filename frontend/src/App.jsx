import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Villages from './pages/Villages';
import Groundwater from './pages/Groundwater';
import Predictions from './pages/Predictions';
import AIInsights from './pages/AIInsights';
import VillageDetail from './pages/VillageDetail';
import About from './pages/About';

import './App.css';

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='app-layout'>
        <Sidebar />
        <main className='app-main'>
          <Routes>
            <Route path='/' element={<Navigate to='/dashboard' replace />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/villages' element={<Villages />} />
            <Route path='/villages/:id' element={<VillageDetail />} />
            <Route path='/groundwater' element={<Groundwater />} />
            <Route path='/predictions' element={<Predictions />} />
            <Route path='/ai' element={<AIInsights />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
