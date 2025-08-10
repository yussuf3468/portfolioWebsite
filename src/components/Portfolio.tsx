import React, { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
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
      id: 2,
      title: "Jenkinson SeaLife Website",
      category: "college",
      description:
        "Website for Jenkinson SeaLife, a marine company based in Singapore, created as a college project showcasing responsive design and marine-themed layouts.",
      image:
        "https://images.pexels.com/photos/2765872/pexels-photo-2765872.jpeg?auto=compress&cs=tinysrgb&w=800", // Sea image from Pexels
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://jenkinson-sealife.vercel.app",
      githubUrl: "#",
    },

    {
      id: 3,
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
    {
      id: 4,
      title: "College Project: Student Management System",
      category: "java",
      description:
        "Java-based application for managing student records, grades, and attendance, built as part of a college project.",
      image:
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Java", "MySQL", "Swing"],
      liveUrl: "#",
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
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-yellow-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of innovative solutions I've built, from enterprise
              applications to marketing systems that drive real business
              results.
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
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-yellow-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.liveUrl}
                        className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                      >
                        <Eye className="w-4 h-4 text-gray-900" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                      >
                        <Github className="w-4 h-4 text-gray-900" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 capitalize">
                      {project.category}
                    </span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-yellow-600 hover:text-yellow-700 transition-colors"
                    >
                      <span className="text-sm font-medium">View Project</span>

                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lenzro link - Ready to Transform Your Business? */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to <span className="text-yellow-500">Transform</span> Your
              Business?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Visit <span className="font-semibold">Lenzro</span> — our startup
              dedicated to helping businesses grow with creative strategies,
              modern technology, and data-driven solutions.
            </p>
            <a
              href="https://lenzro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-full shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
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
