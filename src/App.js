import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import KrafThink from './pages/KrafThink';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kraf-think-2025" element={<KrafThink />} />
      </Routes>
    </Router>
  );
}

export default App;