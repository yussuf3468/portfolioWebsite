import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Lenzro from "./components/Lenzro";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Educational from "./components/Educational";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import FloatingCta from "./components/FloatingCta";
import { Cursor } from "./components/ui/Cursor";

function ScrollToContact() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/contact") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  if (location.pathname === "/contact") return <Navigate to="/" replace />;
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Lenzro />
      <Educational />
      <Testimonials />
      <Timeline />
      <Contact />
      <Newsletter />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-ink text-cream font-sans antialiased">
        <Cursor />
        <Header />
        <FloatingCta />
        <ScrollToContact />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
