import React, { useEffect } from "react";
import { Code2, Database, Layout, Server, Palette, Globe, Terminal, Layers, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      id: "frontend",
      icon: <Layout size={32} />,
      title: "Frontend Development",
      description: "Creating responsive, modern user interfaces with the latest frontend technologies. I build fast, accessible, and beautiful web applications that provide exceptional user experiences across all devices.",
      image: "/lovable-uploads/708f9e32-840d-46a4-aaa4-75ad2689e16f.png",
      features: [
        "React & TypeScript",
        "Tailwind CSS & Modern Styling",
        "Responsive Design",
        "Performance Optimization",
        "Component Architecture",
        "State Management (React Query, Zustand)"
      ]
    },
    {
      id: "backend",
      icon: <Database size={32} />,
      title: "Backend Development",
      description: "Building scalable server-side solutions with robust APIs and efficient database architecture. I create backends that are secure, performant, and maintainable.",
      image: "/lovable-uploads/becfc2e3-b59f-4f86-afca-b9f6fc7b7c14.png",
      features: [
        "Node.js & Express",
        "RESTful & GraphQL APIs",
        "Database Design (SQL & NoSQL)",
        "Authentication & Authorization",
        "Supabase Integration",
        "Edge Functions & Serverless"
      ]
    },
    {
      id: "fullstack",
      icon: <Layers size={32} />,
      title: "Full-Stack Solutions",
      description: "End-to-end application development from concept to deployment. I handle both frontend and backend, ensuring seamless integration and optimal performance throughout the entire stack.",
      image: "/lovable-uploads/03e83f18-76a1-4349-a197-dbde03a93343.png",
      features: [
        "Complete App Architecture",
        "Frontend + Backend Integration",
        "Cloud Deployment (Vercel, Netlify)",
        "CI/CD Setup",
        "Real-time Features",
        "Third-party API Integration"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Globe size={24} />,
      title: "Web Design",
      description: "Modern UI/UX design with focus on usability and aesthetics."
    },
    {
      icon: <Palette size={24} />,
      title: "Brand Identity",
      description: "Creating cohesive design systems and visual identities."
    },
    {
      icon: <Terminal size={24} />,
      title: "Code Review",
      description: "Expert code review and optimization suggestions."
    },
    {
      icon: <Server size={24} />,
      title: "API Development",
      description: "Custom API design and implementation for any use case."
    },
    {
      icon: <Code2 size={24} />,
      title: "Technical Consulting",
      description: "Strategic advice on technology choices and architecture."
    },
    {
      icon: <Layers size={24} />,
      title: "Migration Services",
      description: "Migrating legacy applications to modern tech stacks."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Skills & Expertise</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Full-stack web development expertise with a focus on modern technologies and best practices. From frontend to backend, I deliver comprehensive solutions for web applications of any scale.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow animate-fade-in animation-delay-200"
            >
              Get In Touch
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">What I Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive web development services for modern applications
            </p>
          </div>
          
          {mainServices.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-20 last:mb-0 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full lg:w-1/2">
                <div className="glassmorphism p-1 rounded-2xl h-full">
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full aspect-video lg:aspect-auto transition-transform duration-10000 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-psyco-green-DEFAULT mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="bg-psyco-black-light rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4">Technologies & Skills:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-psyco-green-DEFAULT mt-1 mr-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Additional Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized skills to complement your project needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let's discuss how I can help bring your web application to life with modern, scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Get In Touch
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
