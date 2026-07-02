import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Download,
  Lightbulb,
  Mail,
  Rocket,
  UserRound,
} from "lucide-react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AnimatedButton, AnimatedCounter, fadeUp, stagger } from "../components/PremiumUI";
import { homeContent, liveLinks, personalInfo, qualityHighlights, workOverview } from "../data/portfolioData";

const iconMap = {
  code: <Code2 />,
  idea: <Lightbulb />,
  rocket: <Rocket />,
  github: <FaGithub size={20} />,
  linkedin: <FaLinkedinIn size={20} />,
  whatsapp: <FaWhatsapp size={20} />,
  instagram: <FaInstagram size={20} />,
  facebook: <FaFacebookF size={18} />,
  email: <Mail size={20} />,
  download: <Download size={18} />,
  arrow: <ArrowRight size={18} />,
};

export default function Home() {
  return (
    <section className="home-showcase">
      <motion.section
        className="reference-hero"
        style={{ "--hero-bg": `url(${personalInfo.heroBackground})` }}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-scrim" />
        <motion.div className="reference-hero-copy" variants={fadeUp}>
          <span className="hero-kicker">{homeContent.kicker}</span>
          <h1>{homeContent.title}</h1>
          <h2>{homeContent.role}</h2>
          <p>{homeContent.tagline}</p>
          <div className="hero-actions">
            {homeContent.ctaButtons.map((button) => (
              <AnimatedButton
                key={button.label}
                href={button.href}
                download={button.download}
                variant={button.variant}
                icon={iconMap[button.icon]}
              >
                {button.label}
              </AnimatedButton>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="home-about-strip"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div className="about-intro" variants={fadeUp}>
          <span className="about-icon"><UserRound size={24} /></span>
          <div>
            <h2>{homeContent.aboutTitle}</h2>
            <p>{personalInfo.shortBio}</p>
          </div>
        </motion.div>
        <div className="quality-grid">
          {qualityHighlights.map((item) => (
            <motion.article key={item.title} className="quality-card" variants={fadeUp} whileHover={{ y: -6 }}>
              <span>{iconMap[item.icon]}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="home-work-strip"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div className="work-overview-copy" variants={fadeUp}>
          <span className="eyebrow">{homeContent.workOverviewEyebrow}</span>
          <h2>{homeContent.workOverviewTitle}</h2>
        </motion.div>
        <div className="work-overview-grid">
          {workOverview.map((item) => (
            <motion.article className="work-stat-card" key={item.label} variants={fadeUp} whileHover={{ y: -6 }}>
              <strong><AnimatedCounter value={item.value} suffix={item.suffix} /></strong>
              <span>{item.label}</span>
              <p>{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="home-links-strip"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div className="social-section-copy" variants={fadeUp}>
          <span className="eyebrow">{homeContent.socialEyebrow}</span>
          <h2>{homeContent.socialTitle}</h2>
          <p>{homeContent.socialText}</p>
        </motion.div>
        <div className="social-card-grid">
          {liveLinks.map((item) => (
            <motion.a className={`live-link-card social-${item.key}`} href={item.link} key={item.title} variants={fadeUp} whileHover={{ y: -6 }} target="_blank" rel="noreferrer">
              <span>{iconMap[item.key]}</span>
              <strong>{item.label}</strong>
              <p>{item.description}</p>
              <ArrowRight size={18} />
            </motion.a>
          ))}
        </div>
      </motion.section>
    </section>
  );
}
