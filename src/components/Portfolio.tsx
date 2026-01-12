import React, { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
  id: 9,
  title: "Al Kalam Bookshop Management System",
  category: "fullstack",
  description:
    "A comprehensive, enterprise-level bookshop management platform integrating POS, inventory, financial operations, mobile support, and an e-commerce storefront. Features a polished glassmorphic dark UI with Capacitor-powered Android compatibility.",
  image:
    "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Capacitor",
    "React Query",
    "Vite"
  ],
  liveUrl: "https://alqalam.lenzro.com/",
  githubUrl: "https://github.com/yussufmuse344-cpu/al-qalam-bookshop",
  features: [
    "Complete POS system with line-item & global discounts",
    "Inventory lifecycle management with reorder alerts",
    "Returns workflow with automated inventory restoration",
    "Comprehensive financial dashboard: investments, expenses, debts, profits",
    "Professional PDF report generation (inventory & financials)",
    "Customer-facing e-commerce portal with cart & order tracking",
    "Role-based authentication for Admin & Staff",
    "Cyber services revenue tracking (printing, scanning, photocopying)",
    "Android support via Capacitor with custom app icon + splash screens",
    "Dark glassmorphic UI optimized for mobile & desktop"
  ],
  businessImpact:
    "Streamlined business operations, unified financial oversight, reduced manual work, and modernized customer experience with mobile-ready infrastructure.",
  architecture:
    "React 18 + TypeScript frontend, Supabase backend with PostgreSQL + RLS, Capacitor mobile runtime, Vite bundler, React Query caching strategy, jsPDF reporting engine."
},
    {
      id: 2,
      title: "Jenkinson SeaLife Website",
      category: "college",
      description:
        "Website for Jenkinson SeaLife, a marine company based in Singapore, created as a college project showcasing responsive design and marine-themed layouts.",
      image:
        "https://images.pexels.com/photos/2765872/pexels-photo-2765872.jpeg?auto=compress&cs=tinysrgb&w=800", // Sea image from Pexels
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://jenkinson-sealife.vercel.app",
      githubUrl: "https://github.com/yussuf3468/jenkinson",
    },
    {
      id: 8,
      title: "Hassan Muse BookShop Management System",
      category: "fullstack",
      description:
        "Enterprise-grade inventory and sales management platform for retail bookstore operations. Features real-time analytics, staff monitoring, bilingual support (English/Somali), and comprehensive security with Row Level Security (RLS).",
      image:
        "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
        "PWA",
      ],
      liveUrl: "https://book-store-nu-nine.vercel.app/",
      githubUrl: "https://github.com/yussuf3468/bookStore",
      features: [
        "Real-time inventory tracking with automated reorder alerts",
        "Advanced sales analytics with profit/loss analysis",
        "Staff activity monitoring with role-based access control",
        "Bilingual interface (English/Somali) for diverse demographics",
        "Progressive Web App with offline capabilities",
        "Enterprise-grade security with JWT and Row Level Security",
      ],
      businessImpact:
        "80% reduction in manual processes, real-time data-driven decisions, comprehensive staff accountability",
      architecture:
        "React 18 + TypeScript frontend, Supabase backend with PostgreSQL, PWA capabilities, multi-platform deployment",
    },
    {
      id: 1,
      title: "Odyssey Travel Web App",
      category: "fullstack",
      description:
        "A responsive travel booking platform built with React and Node.js, featuring destination search, booking management, and secure payment integration.",
      image:
        "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://travel-blog-nu-amber.vercel.app",
      githubUrl: "https://github.com/YussufMuse/odyssey-travel",
    },
    {
      id: 3,
      title: "Hospital Management System",
      category: "java",
      description:
        "A group college project built with Java and JavaFX, designed to manage hospital operations such as patient records, appointments, and staff management. My role included backend development and database integration using MySQL.",
      image:
        "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Java", "JavaFX", "MySQL"],
      liveUrl: "https://github.com/LenzroStudio/AfyaHospital",
      githubUrl: "https://github.com/LenzroStudio/AfyaHospital",
    },

    {
      id: 4,
      title: "Lenzro Website",
      category: "frontend",
      description:
        "A professional company website for Lenzro Tech built with Next.js and Tailwind CSS. It showcases services, portfolio, and contact information, optimized for performance and SEO.",
      image: "/lenzro1.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      liveUrl: "https://lenzro.com",
      githubUrl: "#",
    },

    {
      id: 5,
      title: "Portfolio Website",
      category: "frontend",
      description:
        "A personal portfolio website showcasing my skills, projects, and contact information.",
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS"],
      liveUrl: "https://yussufmuse.dev",
      githubUrl: "https://github.com/YussufMuse/portfolio",
    },
    {
      id: 6,
      title: "Social Media Campaign for Lenzro Client",
      category: "marketing",
      description:
        "Managed and executed a complete social media campaign, including content creation, design, scheduling, and analytics reporting.",
      image:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Canva", "Facebook Ads", "Instagram Marketing"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 7,
      title: "Restaurant Landing Page",
      category: "frontend",
      description:
        "A clean, modern, and mobile-friendly landing page for a local restaurant with menu preview and online reservation form.",
      image:
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/YussufMuse/restaurant-landing",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "java", label: "Java" },
    { id: "marketing", label: "Marketing Systems" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="portfolio"
      className="relative py-32 bg-dark-900 overflow-hidden"
    >
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-pink/30 bg-dark-800/50 backdrop-blur-sm mb-6">
              <Eye className="w-4 h-4 text-neon-pink" />
              <span className="text-sm font-mono text-gray-400">Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Featured </span>
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Innovative solutions from enterprise applications to marketing
              systems that drive real business results
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-lg shadow-neon-cyan/50"
                    : "glass-card text-gray-400 hover:border-neon-cyan/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group glass-card overflow-hidden hover:border-neon-pink/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.liveUrl}
                        className="bg-neon-cyan/20 backdrop-blur-sm p-2 rounded-full hover:bg-neon-cyan/30 transition-colors border border-neon-cyan/30"
                      >
                        <Eye className="w-4 h-4 text-neon-cyan" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="bg-neon-purple/20 backdrop-blur-sm p-2 rounded-full hover:bg-neon-purple/30 transition-colors border border-neon-purple/30"
                      >
                        <Github className="w-4 h-4 text-neon-purple" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500 capitalize bg-dark-700 px-3 py-1 rounded-full border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Enhanced features for BookShop project */}
                  {project.features && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2 text-sm">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-xs text-gray-500"
                          >
                            <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-1.5"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Business Impact for major projects */}
                  {project.businessImpact && (
                    <div className="mb-4 p-3 bg-neon-green/10 rounded-lg border-l-4 border-neon-green">
                      <h4 className="font-semibold text-neon-green mb-1 text-sm">
                        Business Impact:
                      </h4>
                      <p className="text-sm text-gray-400">
                        {project.businessImpact}
                      </p>
                    </div>
                  )}

                  {/* Architecture details */}
                  {project.architecture && (
                    <div className="mb-4 p-3 bg-neon-purple/10 rounded-lg border-l-4 border-neon-purple">
                      <h4 className="font-semibold text-neon-purple mb-1 text-sm">
                        Architecture:
                      </h4>
                      <p className="text-sm text-gray-400">
                        {project.architecture}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-dark-700 border border-neon-cyan/30 text-neon-cyan text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-neon-cyan hover:text-neon-purple transition-colors"
                      >
                        <span className="text-sm font-medium">Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-400 hover:text-neon-purple transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lenzro link - Ready to Transform Your Business? */}
          <div className="mt-20 text-center glass-card p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to <span className="gradient-text">Transform</span> Your
              Business?
            </h3>
            <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
              Visit <span className="font-semibold text-neon-cyan">Lenzro</span>{" "}
              — our startup dedicated to helping businesses grow with creative
              strategies, modern technology, and data-driven solutions.
            </p>
            <a
              href="https://lenzro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-105"
            >
              Explore Lenzro
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
