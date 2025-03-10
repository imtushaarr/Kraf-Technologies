import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Headers from './components/Header';
import Footer from './components/Footer';
import KrafThink from './pages/krafThink/KrafThink';
import Products from './pages/Products';
import Loader from './components/Loader';
import About from './pages/About';
import Career from './pages/Career';
import ContactUs from './pages/Contact';
import NotFound from './pages/404Page';
import Service from './pages/Service';
import CareerRegistration from './pages/CareerRegistration';


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
                            <Route path="/careers" element={<Career />} />
                            <Route path="/careers/registration" element={<CareerRegistration />} />
                            <Route path="/kraf-think-2025" element={<KrafThink />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </>
                )}
                <Footer />
            </Router>
    );
}

export default App;