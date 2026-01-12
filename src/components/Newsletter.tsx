import React, { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle,
  BookOpen,
  Code,
  TrendingUp,
} from "lucide-react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const benefits = [
    {
      icon: Code,
      title: "Weekly Tech Insights",
      description: "Latest trends in Java, React, and full-stack development",
    },
    {
      icon: TrendingUp,
      title: "Business Strategy Tips",
      description: "Marketing automation and growth optimization techniques",
    },
    {
      icon: BookOpen,
      title: "Exclusive Tutorials",
      description: "In-depth guides and code examples from real projects",
    },
  ];

  return (
    <section
      id="newsletter"
      className="relative py-32 bg-dark-800 overflow-hidden"
    >
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-dark-900/50 backdrop-blur-sm mb-6">
              <Mail className="w-4 h-4 text-neon-green" />
              <span className="text-sm font-mono text-gray-400">
                Newsletter
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Stay </span>
              <span className="gradient-text">Informed</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Join 100+ developers and entrepreneurs getting weekly insights on
              technology, business strategy, and growth tactics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:border-neon-green/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-neon-green/20 to-green-500/20 rounded-xl border border-neon-green/30">
                    <benefit.icon className="w-6 h-6 text-neon-green" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 bg-dark-800 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="bg-gradient-to-r from-neon-green to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-neon-green/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-6">
            No spam, unsubscribe anytime. Your email is safe with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
