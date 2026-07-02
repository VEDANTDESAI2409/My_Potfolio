import React from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Printer } from "lucide-react";
import { AnimatedButton, GlassPanel, SectionHeading, fadeUp, stagger } from "../components/PremiumUI";
import { education, pageContent, personalInfo, projects, resumeInfo, socialLinks } from "../data/portfolioData";

export default function Resume() {
  return (
    <section className="page">
      <SectionHeading eyebrow={pageContent.resume.eyebrow} title={pageContent.resume.title} align="center">
        {pageContent.resume.description}
      </SectionHeading>

      <motion.div className="resume-layout" variants={stagger} initial="hidden" animate="visible">
        <GlassPanel className="resume-profile" variants={fadeUp}>
          <div className="resume-avatar">{personalInfo.initials}</div>
          <span className="eyebrow">{personalInfo.name}</span>
          <h2>{resumeInfo.headline}</h2>
          <p>{resumeInfo.summary}</p>
          <div className="resume-info-grid">
            {resumeInfo.infoCards.map((item) => <span key={item.label}><b>{item.label}</b>{item.value}</span>)}
          </div>
          <div className="resume-actions">
            <AnimatedButton href={personalInfo.resumePdf} download icon={<Download size={17} />}>{resumeInfo.actions.downloadLabel}</AnimatedButton>
            <AnimatedButton variant="secondary" onClick={() => window.print()} icon={<Printer size={17} />}>{resumeInfo.actions.printLabel}</AnimatedButton>
          </div>
          <div className="resume-socials">
            {resumeInfo.socialKeys.map((key) => {
              const item = socialLinks.find((link) => link.key === key);
              if (!item) return null;
              const Icon = key === "github" ? Github : Linkedin;
              return <a key={item.key} href={item.link} target="_blank" rel="noreferrer"><Icon size={17} /> {item.label}</a>;
            })}
          </div>
        </GlassPanel>

        <div className="resume-stack">
          <GlassPanel className="resume-block" variants={fadeUp}>
            <h2>Experience</h2>
            {resumeInfo.experience.map((item) => (
              <p key={`${item.role}-${item.period}`}>
                <strong>{item.role}</strong> / {item.organization} / {item.period} / {item.text}
              </p>
            ))}
          </GlassPanel>
          <GlassPanel className="resume-block" variants={fadeUp}>
            <h2>Education</h2>
            {education.map((item) => <p key={item.title}><strong>{item.title}</strong> / {item.org} / {item.meta} / {item.result}</p>)}
          </GlassPanel>
          <GlassPanel className="resume-block" variants={fadeUp}>
            <h2>Projects</h2>
            <div className="chip-cloud">{projects.map((project) => <span key={project.title}>{project.title}</span>)}</div>
          </GlassPanel>
          <GlassPanel className="resume-block" variants={fadeUp}>
            <h2>Skills</h2>
            <div className="chip-cloud">{resumeInfo.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </GlassPanel>
        </div>
      </motion.div>

      <GlassPanel className="pdf-viewer" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <object data={personalInfo.resumePdf} type="application/pdf" width="100%" height="680">
          <p>Your browser cannot display PDFs. <a href={personalInfo.resumePdf}>Download the resume</a>.</p>
        </object>
      </GlassPanel>
    </section>
  );
}
