import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";

const References = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full-Stack",
      description: "Modern e-commerce solution with real-time inventory, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
      technologies: ["React", "Node.js", "Stripe", "Supabase"],
      link: "#",
      github: "#"
    },
    {
      title: "SaaS Dashboard",
      category: "Frontend",
      description: "Analytics dashboard with real-time data visualization and interactive charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      technologies: ["React", "TypeScript", "Recharts", "Tailwind"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      category: "Full-Stack",
      description: "Collaborative task management with real-time updates and team features.",
      image: "/lovable-uploads/48e75083-18aa-4df9-bc91-8515485aa465.png",
      technologies: ["React", "Supabase", "React Query", "Tailwind"],
      link: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      category: "Frontend",
      description: "Modern portfolio site with smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80",
      technologies: ["React", "Tailwind", "Framer Motion"],
      link: "#",
      github: "#"
    },
    {
      title: "Restaurant Booking System",
      category: "Full-Stack",
      description: "Online reservation system with calendar integration and automated confirmations.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "SendGrid"],
      link: "#",
      github: "#"
    },
    {
      title: "Blog Platform",
      category: "Full-Stack",
      description: "Content management system with markdown support and SEO optimization.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80",
      technologies: ["React", "Supabase", "MDX", "Next.js"],
      link: "#",
      github: "#"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Featured Projects</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              A showcase of recent web applications and projects. Each built with modern technologies and best practices for optimal performance and user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="glassmorphism p-1 h-full animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-psyco-black-light flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-2 py-1 bg-psyco-green-DEFAULT/20 text-psyco-green-DEFAULT rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-psyco-green-DEFAULT hover:text-psyco-green-light transition-colors text-sm"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-psyco-green-DEFAULT hover:text-psyco-green-light transition-colors text-sm"
                      >
                        <Github size={16} />
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have a Project in Mind?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let's collaborate to create something amazing. I'm always excited to work on new and challenging projects.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default References;
