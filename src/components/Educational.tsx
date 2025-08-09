import React, { useState } from 'react';
import { BookOpen, Code, TrendingUp, Database, Globe, Clock, User } from 'lucide-react';

const Educational: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: 'Mastering Java Microservices Architecture',
      category: 'java',
      excerpt: 'Learn how to design and implement scalable microservices using Spring Boot and Docker.',
      readTime: '12 min read',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Advanced React Patterns for Enterprise Applications',
      category: 'web',
      excerpt: 'Discover powerful React patterns that scale: compound components, render props, and custom hooks.',
      readTime: '8 min read',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'SQL Optimization Techniques That Actually Work',
      category: 'sql',
      excerpt: 'Practical strategies to improve query performance and database efficiency in production.',
      readTime: '15 min read',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Marketing Automation: From Strategy to Implementation',
      category: 'marketing',
      excerpt: 'Build effective marketing funnels using modern automation tools and data-driven insights.',
      readTime: '10 min read',
      date: '2023-12-28',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'The Entrepreneur\'s Guide to Technical Leadership',
      category: 'entrepreneurship',
      excerpt: 'How to balance technical excellence with business strategy when building a tech company.',
      readTime: '14 min read',
      date: '2023-12-20',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Building Scalable APIs with Node.js and Express',
      category: 'web',
      excerpt: 'Best practices for creating robust, maintainable APIs that handle high-traffic loads.',
      readTime: '11 min read',
      date: '2023-12-15',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Topics', icon: BookOpen },
    { id: 'java', label: 'Java', icon: Code },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'sql', label: 'SQL & Databases', icon: Database },
    { id: 'marketing', label: 'Marketing', icon: TrendingUp },
    { id: 'entrepreneurship', label: 'Entrepreneurship', icon: User }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <section id="educational" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Knowledge <span className="text-yellow-500">Hub</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sharing insights on coding, business strategy, and technology trends. 
              Learn from real-world experiences and practical solutions.
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
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
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
              <article key={article.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-yellow-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
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
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{article.excerpt}</p>
                  
                  <button className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">
                    Read Article →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educational;