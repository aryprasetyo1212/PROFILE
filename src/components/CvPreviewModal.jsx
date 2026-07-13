import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, ExternalLink, FileText, X } from 'lucide-react';
import { profile } from '../data/profile';

export const openCvPreview = () => {
  window.dispatchEvent(new CustomEvent('open-cv-preview'));
};

export default function CvPreviewModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openModal = () => setIsOpen(true);
    window.addEventListener('open-cv-preview', openModal);
    return () => window.removeEventListener('open-cv-preview', openModal);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cv-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <motion.div
            className="cv-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 22, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cv-modal-header">
              <div className="cv-modal-title-wrap">
                <span className="cv-modal-icon"><FileText size={20} /></span>
                <div>
                  <p>Curriculum Vitae</p>
                  <h2 id="cv-modal-title">{profile.name}</h2>
                </div>
              </div>

              <button
                className="cv-modal-close"
                type="button"
                aria-label="Tutup preview CV"
                onClick={() => setIsOpen(false)}
              >
                <X size={21} />
              </button>
            </div>

            <div className="cv-modal-viewer">
              <iframe
                title={`Curriculum Vitae ${profile.name}`}
                src={`${profile.cvFile}#toolbar=0&navpanes=0&view=FitH`}
              />
            </div>

            <div className="cv-modal-actions">
              <p>Preview tidak tampil? Buka PDF pada tab baru.</p>
              <div>
                <a className="button button-secondary" href={profile.cvFile} target="_blank" rel="noreferrer">
                  <ExternalLink size={17} /> Buka PDF
                </a>
                <a className="button button-primary" href={profile.cvFile} download="Nurmulya-Dwi-Atika-CV.pdf">
                  <Download size={17} /> Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
