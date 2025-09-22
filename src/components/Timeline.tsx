import React from 'react';
import { Calendar, Award, Briefcase, GraduationCap, Rocket, Users } from 'lucide-react';

const Timeline: React.FC = () => {
  const milestones = [
    {
      year: '2024',
      title: 'Lenzro Expansion',
      subtitle: 'Growing Team & Global Reach',
      description: 'Expanded Lenzro to serve 50+ clients globally with a team of expert developers and marketers.',
      icon: Users,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      year: '2023',
      title: 'Co-Founded Lenzro',
      subtitle: 'Premium Marketing & Systems Company',
      description: 'Launched Lenzro to deliver complete technology solutions combining marketing expertise with systems development.',
      icon: Rocket,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      year: '2022',
      title: 'Enterprise Solutions Expert',
      subtitle: 'Java Architecture & Scalability',
      description: 'Specialized in enterprise Java applications, microservices architecture, and large-scale database optimization.',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2021',
      title: 'Full-Stack Mastery',
      subtitle: 'Modern Web Technologies',
      description: 'Achieved expertise in React, Node.js, and cloud technologies, delivering end-to-end web solutions.',
      icon: Award,
      color: 'from-green-500 to-green-600'
    },
    {
      year: '2020',
      title: 'Professional Developer',
      subtitle: 'First Enterprise Projects',
      description: 'Started working on enterprise-level projects, focusing on Java development and database systems.',
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: '2019',
      title: 'Coding Journey Began',
      subtitle: 'First Line of Code',
      description: 'Discovered my passion for programming and started learning Java, SQL, and web development fundamentals.',
      icon: Calendar,
      color: 'from-gray-500 to-gray-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-yellow-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From writing my first line of code to co-founding Lenzro, here are the key milestones 
              that shaped my career in technology and entrepreneurship.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-cyan-500 to-gray-300"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center shadow-lg`}>
                    <milestone.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-yellow-500/20 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-yellow-600 mb-1">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                        <p className="text-sm text-gray-500 font-medium">{milestone.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">What's Next?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm always looking ahead, exploring new technologies and opportunities to create 
                innovative solutions that make a real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Donate Button - styled and centered */}
                <a
                  href="https://www.paypal.com/donate?business=yussufh080@gmail.com&currency_code=USD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span role="img" aria-label="donate">💸</span>
                  <span>Buy me a coffee</span>
                </a>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
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