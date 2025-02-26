import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Headers from './components/Header';
import Footer from './components/Footer';
import KrafThink from './pages/krafThink/KrafThink';
import Products from './pages/Products';
import Loader from './components/Loader';
import About from './pages/About';
import HackathonRoute from './routes/HackathonRoute';
import ThankYouPage from './pages/krafThink/ThankYouPage';
import Career from './pages/Career';
import ContactUs from './pages/Contact';
import HackathonDashboard from './pages//krafThink/HackathonDashboard';
import AdminLogin from "./pages/krafThink/AdminLogin";
import NotFound from './pages/404Page';
import Service from './pages/Service';
import CareerRegistration from './pages/CareerRegistration';
import Announcement from './components/Announcement'; 
import PPTSubmission from "../src/pages//krafThink/pptSubmission"
import HackathonResults from "../src/pages/krafThink/HackathonResults"


// ✅ Protected Route for Thank You Page
const ProtectedThankYou = ({ children }) => {
    const location = useLocation();
    const hasAccess = localStorage.getItem("thankYouAccess") || location.state?.fromRegistration;
  
    if (!hasAccess) {
        return <Navigate to="/kraf-think-2025" replace />;
    }
    return children;
};

// ✅ Protected Route for Admin Dashboard
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
                <>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/our-services" element={<Service />} /> 
                        <Route path="/career" element={<Career />} />
                        {/* <Route path="/ppt-submission" element={<PPTSubmission />} /> */}
                        <Route path="/career/registration" element={<CareerRegistration />} />
                        <Route path="/kraf-think-2025/result" element={<HackathonResults />} />
                        <Route 
                            path="/kraf-think-2025" 
                            element={
                                <>
                                    <Announcement />  
                                    <KrafThink />
                                </>
                            } 
                        />
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
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </>
            )}
            <Footer />
        </Router>
    );
}

export default App;