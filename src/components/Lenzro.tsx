import React from 'react';
import { ExternalLink, Zap, Target, Cog, TrendingUp } from 'lucide-react';

const Lenzro: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Strategic Marketing',
      description: 'Data-driven marketing campaigns that deliver measurable results'
    },
    {
      icon: Cog,
      title: 'Systems Development',
      description: 'Custom software solutions built for scalability and performance'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Modernizing business processes with cutting-edge technology'
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Automated systems that scale your business operations'
    },
    {
      icon: Zap,
      title: 'AI & Automation',
      description: 'Leveraging AI to enhance efficiency and drive innovation'
    },
    {
      icon: Target,
      title: 'Brand Strategy',
      description: 'Building strong brands that resonate with your audience'
    },
    {
      icon: Cog,
      title: 'Web Development',
      description: 'Creating responsive, high-performance websites and applications'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Transforming data into actionable business intelligence'
    }
  ];

  return (
    <section id="lenzro" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-yellow-500 font-semibold uppercase tracking-wider">Co-Founded</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Lenzro
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Premium marketing and systems development company delivering complete technology 
              solutions that transform businesses and accelerate growth.
            </p>
            <a 
              href="https://lenzro.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
            >
              <span>Visit Lenzro</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl w-fit mb-4">
                  <service.icon className="w-6 h-6 text-yellow-500" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-500/10 to-cyan-500/10 rounded-3xl border border-white/10 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  At Lenzro, we believe every business deserves access to premium technology solutions. 
                  We combine strategic marketing expertise with cutting-edge development to create 
                  systems that don't just meet today's needs – they anticipate tomorrow's opportunities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-300">Complete technology ecosystems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-300">Scalable marketing automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-300">Data-driven business intelligence</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">10+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lenzro;