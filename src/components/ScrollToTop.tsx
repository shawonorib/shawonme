import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Track whether a modal/sheet/menu is open by observing a body-level class 'scroll-lock'.
  const [isBlocked, setIsBlocked] = useState(() => {
    try {
      return typeof document !== 'undefined' && document.body.classList.contains('scroll-lock');
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Observe body.class changes so we can hide this button when a modal/sheet/menu is open.
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const update = () => {
      setIsBlocked(document.body.classList.contains('scroll-lock'))
    }

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && (m.attributeName === 'class' || m.attributeName === 'className')) {
          update()
          break
        }
      }
    })

    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] })

    // initial check
    update()

    return () => mo.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 btn-glow',
        isVisible && !isBlocked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;
