import { motion } from 'framer-motion';
import { ArrowUp, Camera, Code2, Quote, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/profile';

export default function About() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section id="about-me" className="section about-section">
      <div className="container">
        <SectionHeading
          eyebrow="03 / About Me"
          title="Menghubungkan pertanian, data, dan teknologi."
          description="Tentang minat, kemampuan, dan visi saya untuk ikut mendorong pertanian yang semakin modern dan berkelanjutan."
        />

        <div className="about-layout">
          <motion.div
            className="about-story"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <Quote className="quote-icon" size={36} />
            <p>{profile.about}</p>
            <p>{profile.aboutSecond}</p>
            <div className="signature-line">
              <span />
              <strong>{profile.name}</strong>
            </div>
          </motion.div>

          <div className="stats-grid">
            {profile.highlights.map((item, index) => (
              <motion.article
                className="glass-card stat-card"
                key={item.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
              >
                <span className="stat-index">0{index + 1}</span>
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <footer className="footer">
          <div>
            <p className="footer-brand">{profile.name}<span>.</span></p>
            <p>Agriculture, digital data, collaboration, and continuous learning.</p>
          </div>

          <div className="social-links" aria-label="Media sosial">
            <a href={profile.socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a>
            <a href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Users size={18} /></a>
            <a href={profile.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Camera size={18} /></a>
          </div>

          <button className="back-to-top" type="button" onClick={scrollTop} aria-label="Kembali ke atas">
            <ArrowUp size={18} />
          </button>
        </footer>
      </div>
    </section>
  );
}
