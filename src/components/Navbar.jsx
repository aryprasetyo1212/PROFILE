import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';
import { openCvPreview } from './CvPreviewModal';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'curriculum-vitae', label: 'Curriculum Vitae' },
  { id: 'contact-me', label: 'Contact Me' },
  { id: 'about-me', label: 'About Me' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navigateTo = (id) => {
    if (id === 'curriculum-vitae') {
      setActiveSection(id);
      setIsOpen(false);
      openCvPreview();
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="navbar container" aria-label="Navigasi utama">
        <button className="brand" type="button" onClick={() => navigateTo('home')}>
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-text">Portfolio</span>
        </button>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
              type="button"
              onClick={() => navigateTo(item.id)}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  className="nav-indicator"
                  layoutId="activeNavigation"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container mobile-nav-inner">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className={`mobile-nav-link ${activeSection === item.id ? 'mobile-nav-link-active' : ''}`}
                  type="button"
                  onClick={() => navigateTo(item.id)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
