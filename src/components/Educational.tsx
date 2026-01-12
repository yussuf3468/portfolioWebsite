import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  TrendingUp,
  Database,
  Globe,
  Clock,
  User,
  GraduationCap,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const Educational: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const articles = [
    {
      id: 200,
      title: "Building Hassan Muse BookShop: Enterprise Inventory Management",
      category: "case-study",
      excerpt:
        "A deep dive into developing a full-stack inventory management system with React, TypeScript, and Supabase. Learn about real-time analytics, bilingual support, and enterprise security implementation.",
      readTime: "15 min read",
      date: "2025-10-06",
      image:
        "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "https://book-store-nu-nine.vercel.app/",
      isProject: true,
      githubUrl: "https://github.com/yussuf3468/bookStore",
      technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "PWA"],
      keyFeatures: [
        "Real-time inventory tracking with automated alerts",
        "Advanced sales analytics and profit analysis",
        "Bilingual interface (English/Somali)",
        "Enterprise-grade security with Row Level Security",
      ],
    },
    {
      id: 6,
      title: "Building Scalable APIs with Node.js and Express",
      category: "web",
      excerpt:
        "Best practices for creating robust, maintainable APIs that handle high-traffic loads.",
      readTime: "11 min read",
      date: "2023-12-15",
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "https://blog.risingstack.com/node-js-api-development/",
    },
    {
      id: 100,
      title: "Barashada Teknolojiyada Casriga ah",
      category: "tech",
      excerpt:
        "Teknolojiyadu waa furaha horumarka maanta. Maqaalkan waxa aan ku eegaynaa sida loo barto xirfadaha casriga ah ee IT-ga iyo sida ay nolosha u bedeli karto.",
      readTime: "7 daqiiqo akhris",
      date: "2025-09-22",
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "https://www.somalitech.com/barashada-teknolojiyada", // Placeholder link
    },
    {
      id: 2,
      title: "Advanced React Patterns for Enterprise Applications",
      category: "web",
      excerpt:
        "Discover powerful React patterns that scale: compound components, render props, and custom hooks.",
      readTime: "8 min read",
      date: "2024-01-10",
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "https://kentcdodds.com/blog/application-state-management-with-react",
    },
    {
      id: 102,
      title: "Horumarinta Naftaada iyo Waxbarashada",
      category: "personal",
      excerpt:
        "Waxbarashadu waa furaha guusha. Maqaalkan waxa aan kaga hadli doonaa sida loo horumariyo naftaada iyo muhiimadda ay leedahay waxbarashadu.",
      readTime: "5 daqiiqo akhris",
      date: "2025-09-22",
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "https://www.somalieducation.com/horumarinta-naftaada", // Placeholder link
    },
    {
      id: 101,
      title: "Sida Ganacsi Loogu Bilaabo Internet-ka",
      category: "business",
      excerpt:
        "Internet-ka waxa uu fursad weyn u yahay ganacsatada cusub. Maqaalkan waxa aan ku baran doonaa talaabooyinka ugu muhiimsan ee ganacsi online ah lagu bilaabo.",
      readTime: "6 daqiiqo akhris",
      date: "2025-09-22",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "https://www.somalibusiness.com/ganacsi-internet", // Placeholder link
    },

    {
      id: 3,
      title: "SQL Optimization Techniques That Actually Work",
      category: "sql",
      excerpt:
        "Practical strategies to improve query performance and database efficiency in production.",
      readTime: "15 min read",
      date: "2024-01-05",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "https://www.datacamp.com/blog/sql-query-optimization",
    },
    {
      id: 4,
      title: "Marketing Automation: From Strategy to Implementation",
      category: "marketing",
      excerpt:
        "Build effective marketing funnels using modern automation tools and data-driven insights.",
      readTime: "10 min read",
      date: "2023-12-28",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "https://maropost.com/blog/6-key-steps-to-building-a-marketing-automation-strategy/",
    },
    {
      id: 5,
      title: "The Entrepreneur's Guide to Technical Leadership",
      category: "entrepreneurship",
      excerpt:
        "How to balance technical excellence with business strategy when building a tech company.",
      readTime: "14 min read",
      date: "2023-12-20",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "https://hbr.org/2017/06/what-it-takes-to-lead-an-engineering-team",
    },
  ];

  const categories = [
    { id: "all", label: "All Topics", icon: BookOpen },
    { id: "case-study", label: "Case Studies", icon: TrendingUp },
    { id: "java", label: "Java", icon: Code },
    { id: "web", label: "Web Development", icon: Globe },
    { id: "sql", label: "SQL & Databases", icon: Database },
    { id: "marketing", label: "Marketing", icon: TrendingUp },
    { id: "entrepreneurship", label: "Entrepreneurship", icon: User },
  ];

  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <section
      id="educational"
      className="relative py-32 bg-dark-900 overflow-hidden"
    >
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Knowledge Hub */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-dark-800/50 backdrop-blur-sm mb-6">
              <BookOpen className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm font-mono text-gray-400">Knowledge</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Knowledge </span>
              <span className="gradient-text">Hub</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Sharing insights on coding, business strategy, and technology
              trends. Learn from real-world experiences and practical solutions.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-lg shadow-neon-cyan/50"
                    : "glass-card text-gray-400 hover:border-neon-cyan/50"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group glass-card overflow-hidden hover:border-neon-cyan/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-neon-cyan/20 backdrop-blur-sm border border-neon-cyan/50 text-neon-cyan px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                    {article.excerpt}
                  </p>

                  {/* Enhanced features for case study projects */}
                  {article.isProject && article.keyFeatures && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2 text-sm">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {article.keyFeatures.slice(0, 2).map((feature, idx) => (
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

                  {/* Technology stack for projects */}
                  {article.technologies && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-dark-700 border border-neon-cyan/30 text-neon-cyan text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-cyan font-medium hover:text-neon-purple transition-colors text-sm"
                    >
                      {article.isProject ? "View Project →" : "Read Article →"}
                    </a>
                    {article.githubUrl && (
                      <a
                        href={article.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-neon-purple transition-colors text-sm"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Tutoring & Mentorship Section */}
          <div className="mt-20 glass-card p-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-neon-purple/20 to-purple-500/20 rounded-xl border border-neon-purple/30">
                <GraduationCap className="w-12 h-12 text-neon-purple" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              1-on-1 Tutoring & Mentorship
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
              Need personalized guidance? I offer tailored tutoring sessions in
              Java, SQL, React, and full-stack development. Get help with
              projects, interview prep, or mastering tough concepts with
              step-by-step mentorship.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-purple to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-neon-purple/50 hover:scale-105 transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Book a Tutoring Session</span>
            </button>
          </div>

          {/* Newsletter CTA */}
          {/* <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-500/10 to-cyan-500/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Learn More?</h3>
              <p className="text-lg text-gray-600 mb-6">
                Subscribe to my newsletter for weekly insights on technology, business, and growth strategies.
              </p>
              <button 
                onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
              >
                Subscribe Now
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Educational;
