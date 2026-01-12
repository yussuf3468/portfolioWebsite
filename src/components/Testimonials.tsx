import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Abdimalik Mohamed",
      role: "CEO, Alnur Textiles",
      content:
        "Yussuf transformed our business with his custom software solutions. His attention to detail and understanding of our needs were exceptional.",
      rating: 5,
      avatar:
        "https://ui-avatars.com/api/?name=Abdimalik+Mohamed&background=random",
    },
    {
      id: 2,
      name: "Amina Hassan",
      role: "Manager, Golden Star Coffee",
      content:
        "Working with Yussuf was a game-changer. His expertise in full-stack development helped us launch our product ahead of schedule.",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Amina+Hassan&background=random",
    },
    {
      id: 3,
      name: "Albert Johnson",
      role: "Founder, StartUp Hub",
      content:
        "Yussuf's strategic insights and technical skills were crucial in scaling our operations. Highly recommend his services!",
      rating: 5,
      avatar:
        "https://ui-avatars.com/api/?name=Albert+Johnson&background=random",
    },
    {
      id: 4,
      name: "Fatima Noor",
      role: "Marketing Director, Taqwa Electronics",
      content:
        "The marketing automation system Yussuf built for us has significantly improved our lead generation and customer engagement.",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Fatima+Noor&background=random",
    },
    {
      id: 5,
      name: "Omar Ali",
      role: "CTO, Tech Innovators",
      content:
        "Yussuf's ability to integrate complex systems is unmatched. He delivered a robust solution that exceeded our expectations.",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Omar+Ali&background=random",
    },
    {
      id: 6,
      name: "Layla Ahmed",
      role: "Product Manager, Future Vision",
      content:
        "Yussuf's work ethic and dedication to quality are impressive. He is a true professional who delivers results.",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Layla+Ahmed&background=random",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-32 bg-dark-800 overflow-hidden"
    >
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-dark-900/50 backdrop-blur-sm mb-6">
              <Star className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm font-mono text-gray-400">
                Testimonials
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Client </span>
              <span className="gradient-text">Reviews</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Real feedback from clients about our collaboration and the results
              we've achieved together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group glass-card p-6 hover:border-neon-cyan/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-neon-cyan fill-current"
                    />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-neon-cyan/20" />
                  <p className="text-gray-400 leading-relaxed italic pl-6 text-sm">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-neon-cyan/30"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="glass-card p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Join These Success Stories?
              </h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's transform your business with custom technology solutions
                that deliver measurable results
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-to-r from-neon-cyan to-neon-purple text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-105"
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
