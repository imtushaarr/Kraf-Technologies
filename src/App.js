import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/Contact"));
const Service = lazy(() => import("./pages/Service"));
const Career = lazy(() => import("./pages/Career"));
const CareerRegistration = lazy(() => import("./pages/CareerRegistration"));
const KrafThink = lazy(() => import("./pages/krafThink/KrafThink"));
const NotFound = lazy(() => import("./pages/404Page"));

function App() {
  return (
    <Router>
      <Headers />
      <Suspense fallback={<Loader />}>
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
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;