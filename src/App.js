import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Headers from './components/Header';
import Footer from './components/Footer';
import KrafThink from './pages/KrafThink';
import AboutKrafThink from './pages/About-Kt';
import Products from './pages/Products';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Headers />
      {loading ? (
        <Loader /> 
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/kraf-think-2025" element={<KrafThink />} />
          <Route path="/kraf-think-2025/about" element={<AboutKrafThink />} />
        </Routes>
      )}
      <Footer />
    </Router>
  );
}

export default App;