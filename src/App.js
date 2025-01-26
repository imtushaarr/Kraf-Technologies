import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import KrafThink from './pages/KrafThink';
import AboutKrafThink from './pages/About-Kt';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kraf-think-2025" element={<KrafThink />} />
        <Route path="/kraf-think-2025/about" element={<AboutKrafThink />} />
      </Routes>
    </Router>
  );
}

export default App;