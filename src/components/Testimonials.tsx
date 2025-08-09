import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
  {
    id: 1,
    name: 'Abdimalik Mohamed',
    role: 'CEO, Alnur Textiles',
    content: 'Yussuf transformed our business with his custom software solutions. His attention to detail and understanding of our needs were exceptional.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Abdimalik+Mohamed&background=random'
  },
  {
    id: 2,
    name: 'Amina Hassan',
    role: 'Manager, Golden Star Coffee',
    content: 'Working with Yussuf was a game-changer. His expertise in full-stack development helped us launch our product ahead of schedule.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Amina+Hassan&background=random'
  },
  {
    id: 3,
    name: 'Albert Johnson',
    role: 'Founder, StartUp Hub',
    content: "Yussuf's strategic insights and technical skills were crucial in scaling our operations. Highly recommend his services!",
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Albert+Johnson&background=random'
  },
  {
    id: 4,
    name: 'Fatima Noor',
    role: 'Marketing Director, Taqwa Electronics',
    content: 'The marketing automation system Yussuf built for us has significantly improved our lead generation and customer engagement.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Fatima+Noor&background=random'
  },
  {
    id: 5,
    name: 'Omar Ali',
    role: 'CTO, Tech Innovators',
    content: "Yussuf's ability to integrate complex systems is unmatched. He delivered a robust solution that exceeded our expectations.",
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Omar+Ali&background=random'
  },
  {
    id: 6,
    name: 'Layla Ahmed',
    role: 'Product Manager, Future Vision',
    content: "Yussuf's work ethic and dedication to quality are impressive. He is a true professional who delivers results.",
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Layla+Ahmed&background=random'
  }
];


  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client <span className="text-yellow-500">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take my word for it. Here's what clients say about working with me 
              and the results we've achieved together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-yellow-500/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-yellow-500/20" />
                  <p className="text-gray-700 leading-relaxed italic pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Join These Success Stories?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can transform your business with custom technology solutions 
                that deliver measurable results.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;