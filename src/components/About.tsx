import React from 'react';
import { Code2, Database, Globe, Users, Award, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Full-Stack Development', icon: Globe, description: 'Modern web applications with React, Node.js, and cloud technologies' },
    { name: 'Java Development', icon: Code2, description: 'Enterprise applications, microservices, and scalable backend systems' },
    { name: 'Database Design', icon: Database, description: 'SQL optimization, database architecture, and data modeling' },
    { name: 'Business Strategy', icon: Users, description: 'Marketing systems, process optimization, and growth strategies' },
    { name: 'Leadership', icon: Award, description: 'Team building, project management, and technical mentorship' },
    { name: 'Innovation', icon: Lightbulb, description: 'Emerging technologies, AI integration, and digital transformation' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-yellow-500">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate technologist and entrepreneur who bridges the gap between innovative code and business success. 
              As co-founder of Lenzro, I lead teams in creating transformative digital solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">My Journey</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                My path began with a curiosity for how technology could solve real-world problems. 
                From writing my first lines of Java code to co-founding Lenzro, I've been driven by 
                the belief that great software should be both powerful and purposeful.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, I focus on building systems that don't just work – they excel. Whether it's 
                architecting scalable web applications, optimizing database performance, or developing 
                marketing automation systems, I bring both technical expertise and strategic thinking to every project.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through Lenzro, we've helped businesses transform their digital presence and streamline 
                their operations. I believe in sharing knowledge, which is why I regularly contribute 
                to the developer community through tutorials, articles, and mentorship.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
              {/* My photo */}
              <img 
                src="/myphoto1.jpg" 
                alt="Yussuf Muse" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="space-y-6 mt-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-lg font-semibold text-gray-900">Core Values</span>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                    <span>Excellence in every line of code</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                    <span>Continuous learning and innovation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                    <span>Collaborative problem-solving</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                    <span>Empowering others through technology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-yellow-500/20 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{skill.name}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;