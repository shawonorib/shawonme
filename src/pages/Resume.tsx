import { Award, Briefcase, Download, Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadResume = () => {
    // Get the resume file from the public/documents directory
    const resumePath = '/documents/Shawon_Resume.pdf';
    
    // Create a link element
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Shawon_Resume.pdf'; // Name that will appear when downloading
    
    // Add to document, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Track download event
    try {
      // You can add analytics tracking here if needed
      console.log('Resume download initiated');
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">Resume</h1>
              <p className="text-xl text-gray-300 animate-fade-in animation-delay-100">
                Full-Stack Web Developer
              </p>
            </div>
            <button
              onClick={handleDownloadResume}
              className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center btn-glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-6 md:px-12 border-b border-green-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:shawon@gmail.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-white px-4 py-2 rounded-lg bg-psyco-green-DEFAULT/20 hover:bg-psyco-green-DEFAULT transition-all duration-300 group"
            >
              <Mail size={18} className="text-psyco-green-DEFAULT group-hover:text-white transition-colors duration-300" />
              <span className="group-hover:translate-x-1 transition-transform duration-300">shawonorib@gmail.com</span>
            </a>
            <a
              href="https://github.com/shawonorib"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white px-4 py-2 rounded-lg bg-psyco-green-DEFAULT/20 hover:bg-psyco-green-DEFAULT transition-all duration-300 group"
            >
              <Github size={18} className="text-psyco-green-DEFAULT group-hover:text-white transition-colors duration-300" />
              <span className="group-hover:translate-x-1 transition-transform duration-300">github.com/shawonorib</span>
            </a>
            <a
              href="https://linkedin.com/in/shawonorib"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white px-4 py-2 rounded-lg bg-psyco-green-DEFAULT/20 hover:bg-psyco-green-DEFAULT transition-all duration-300 group"
            >
              <Linkedin size={18} className="text-psyco-green-DEFAULT group-hover:text-white transition-colors duration-300" />
              <span className="group-hover:translate-x-1 transition-transform duration-300">linkedin.com/in/shawonorib</span>
            </a>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Professional Summary</h2>
          <div className="glassmorphism p-8">
            <p className="text-gray-300 leading-relaxed">
              Full-stack web developer with expertise in modern web technologies including React, TypeScript, Node.js, and database management. 
              Passionate about creating scalable, user-friendly applications with clean, maintainable code. 
              Strong problem-solving skills and commitment to delivering high-quality solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-12 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Briefcase className="mr-3 text-psyco-green-DEFAULT" />
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {/* Example Experience Item */}
            <div className="glassmorphism p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Full-Stack Developer</h3>
                  <p className="text-psyco-green-DEFAULT font-medium">Company Name</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2021 - Present</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-psyco-green-DEFAULT mr-2">•</span>
                  <span>Developed and maintained full-stack web applications using React and Node.js</span>
                </li>
                <li className="flex items-start">
                  <span className="text-psyco-green-DEFAULT mr-2">•</span>
                  <span>Collaborated with cross-functional teams to deliver high-quality solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-psyco-green-DEFAULT mr-2">•</span>
                  <span>Implemented responsive designs and optimized application performance</span>
                </li>
              </ul>
            </div>

            {/* Add more experience items as needed */}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <GraduationCap className="mr-3 text-psyco-green-DEFAULT" />
            Education
          </h2>
          
          <div className="glassmorphism p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-psyco-green-DEFAULT font-medium">University Name</p>
              </div>
              <span className="text-gray-400 mt-2 md:mt-0">2017 - 2021</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="mr-3 text-psyco-green-DEFAULT" />
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
              { category: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
              { category: "Tools & Others", skills: ["Git", "Docker", "REST APIs", "Agile"] }
            ].map((skillGroup, index) => (
              <div key={index} className="glassmorphism p-6">
                <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-psyco-green-DEFAULT rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
