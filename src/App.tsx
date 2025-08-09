import React, { useEffect } from 'react';
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
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <Header />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;