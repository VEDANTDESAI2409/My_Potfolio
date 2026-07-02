import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, MapPin, Send } from "lucide-react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AnimatedButton, GlassPanel, SectionHeading, fadeUp, stagger } from "../components/PremiumUI";
import { contactInfo, pageContent } from "../data/portfolioData";

const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedinIn />,
  email: <Mail />,
  whatsapp: <FaWhatsapp />,
  instagram: <FaInstagram />,
  facebook: <FaFacebookF />,
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", contact: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus(contactInfo.statuses.required);
      return;
    }
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const contact = form.contact.trim();
    if (!emailPattern.test(contact) && Number.isNaN(Number(contact))) {
      setStatus(contactInfo.statuses.invalidContact);
      return;
    }
    setStatus(contactInfo.statuses.sending);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, contact_info: form.contact, subject: form.subject, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus(contactInfo.statuses.success);
          setForm({ name: "", contact: "", subject: "", message: "" });
        },
        () => setStatus(contactInfo.statuses.failure)
      );
  };

  return (
    <section className="page">
      <SectionHeading eyebrow={pageContent.contact.eyebrow} title={pageContent.contact.title} align="center">
        {pageContent.contact.description}
      </SectionHeading>

      <motion.div className="contact-layout" variants={stagger} initial="hidden" animate="visible">
        <GlassPanel className="contact-panel" variants={fadeUp}>
          <h2>{contactInfo.title}</h2>
          <p>{contactInfo.intro}</p>
          <div className="contact-links-premium">
            {contactInfo.socialLinks.map((item) => (
              <a key={item.title} href={item.link} target="_blank" rel="noreferrer">
                {iconMap[item.key]}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          <div className="map-panel">
            <MapPin />
            <span>{contactInfo.address}</span>
          </div>
        </GlassPanel>

        <GlassPanel className="contact-form-panel" variants={fadeUp}>
          <form onSubmit={handleSubmit}>
            {contactInfo.formFields.map((field) => (
              <label key={field.name} className="floating-field">
                <input type={field.type} name={field.name} value={form[field.name]} onChange={handleChange} placeholder=" " required />
                <span>{field.label}</span>
              </label>
            ))}
            <label className="floating-field">
              <textarea name="message" value={form.message} onChange={handleChange} placeholder=" " rows="6" required />
              <span>{contactInfo.messageLabel}</span>
            </label>
            <AnimatedButton type="submit" icon={<Send size={17} />}>{contactInfo.submitLabel}</AnimatedButton>
            {status && <motion.p className="form-status" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>{status}</motion.p>}
          </form>
        </GlassPanel>
      </motion.div>
    </section>
  );
}
