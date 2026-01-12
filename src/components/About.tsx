import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Cpu,
  Zap,
  Award,
  Calendar,
  Sparkles,
} from "lucide-react";

const About: React.FC = () => {
  const skills = [
    {
      name: "Full-Stack Development",
      icon: Globe,
      description: "React, Node.js, TypeScript with cloud-native architecture",
      color: "from-neon-cyan to-blue-500",
    },
    {
      name: "Java Engineering",
      icon: Code2,
      description: "Enterprise systems, microservices, Spring Boot ecosystem",
      color: "from-neon-purple to-purple-500",
    },
    {
      name: "Data Architecture",
      icon: Database,
      description: "SQL optimization, analytics pipelines, ETL workflows",
      color: "from-neon-pink to-pink-500",
    },
    {
      name: "System Design",
      icon: Cpu,
      description:
        "Scalable architecture, distributed systems, cloud infrastructure",
      color: "from-neon-green to-green-500",
    },
    {
      name: "Performance Optimization",
      icon: Zap,
      description: "Code efficiency, caching strategies, load balancing",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Leadership & Mentoring",
      icon: Award,
      description: "Team building, technical guidance, knowledge sharing",
      color: "from-indigo-400 to-purple-500",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Technologies", value: "20+" },
    { label: "Client Satisfaction", value: "99%" },
  ];

  return (
    <section id="about" className="relative py-32 bg-dark-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-dark-800/50 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm font-mono text-gray-400">About Me</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Crafting Digital </span>
              <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A passionate engineer and entrepreneur, transforming complex
              challenges into elegant, scalable solutions
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Column - Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card p-8">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-neon-cyan to-neon-purple rounded-full" />
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    My journey in technology started with a simple question:{" "}
                    <span className="text-neon-cyan font-semibold">
                      How can code change lives?
                    </span>{" "}
                    From crafting my first Java application to co-founding{" "}
                    <span className="text-neon-purple font-semibold">
                      Lenzro
                    </span>
                    , I've been driven by the pursuit of excellence and
                    innovation.
                  </p>
                  <p>
                    Today, I architect systems that power businesses at scale.
                    Whether it's building high-performance APIs, optimizing
                    database queries, or designing cloud infrastructure, I bring
                    both <span className="text-neon-cyan">technical depth</span>{" "}
                    and{" "}
                    <span className="text-neon-purple">strategic vision</span>{" "}
                    to every project.
                  </p>
                  <p>
                    Through Lenzro, we've transformed how businesses approach
                    digital solutions. I believe in sharing
                    knowledge—contributing to open source, writing technical
                    content, and mentoring the next generation of developers.
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="https://calendly.com/yussufh080/20min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-6 px-6 py-3 bg-gradient-to-r from-neon-green to-green-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform shadow-lg hover:shadow-neon-green/50"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Strategy Session</span>
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="glass-card p-6 text-center group hover:border-neon-cyan/50 transition-all"
                  >
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 font-mono">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Image & Values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="glass-card p-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <img
                    src="/myphoto1.jpg"
                    alt="Yussuf Muse"
                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                    <span className="text-xl font-semibold text-white">
                      Core Principles
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Code with purpose, build with passion",
                      "Continuous learning, constant evolution",
                      "Clean code, clear communication",
                      "Empowering others through technology",
                    ].map((value, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-start gap-3 text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-neon-purple rounded-full mt-2 flex-shrink-0" />
                        <span>{value}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Technical <span className="gradient-text">Expertise</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass-card p-6 group hover:border-neon-cyan/50 transition-all hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 bg-gradient-to-br ${skill.color} rounded-xl shadow-lg`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
