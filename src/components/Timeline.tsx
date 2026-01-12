import React from "react";
import {
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Rocket,
  Users,
} from "lucide-react";

const Timeline: React.FC = () => {
  const milestones = [
    {
      year: "2024",
      title: "Lenzro Expansion",
      subtitle: "Growing Team & Global Reach",
      description:
        "Expanded Lenzro to serve 50+ clients globally with a team of expert developers and marketers.",
      icon: Users,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      year: "2023",
      title: "Co-Founded Lenzro",
      subtitle: "Premium Marketing & Systems Company",
      description:
        "Launched Lenzro to deliver complete technology solutions combining marketing expertise with systems development.",
      icon: Rocket,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      year: "2022",
      title: "Enterprise Solutions Expert",
      subtitle: "Java Architecture & Scalability",
      description:
        "Specialized in enterprise Java applications, microservices architecture, and large-scale database optimization.",
      icon: Briefcase,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "2021",
      title: "Full-Stack Mastery",
      subtitle: "Modern Web Technologies",
      description:
        "Achieved expertise in React, Node.js, and cloud technologies, delivering end-to-end web solutions.",
      icon: Award,
      color: "from-green-500 to-green-600",
    },
    {
      year: "2020",
      title: "Professional Developer",
      subtitle: "First Enterprise Projects",
      description:
        "Started working on enterprise-level projects, focusing on Java development and database systems.",
      icon: GraduationCap,
      color: "from-purple-500 to-purple-600",
    },
    {
      year: "2019",
      title: "Coding Journey Began",
      subtitle: "First Line of Code",
      description:
        "Discovered my passion for programming and started learning Java, SQL, and web development fundamentals.",
      icon: Calendar,
      color: "from-gray-500 to-gray-600",
    },
  ];

  return (
    <section className="relative py-32 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-purple/30 bg-dark-800/50 backdrop-blur-sm mb-6">
              <Calendar className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-mono text-gray-400">Timeline</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">My </span>
              <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From first line of code to co-founding Lenzro—key milestones that
              shaped my career in technology and entrepreneurship
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center shadow-lg shadow-neon-cyan/50`}
                  >
                    <milestone.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-card p-8 hover:border-neon-cyan/50 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-neon-cyan mb-1">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">
                          {milestone.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="glass-card p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                What's Next?
              </h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                I'm always looking ahead, exploring new technologies and
                opportunities to create innovative solutions that make a real
                impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Donate Button - styled and centered */}
                <a
                  href="https://www.paypal.com/donate?business=yussufh080@gmail.com&currency_code=USD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-cyan to-neon-purple text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-neon-cyan/50 hover:scale-105 transition-all duration-300"
                >
                  <span role="img" aria-label="donate">
                    💸
                  </span>
                  <span>Buy me a coffee</span>
                </a>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-dark-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border border-neon-purple/30 hover:border-neon-purple hover:bg-dark-800 transition-all duration-300 hover:scale-105"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
