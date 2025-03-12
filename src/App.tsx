import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { AuthProvider } from './context/AuthContext';
import OffersAndUpdate from './pages/OffersAndUpdate';
import Signup from './pages/Signup';
import SocialProof from './components/SocialProof';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="min-h-screen bg-[#D1E8E2]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offers-and-updates" element={<OffersAndUpdate />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup'element={<Signup />} />
        </Routes>
        <Footer />
        <SocialProof />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
