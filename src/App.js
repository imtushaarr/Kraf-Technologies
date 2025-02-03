import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Headers from './components/Header';
import Footer from './components/Footer';
import KrafThink from './pages/KrafThink';
import Products from './pages/Products';
import Loader from './components/Loader';
import About from './pages/About';
import HackathonRoute from './routes/HackathonRoute';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission status

  useEffect(() => {
    // Read the submission status from localStorage
    const registrationCompleted = localStorage.getItem("registrationCompleted");
    if (registrationCompleted === "true") {
      setIsSubmitted(true);  // Mark as submitted
    }
  }, []); // This effect runs once on component mount

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading state for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Headers />
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/kraf-think-2025" element={<KrafThink setIsSubmitted={setIsSubmitted} />} />

          {/* Hackathon routes */}
          <Route path="/kraf-think-2025/*" element={<HackathonRoute />} />

          {/* Thank You page route with submission guard */}
          <Route
            path="/kraf-think-2025/thank-you"
            element={isSubmitted ? <ThankYouPage /> : <Navigate to="/kraf-think-2025" />}
          />
        </Routes>
      )}
      <Footer />
    </Router>
  );
}

export default App;