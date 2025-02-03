import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Headers from './components/Header';
import Footer from './components/Footer';
import KrafThink from './pages/KrafThink';
import Products from './pages/Products';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';
import About from './pages/About';
import HackathonRoute from './routes/HackathonRoute';
import ThankYouPage from './pages/ThankYouPage';

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
          <Route path="/kraf-think-2025/*" element={<HackathonRoute />} />
          <Route path="/about" element={<About />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      )}
      <Footer />
    </Router>
  );
}

export default App;