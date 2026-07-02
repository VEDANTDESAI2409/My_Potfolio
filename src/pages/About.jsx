import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, Lightbulb, MapPinned, Target } from "lucide-react";
import { GlassPanel, SectionHeading, fadeUp, stagger } from "../components/PremiumUI";
import { aboutInfo, education, pageContent } from "../data/portfolioData";

const icons = [<MapPinned />, <Award />, <GraduationCap />];

export default function About() {
  return (
    <section className="page">
      <SectionHeading eyebrow={pageContent.about.eyebrow} title={pageContent.about.title} align="center">
        {pageContent.about.description}
      </SectionHeading>

      <motion.div className="about-grid" variants={stagger} initial="hidden" animate="visible">
        <GlassPanel className="about-story" variants={fadeUp}>
          <div className="panel-icon"><Lightbulb /></div>
          <h2>{aboutInfo.title}</h2>
          {aboutInfo.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="goal-callout"><Target size={18} /> {aboutInfo.currentGoal}</div>
        </GlassPanel>

        <motion.div className="academic-journey" variants={stagger}>
          {education.map((item, index) => (
            <motion.div key={item.title} className="journey-step" variants={fadeUp}>
              <span className="timeline-dot">{icons[index]}</span>
              <GlassPanel className="timeline-card">
                <span className="eyebrow">{item.level} / 0{index + 1}</span>
                <h2>{item.title}</h2>
                <strong>{item.org}</strong>
                <small>{item.meta} / {item.result}</small>
                <p>{item.text}</p>
              </GlassPanel>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
