import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from '../src/pages/Home';
import Headers from '../src/components/Header';
import Footer from '../src/components/Footer';
import KrafThink from '../src/pages/KrafThink';
import Products from '../src/pages/Products';
import Loader from '../src/components/Loader';
import About from '../src/pages/About';
import HackathonRoute from '../src/routes/HackathonRoute';
import ThankYouPage from '../src/pages/ThankYouPage';

function App() {
    const [loading, setLoading] = useState(true);

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
                    <Route path="/kraf-think-2025" element={<KrafThink />} />
                    <Route path="/kraf-think-2025/*" element={<HackathonRoute />} />
                    <Route path="/kraf-think-2025/thank-you" element={<ThankYouPage />} />
                </Routes>
            )}
            <Footer />
        </Router>
    );
}

export default App;