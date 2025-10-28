
import React, { useEffect, useRef } from 'react';
import { MoveRight, Sparkles, Code2, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      backgroundRef.current.style.transform = `translate(${x * -15}px, ${y * -15}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0 transition-transform duration-500 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-20 hidden lg:block">
        <Code2 className="h-12 w-12 text-green-500/30" />
      </div>
      <div className="absolute bottom-1/4 right-20 hidden lg:block">
        <Terminal className="h-16 w-16 text-green-500/30" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="max-w-2xl">
            <div className="flex items-center mb-4">
              <div className="bg-green-500/20 text-green-400 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                Full-Stack Web Developer
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-glow mb-6">
              Building Digital <span className="text-green-500">Experiences</span> That Matter
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Full-stack developer specializing in modern web applications. 
              From responsive frontends to scalable backends, I craft solutions that bring ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-green-500 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Get In Touch
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
