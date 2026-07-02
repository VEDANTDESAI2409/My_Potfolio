import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedButton, SectionHeading, fadeUp, stagger } from "../components/PremiumUI";
import { pageContent, projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="page projects-page">
      <SectionHeading eyebrow={pageContent.projects.eyebrow} title={pageContent.projects.title} align="center">
        {pageContent.projects.description}
      </SectionHeading>

      <motion.div className="case-study-list" variants={stagger} initial="hidden" animate="visible">
        {projects.map((project, index) => (
          <motion.article className={`case-study ${index % 2 ? "reverse" : ""}`} key={project.title} variants={fadeUp}>
            <div className="case-visual">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="case-copy">
              <span className="eyebrow">{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <div className="technology-pills">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="case-actions">
                <AnimatedButton href={project.code} variant="secondary" icon={<Github size={17} />}>{pageContent.projects.codeLabel}</AnimatedButton>
                {project.live && <AnimatedButton href={project.live} icon={<ExternalLink size={17} />}>{pageContent.projects.liveLabel}</AnimatedButton>}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
