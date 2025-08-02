// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Page Components
import Home from './pages/Home';
import Missions from './pages/Missions';
import Breaches from './pages/Breaches';
import Agents from './pages/Agents';
import DarkLog from './pages/DarkLog';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css'; // Import your global styles

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-[#00FF9F] font-mono">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/breaches" element={<Breaches />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/darklog" element={<DarkLog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
