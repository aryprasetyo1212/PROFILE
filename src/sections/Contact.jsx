import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/profile';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Nama wajib diisi.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Masukkan alamat email yang valid.';
    if (!form.subject.trim()) nextErrors.subject = 'Subjek wajib diisi.';
    if (form.message.trim().length < 10) nextErrors.message = 'Pesan minimal 10 karakter.';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const mailSubject = encodeURIComponent(form.subject);
    const mailBody = encodeURIComponent(
      `Halo ${profile.name},\n\n${form.message}\n\nSalam,\n${form.name}\n${form.email}`,
    );

    setSent(true);
    window.location.href = `mailto:${profile.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact-me" className="section contact-section">
      <div className="container">
        <SectionHeading
          eyebrow="04 / Contact Me"
          title="Mari berkolaborasi untuk pertanian yang lebih maju."
          description="Terbuka untuk diskusi, kegiatan lapangan, pengelolaan data, serta kolaborasi pertanian dan teknologi digital."
        />

        <div className="contact-layout">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <p className="contact-intro">
              Saya terbuka untuk bertukar gagasan dan terlibat dalam kegiatan yang menghubungkan penyuluhan, pengelolaan pertanian, data, dan inovasi digital.
            </p>

            <div className="contact-links">
              <a href={`mailto:${profile.email}`} className="contact-link-card">
                <span className="contact-icon"><Mail size={19} /></span>
                <span>
                  <small>Email</small>
                  <strong>{profile.email}</strong>
                </span>
                <ArrowUpRight size={18} />
              </a>

              <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`} className="contact-link-card">
                <span className="contact-icon"><Phone size={19} /></span>
                <span>
                  <small>Phone</small>
                  <strong>{profile.phone}</strong>
                </span>
                <ArrowUpRight size={18} />
              </a>

              <div className="contact-link-card contact-link-static">
                <span className="contact-icon"><MapPin size={19} /></span>
                <span>
                  <small>Location</small>
                  <strong>{profile.location}</strong>
                </span>
              </div>
            </div>

            <div className="response-note">
              <span className="availability-dot" />
              Biasanya merespons dalam 1–2 hari kerja.
            </div>
          </motion.div>

          <motion.form
            className="glass-card contact-form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="form-grid">
              <label className="form-field">
                <span>Nama</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nama lengkap Anda"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <small className="field-error">{errors.name}</small>}
              </label>

              <label className="form-field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@contoh.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <small className="field-error">{errors.email}</small>}
              </label>
            </div>

            <label className="form-field">
              <span>Subjek</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Apa yang ingin Anda diskusikan?"
                aria-invalid={Boolean(errors.subject)}
              />
              {errors.subject && <small className="field-error">{errors.subject}</small>}
            </label>

            <label className="form-field">
              <span>Pesan</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Ceritakan ide atau kebutuhan Anda..."
                rows="6"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <small className="field-error">{errors.message}</small>}
            </label>

            <button className="button button-primary form-submit" type="submit">
              Kirim Pesan <Send size={17} />
            </button>

            {sent && (
              <motion.p className="form-success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                Aplikasi email Anda sedang dibuka. Periksa kembali pesan sebelum mengirim.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
