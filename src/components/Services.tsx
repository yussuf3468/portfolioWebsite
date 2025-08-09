import React from 'react';
import { Code, Server, Database, Smartphone, Cloud, Zap, Users, BarChart3 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'Modern, responsive web applications built with React, Node.js, and cutting-edge technologies.',
      features: ['React & TypeScript', 'RESTful APIs', 'Progressive Web Apps', 'Performance Optimization']
    },
    {
      icon: Server,
      title: 'Java Enterprise Solutions',
      description: 'Robust, scalable backend systems and microservices architecture for enterprise applications.',
      features: ['Spring Framework', 'Microservices', 'API Development', 'System Integration']
    },
    {
      icon: Database,
      title: 'Database Design & Optimization',
      description: 'Efficient database architecture, query optimization, and data modeling for peak performance.',
      features: ['SQL Optimization', 'Data Modeling', 'Performance Tuning', 'Migration Services']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure, deployment automation, and DevOps best practices.',
      features: ['AWS/Azure Deployment', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Scaling']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive, mobile-optimized applications that deliver exceptional user experiences.',
      features: ['Responsive Design', 'PWA Development', 'Cross-Platform', 'UI/UX Optimization']
    },
    {
      icon: BarChart3,
      title: 'Marketing Systems',
      description: 'Automated marketing workflows, analytics dashboards, and growth optimization tools.',
      features: ['Marketing Automation', 'Analytics Integration', 'CRM Systems', 'Lead Generation']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-yellow-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to elevate your business. From concept to deployment, 
              We deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-yellow-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl group-hover:shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-8">
              Need a custom solution? Let's discuss how I can help transform your ideas into reality.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;