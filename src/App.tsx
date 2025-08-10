import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Lenzro from './components/Lenzro';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Educational from './components/Educational';
import Testimonials from './components/Testimonials';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function ScrollToSectionOnLoad() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/contact') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // If URL is /contact, change it back to /
  if (location.pathname === '/contact') {
    return <Navigate to="/" replace />;
  }
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Lenzro />
      <Services />
      <Portfolio />
      <Educational />
      <Testimonials />
      <Timeline />
      <Contact />
      <Newsletter />
    </>
  );
}

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallax = document.querySelector('.parallax');
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-inter">
        <Header />
        <ScrollToSectionOnLoad />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* This allows /contact to exist but just redirects */}
            <Route path="/contact" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
