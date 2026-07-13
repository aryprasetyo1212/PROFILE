import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { openCvPreview } from '../components/CvPreviewModal';
import { profile } from '../data/profile';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};


export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="section hero-section">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="availability-pill" variants={itemVariants}>
            <span className="availability-dot" />
            {profile.availability}
          </motion.div>

          <motion.p className="hero-kicker" variants={itemVariants}>
            <Sparkles size={16} /> Halo, saya
          </motion.p>

          <motion.h1 variants={itemVariants}>
            {profile.name}
            <span className="gradient-text">.</span>
          </motion.h1>

          <motion.div className="hero-role-wrap" variants={itemVariants}>
            <span className="hero-role-line" />
            <p>{profile.role}</p>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            {profile.shortBio}
          </motion.p>

          <motion.div className="hero-meta" variants={itemVariants}>
            <span>
              <MapPin size={16} /> {profile.location}
            </span>
            <span className="meta-divider" />
            <span>Agriculture x Digital Innovation</span>
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <button className="button button-primary" type="button" onClick={() => scrollTo('contact-me')}>
              Hubungi Saya <ArrowUpRight size={18} />
            </button>
            <button className="button button-secondary" type="button" onClick={openCvPreview}>
              Preview CV <ArrowDown size={18} />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-dot orbit-dot-one" />
          <div className="orbit-dot orbit-dot-two" />

          <motion.div
            className="profile-card"
            animate={{ y: [0, -10, 0], rotate: [0, 0.7, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="profile-card-glow" />
            <div className="profile-avatar profile-avatar-photo"> 
              <img src={profile.photo} alt={`Foto profil ${profile.name}`}/> 
            </div>
            <div className="profile-card-content">
              <p className="profile-card-label">Personal Portfolio</p>
              <h2>{profile.name}</h2>
              <p>{profile.role}</p>
            </div>
            <div className="profile-card-footer">
              <span className="status-dot" />
              Growing agriculture through technology
            </div>
          </motion.div>

          <motion.div
            className="floating-code-card floating-card-left"
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="code-dot code-dot-red" />
            <span className="code-dot code-dot-yellow" />
            <span className="code-dot code-dot-green" />
            <code>&lt;agritech /&gt;</code>
          </motion.div>

          <motion.div
            className="floating-code-card floating-card-right"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          >
            <Sparkles size={16} />
            <span>Learn. Cultivate. Innovate.</span>
          </motion.div>
        </motion.div>
      </div>

      <button className="scroll-cue" type="button" onClick={() => scrollTo('curriculum-vitae')} aria-label="Gulir ke bagian berikutnya">
        <span>Scroll</span>
        <span className="scroll-cue-line" />
      </button>
    </section>
  );
}
