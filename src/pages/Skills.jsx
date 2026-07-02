import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeading, fadeUp, stagger } from "../components/PremiumUI";
import { pageContent, skillGroups } from "../data/portfolioData";

export default function Skills() {
  return (
    <section className="page skills-page">
      <SectionHeading eyebrow={pageContent.skills.eyebrow} title={pageContent.skills.title} align="center">
        {pageContent.skills.description}
      </SectionHeading>

      <motion.div className="skill-radar" variants={stagger} initial="hidden" animate="visible">
        {skillGroups.map((group, groupIndex) => (
          <motion.section key={group.title} className="skill-cluster" variants={fadeUp}>
            <div className="skill-cluster-heading">
              <span><Sparkles size={17} /></span>
              <h2>{group.title}</h2>
              <p>{group.note}</p>
            </div>
            <div className="skill-orbit">
              {group.skills.map((skill, index) => (
                <motion.span
                  className="skill-chip"
                  key={skill.name}
                  whileHover={{ y: -8, rotate: groupIndex % 2 ? 1 : -1 }}
                  transition={{ duration: 0.22 }}
                  style={{ "--delay": `${(index + groupIndex) * 0.04}s` }}
                >
                  {skill.logo ? <img src={skill.logo} alt="" loading="lazy" /> : <b>{skill.name.slice(0, 2)}</b>}
                  <span>{skill.name}</span>
                  <small>{skill.level}</small>
                </motion.span>
              ))}
            </div>
          </motion.section>
        ))}
      </motion.div>
    </section>
  );
}
