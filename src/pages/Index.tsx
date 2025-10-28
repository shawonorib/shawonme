import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { Code2, Database, Layout, Layers, MoveRight, Palette } from "lucide-react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredServices = [
    {
      title: "Frontend Development",
      description: "Building responsive, modern user interfaces with React, TypeScript, and cutting-edge frameworks.",
      icon: <Layout size={24} />,
      imageSrc: "/lovable-uploads/708f9e32-840d-46a4-aaa4-75ad2689e16f.png",
      link: "/skills#frontend"
    },
    {
      title: "Backend Development",
      description: "Scalable server-side solutions with Node.js, APIs, and database architecture.",
      icon: <Database size={24} />,
      imageSrc: "/lovable-uploads/becfc2e3-b59f-4f86-afca-b9f6fc7b7c14.png",
      link: "/skills#backend"
    },
    {
      title: "Full-Stack Solutions",
      description: "End-to-end application development from concept to deployment.",
      icon: <Layers size={24} />,
      imageSrc: "/lovable-uploads/03e83f18-76a1-4349-a197-dbde03a93343.png",
      link: "/skills#fullstack"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Skills Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">What I Do</h2>
              <p className="text-gray-400 max-w-2xl">
                Specialized skills in modern web development and full-stack engineering
              </p>
            </div>
            <Link 
              to="/skills"
              className="mt-4 sm:mt-0 flex items-center text-psyco-green-DEFAULT hover:text-psyco-green-light transition-colors"
            >
              View all skills
              <MoveRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Tech Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Modern technologies and frameworks I work with daily
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "React", icon: <Code2 size={32} /> },
              { name: "JavaScript", icon: <Code2 size={32} /> },
              { name: "Node.js", icon: <Database size={32} /> },
              { name: "Tailwind", icon: <Palette size={32} /> }
            ].map((tech, index) => (
              <div 
                key={index}
                className="glassmorphism flex flex-col items-center justify-center py-8 px-4 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-medium text-white">{tech.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
            >
              View Projects
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let's collaborate on your next project. From concept to deployment, I'll help bring your vision to life with clean, scalable code.
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

export default Index;
