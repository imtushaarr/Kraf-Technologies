import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import Career from './pages/Career';
import ContactUs from './pages/Contact';
import HackathonDashboard from './pages/HackathonDashboard';
import AdminLogin from "./pages/AdminLogin";
import NotFound from './pages/404Page';
import Service from './pages/Service';


const ProtectedThankYou = ({ children }) => {
    const location = useLocation();
    const hasAccess = localStorage.getItem("thankYouAccess") || location.state?.fromRegistration;
  
    if (!hasAccess) {
      return <Navigate to="/kraf-think-2025" replace />;
    }
  
    return children;
  };

  const ProtectedRoute = ({ children }) => {
    return localStorage.getItem("adminAuth") ? children : <Navigate to="/admin-hackathon-dashboard" replace />;
};


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
                    <Route path="/about" element={<About />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/our-servies" element={<Service />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/kraf-think-2025" element={<KrafThink />} />
                    <Route path="/kraf-think-2025/*" element={<HackathonRoute />} />
                    <Route path="/admin-hackathon-dashboard" element={<AdminLogin />} />
                    <Route 
                        path="/hackathon-dashboard" 
                        element={
                            <ProtectedRoute>
                                <HackathonDashboard />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path="/kraf-think-2025/thank-you" 
                        element={
                            <ProtectedThankYou>
                                <ThankYouPage />
                            </ProtectedThankYou>
                        } 
                    />
                    <Route path="*" element={<NotFound />}  />
                </Routes>
            )}
            <Footer />
        </Router>
    );
}

export default App;