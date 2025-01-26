import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import KrafThink from './pages/KrafThink';
import AboutKrafThink from './pages/About-Kt';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kraf-think-2025" element={<KrafThink />} />
          <Route path="/kraf-think-2025/about" element={<AboutKrafThink />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;