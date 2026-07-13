import { motion } from 'framer-motion';
import { BriefcaseBusiness, Download, Layers3 } from 'lucide-react';
import { openCvPreview } from '../components/CvPreviewModal';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/profile';

const cardAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function CurriculumVitae() {
  return (
    <section id="curriculum-vitae" className="section cv-section">
      <div className="container">
        <div className="section-header-row">
          <SectionHeading
            eyebrow="02 / Curriculum Vitae"
            title="Skills & Experiences"
            description="Kemampuan dan pengalaman yang membentuk kesiapan saya untuk berkontribusi pada pertanian modern berbasis data dan teknologi."
          />
          <motion.button
            className="button button-secondary cv-print-button"
            type="button"
            onClick={openCvPreview}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
          >
            <Download size={17} /> Preview & Download CV
          </motion.button>
        </div>

        <div className="cv-layout">
          <div className="cv-main-column">
            <motion.article className="glass-card cv-block" {...cardAnimation} transition={{ duration: 0.6 }}>
              <div className="cv-block-heading">
                <span className="icon-box"><BriefcaseBusiness size={20} /></span>
                <div>
                  <p>Professional Background</p>
                  <h3>Pengalaman Profesional</h3>
                </div>
              </div>

              <div className="timeline">
                {profile.experiences.map((item, index) => (
                  <motion.div
                    className="timeline-item"
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <span className="timeline-marker" />
                    <p className="timeline-period">Experience {String(index + 1).padStart(2, '0')}</p>
                    <h4>{item.title}</h4>
                    <p className="timeline-description">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          </div>

          <motion.aside className="glass-card skills-card" {...cardAnimation} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="cv-block-heading">
              <span className="icon-box"><Layers3 size={20} /></span>
              <div>
                <p>Core Competencies</p>
                <h3>Keahlian Utama</h3>
              </div>
            </div>

            <div className="skills-list">
              {profile.skills.map((skill, index) => (
                <motion.div
                  className="skill-item"
                  key={skill}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ x: 4 }}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{skill}</p>
                </motion.div>
              ))}
            </div>

            <div className="cv-note">
              <span className="availability-dot" />
              <p>Siap terus belajar dan menerapkan teknologi digital untuk mendukung pembaruan sistem pertanian.</p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
