import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, Send } from "lucide-react";
import React, { useEffect, useState } from "react";

// EmailJS Configuration - read from Vite env vars when available.
// Create a `.env` with: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
// After editing .env, rebuild (`npm run build`) so values are baked into the bundle.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_qi14xpb";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_iu165az";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "yqNuTKG1qePa-kKZJ";

const Booking = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Scroll to top on page load and initialize EmailJS if configured
  useEffect(() => {
    window.scrollTo(0, 0);

    try {
      if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        // initialize emailjs client-side public key
        (emailjs as any).init(EMAILJS_PUBLIC_KEY);
      }
    } catch (err) {
      console.warn('EmailJS init failed:', err);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Early config check: ensure we don't use placeholder values
    const isConfigured =
      EMAILJS_SERVICE_ID && EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
      EMAILJS_TEMPLATE_ID && EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
      EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

    if (!isConfigured) {
      toast({
        title: 'Configuration Required',
        description: 'Email service is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in your environment and rebuild.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Shawon",
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Let's Work Together</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glassmorphism p-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-psyco-black-light border border-psyco-green-DEFAULT/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-psyco-green-DEFAULT transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-psyco-black-light border border-psyco-green-DEFAULT/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-psyco-green-DEFAULT transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-psyco-black-light border border-psyco-green-DEFAULT/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-psyco-green-DEFAULT transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-psyco-black-light border border-psyco-green-DEFAULT/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-psyco-green-DEFAULT transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in animation-delay-100">
              <div className="glassmorphism p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-gray-300 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:shawonorib@gmail.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group"
                  >
                    <div className="p-3 bg-psyco-green-DEFAULT/20 rounded-lg group-hover:bg-psyco-green-DEFAULT transition-all duration-300">
                      <Mail size={20} className="text-psyco-green-DEFAULT group-hover:text-white" />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">shawonorib@gmail.com</span>
                  </a>

                  <a
                    href="https://github.com/shawonorib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group"
                  >
                    <div className="p-3 bg-psyco-green-DEFAULT/20 rounded-lg group-hover:bg-psyco-green-DEFAULT transition-all duration-300">
                      <Github size={20} className="text-psyco-green-DEFAULT group-hover:text-white" />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">github.com/shawonorib</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/shawonorib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group"
                  >
                    <div className="p-3 bg-psyco-green-DEFAULT/20 rounded-lg group-hover:bg-psyco-green-DEFAULT transition-all duration-300">
                      <Linkedin size={20} className="text-psyco-green-DEFAULT group-hover:text-white" />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">linkedin.com/in/shawonorib</span>
                  </a>
                </div>
              </div>

              <div className="glassmorphism p-8">
                <h3 className="text-xl font-bold text-white mb-4">What I Can Help With</h3>
                <ul className="space-y-3">
                  {[
                    "Full-stack web application development",
                    "Frontend development with React & TypeScript",
                    "Backend APIs and database design",
                    "UI/UX design and implementation",
                    "Code review and optimization",
                    "Technical consulting"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-psyco-green-DEFAULT mt-1 mr-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
