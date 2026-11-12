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
import Nidaam from "./components/Nidaam";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Educational from "./components/Educational";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import FloatingCta from "./components/FloatingCta";
import WorkDetail from "./components/WorkDetail";
import { Cursor } from "./components/ui/Cursor";
import { useSeo } from "./lib/useSeo";

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

/** Anchor links arriving from another route (e.g. "/#work") land at the top
 *  unless we scroll once the home sections have mounted. */
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname, hash]);
  return null;
}

function HomePage() {
  useSeo({
    title: "Yussuf Muse — Software Engineer · Co-Founder, Nidaam Solutions",
    description:
      "Yussuf Muse — software engineer and co-founder of Nidaam Solutions. Building full-stack systems for retail, hospitality and education across East Africa.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Nidaam />
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:font-mono focus:text-[12px] focus:uppercase focus:tracking-tracked focus:text-brand-ink"
        >
          Skip to content
        </a>
        <Cursor />
        <Header />
        <FloatingCta />
        <ScrollToContact />
        <ScrollToHash />
        <main id="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<HomePage />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
