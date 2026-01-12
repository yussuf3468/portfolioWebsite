import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Linkedin,
  Github,
  Twitter,
  Calendar,
  MessageSquare,
} from "lucide-react";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    projectType: "consultation",
  });

  // Show toast on successful submission (Formspree redirects to /thanks)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      await emailjs.send(
        "service_hxy53bk",
        "template_61fhsgn",
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          projectType: formData.projectType,
        },
        "OOnn4jog3-e9lbKUw"
      );
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        projectType: "consultation",
      });
    } catch (error) {
      toast.error("Error sending message. Please try again.");
    }
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-dark-900 overflow-hidden"
    >
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-purple/30 bg-dark-800/50 backdrop-blur-sm mb-6">
              <MessageSquare className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-mono text-gray-400">Contact</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Let's </span>
              <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with premium technology
              solutions? Let's discuss your project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="glass-card p-8 space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-neon-cyan to-neon-purple rounded-full" />
                Get in Touch
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities and
                challenges...
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-neon-cyan to-blue-500 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <a
                      href="mailto:yussuf@lenzro.com"
                      className="text-gray-400 hover:text-neon-cyan transition-colors"
                    >
                      yussuf@lenzro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-neon-purple to-purple-500 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <a
                      href="tel:+254722261776"
                      className="text-gray-400 hover:text-neon-purple transition-colors"
                    >
                      +254 722 261 776
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-neon-pink to-pink-500 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <span className="text-gray-400">
                      Available for remote & on-site projects
                    </span>
                  </div>
                </div>
                {/* Schedule a Call Button */}
                <div className="pt-6">
                  <a
                    href="https://calendly.com/yussufh080/20min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-green to-green-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-neon-green/50 transition-all duration-300 hover:scale-105"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Free Strategy Call
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-white/10">
                <h4 className="font-semibold text-white mb-4">
                  Connect on Social
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/yussuf3468"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-white/10 rounded-lg hover:border-neon-cyan hover:shadow-neon-cyan transition-all duration-300 group"
                  >
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan group-hover:scale-110 transition-all" />
                  </a>
                  <a
                    href="https://twitter.com/yussuf3468"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-white/10 rounded-lg hover:border-neon-purple hover:shadow-neon-purple transition-all duration-300 group"
                  >
                    <Twitter className="w-5 h-5 text-gray-400 group-hover:text-neon-purple group-hover:scale-110 transition-all" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inputs */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-200 text-white placeholder:text-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-200 text-white placeholder:text-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* More Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-200 text-white placeholder:text-gray-500"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-200 text-white"
                    >
                      <option value="consultation">Consultation</option>
                      <option value="fullstack">Full-Stack Development</option>
                      <option value="java">Java Development</option>
                      <option value="marketing">Marketing Systems</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-200 text-white placeholder:text-gray-500"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-200 text-white placeholder:text-gray-500"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple text-white py-4 px-8 rounded-lg font-semibold hover:shadow-xl hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitted ? "Message Sent!" : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
