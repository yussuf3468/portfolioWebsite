import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Zap,
  Target,
  Cog,
  TrendingUp,
  Sparkles,
  Award,
} from "lucide-react";

const Lenzro: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: "Strategic Marketing",
      description: "Data-driven campaigns with measurable ROI",
      gradient: "from-neon-cyan to-blue-500",
    },
    {
      icon: Cog,
      title: "Systems Development",
      description: "Scalable software solutions built right",
      gradient: "from-neon-purple to-purple-500",
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernizing processes with cutting-edge tech",
      gradient: "from-neon-pink to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description: "Automated systems that scale operations",
      gradient: "from-neon-green to-green-500",
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered", color: "text-neon-cyan" },
    { value: "99%", label: "Client Satisfaction", color: "text-neon-purple" },
    { value: "24/7", label: "Support Available", color: "text-neon-pink" },
  ];

  return (
    <section id="lenzro" className="relative py-32 bg-dark-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]" />

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
              <Award className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-mono text-gray-400">
                Co-Founded
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Lenzro</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Premium marketing and systems development delivering complete
              technology solutions that transform businesses and accelerate
              growth
            </p>
            <motion.a
              href="https://lenzro.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-neon-purple/50 transition-all"
            >
              <span>Visit Lenzro</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-card p-6 hover:border-neon-purple/50 transition-all hover:scale-105"
              >
                <div
                  className={`inline-flex p-3 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg mb-4`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mission & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-neon-cyan to-neon-purple rounded-full" />
                  Our Mission
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                  At{" "}
                  <span className="text-neon-purple font-semibold">Lenzro</span>
                  , we democratize access to premium technology. Combining
                  strategic marketing with cutting-edge development, we create
                  systems that anticipate tomorrow's opportunities.
                </p>
                <div className="space-y-3">
                  {[
                    "Complete technology ecosystems",
                    "Scalable marketing automation",
                    "Data-driven business intelligence",
                    "AI-powered growth solutions",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full" />
                      <span className="text-gray-400 font-mono text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 font-mono">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Lenzro;
