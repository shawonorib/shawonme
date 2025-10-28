
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Prevent body scrolling while mobile menu is open.
  useEffect(() => {
    const cls = 'scroll-lock'
    if (isOpen) {
      document.body.classList.add(cls)
    } else {
      document.body.classList.remove(cls)
    }

    return () => document.body.classList.remove(cls)
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        scrolled ? 'glassmorphism bg-opacity-80' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">
            Shawon
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-white hover:text-green-400 transition-colors duration-300 link-hover text-sm font-medium tracking-wide',
                  isActive && 'text-green-500 after:w-full'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white hover:text-green-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {/* Portal-backed backdrop — rendered at document.body so it isn't affected by transforms or scroll */}
      {isOpen && createPortal(
        <div
          className="fixed inset-0 bg-black opacity-95 z-[1000]"
          onPointerUp={() => setIsOpen(false)}
        />,
        document.body
      )}

      {/* Render the menu panel into the portal so it's not affected by parent stacking/transform contexts. */}
      {isOpen && createPortal(
        <div className="fixed inset-0 z-[1001] md:hidden">
          {/* Backdrop already rendered at z-[1000]; render transparent container here to capture backdrop clicks inside portal too */}
          <div className="absolute inset-0" onPointerUp={() => setIsOpen(false)} />

          <div className="relative z-10 h-full overflow-auto pt-24 px-8">
            <div className="max-w-3xl mx-auto flex flex-col space-y-4 bg-transparent">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'text-white hover:text-green-400 py-2 text-xl transition-colors duration-300',
                      isActive && 'text-green-500'
                    )
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;
