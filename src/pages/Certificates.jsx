import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, Eye, X } from "lucide-react";
import { AnimatedButton, EmptyMedia, GlassPanel, SectionHeading, fadeUp, stagger } from "../components/PremiumUI";
import { certificates, pageContent } from "../data/portfolioData";

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selected, setSelected] = useState(null);
  const currentCertificates = certificates[tab] || [];

  return (
    <section className="page">
      <SectionHeading eyebrow={pageContent.certificates.eyebrow} title={pageContent.certificates.title} align="center">
        {pageContent.certificates.description}
      </SectionHeading>

      <div className="segmented-control">
        {["tech", "other"].map((item) => (
          <button key={item} className={tab === item ? "active" : ""} onClick={() => setTab(item)}>
            {item === "tech" ? "Tech" : "Others"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className="certificate-grid"
          variants={stagger}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -20 }}
        >
          {currentCertificates.length === 0 && (
            <GlassPanel className="certificate-empty" variants={fadeUp}>
              <span className="eyebrow">{tab === "tech" ? "Tech" : "Others"}</span>
              <h2>{pageContent.certificates.emptyTitle}</h2>
              <p>{pageContent.certificates.emptyText}</p>
            </GlassPanel>
          )}

          {currentCertificates.map((cert, index) => (
            <GlassPanel key={cert.title} className="certificate-card" variants={fadeUp}>
              <button className="certificate-image" onClick={() => setSelected(cert)}>
                {cert.link ? <img src={cert.link} alt={cert.title} loading="lazy" /> : <EmptyMedia label={cert.title} />}
                <span><Eye size={16} /> Preview 0{index + 1}</span>
              </button>
              <div className="certificate-body">
                <h2>{cert.title}</h2>
                <p>{cert.org}</p>
                <div>
                  <span>{cert.date}</span>
                  <a href={cert.link} download aria-label={`Download ${cert.title}`}>
                    <Download size={17} />
                  </a>
                  {cert.verificationLink && (
                    <a href={cert.verificationLink} target="_blank" rel="noreferrer" aria-label={`Verify ${cert.title}`}>
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>
            </GlassPanel>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selected && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div className="certificate-modal" initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.94, opacity: 0 }} onClick={(event) => event.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close certificate preview">
                <X size={22} />
              </button>
              <img src={selected.link} alt={selected.title} />
              <div>
                <span className="eyebrow">{selected.org} / {selected.date}</span>
                <h2>{selected.title}</h2>
                <AnimatedButton href={selected.link} download icon={<Download size={17} />}>Download Certificate</AnimatedButton>
                {selected.verificationLink && (
                  <AnimatedButton href={selected.verificationLink} variant="secondary" icon={<ExternalLink size={17} />}>Verify Certificate</AnimatedButton>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
