import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Smartphone,
  Cloud,
  Zap,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Modern, scalable web applications with React, Node.js, and cutting-edge frameworks.",
      features: [
        "React & TypeScript",
        "RESTful APIs",
        "Progressive Web Apps",
        "Real-time Features",
      ],
      gradient: "from-neon-cyan to-blue-500",
    },
    {
      icon: Server,
      title: "Java Enterprise Solutions",
      description:
        "Robust backend systems and microservices architecture for enterprise-grade applications.",
      features: [
        "Spring Boot",
        "Microservices",
        "API Gateway",
        "System Integration",
      ],
      gradient: "from-neon-purple to-purple-500",
    },
    {
      icon: Database,
      title: "Database Architecture",
      description:
        "Optimized database design, query tuning, and data modeling for peak performance.",
      features: [
        "SQL Optimization",
        "Data Modeling",
        "Performance Tuning",
        "Migration Strategy",
      ],
      gradient: "from-neon-pink to-pink-500",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud solutions, deployment automation, and DevOps best practices.",
      features: [
        "AWS/Azure/GCP",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Auto-scaling",
      ],
      gradient: "from-neon-green to-green-500",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Responsive, mobile-optimized applications delivering exceptional user experiences.",
      features: [
        "Responsive Design",
        "PWA Development",
        "Cross-Platform",
        "Performance Optimization",
      ],
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: BarChart3,
      title: "Marketing Automation",
      description:
        "Data-driven marketing systems, analytics dashboards, and growth optimization.",
      features: [
        "Marketing Automation",
        "Analytics Integration",
        "CRM Systems",
        "Lead Generation",
      ],
      gradient: "from-indigo-400 to-purple-500",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-32 bg-dark-800 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-purple/30 bg-dark-900/50 backdrop-blur-sm mb-6">
              <Zap className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-mono text-gray-400">Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">What I </span>
              <span className="gradient-text">Build</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              End-to-end solutions from architecture to deployment, crafted with
              precision and built for scale
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-card p-8 hover:border-neon-cyan/50 transition-all hover:scale-105 relative overflow-hidden"
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg mb-6`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full" />
                        <span className="text-sm text-gray-500 font-mono">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg font-semibold text-white hover:scale-105 transition-transform shadow-lg hover:shadow-neon-cyan/50"
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Your Project</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
