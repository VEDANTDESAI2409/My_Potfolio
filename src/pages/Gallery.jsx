import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Image, X } from "lucide-react";
import { GlassPanel, SectionHeading, fadeUp, stagger } from "../components/PremiumUI";
import { galleryCollections } from "../data/portfolioData";

export default function Gallery() {
  const [tab, setTab] = useState("personal");
  const [zoom, setZoom] = useState({ post: null, index: 0 });
  const current = zoom.post ? zoom.post.photos[zoom.index] : null;

  const nextImage = () => setZoom((state) => ({ ...state, index: (state.index + 1) % state.post.photos.length }));
  const prevImage = () => setZoom((state) => ({ ...state, index: (state.index - 1 + state.post.photos.length) % state.post.photos.length }));

  return (
    <section className="page">
      <SectionHeading eyebrow="Gallery" title="Visual Archive" align="center">
        Personal, project, and achievement visuals arranged into a responsive cinematic gallery.
      </SectionHeading>

      <div className="segmented-control gallery-tabs">
        {Object.keys(galleryCollections).map((item) => (
          <button key={item} className={tab === item ? "active" : ""} onClick={() => setTab(item)}>
            {item}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={tab} className="gallery-feed" variants={stagger} initial="hidden" animate="visible" exit={{ opacity: 0, y: -18 }}>
          {galleryCollections[tab].map((post) => (
            <GlassPanel key={post.id} className="gallery-post" variants={fadeUp}>
              <h2><Image size={20} /> {post.caption}</h2>
              <div className="gallery-masonry">
                {post.photos.map((photo, index) => (
                  <button key={photo} onClick={() => setZoom({ post, index })}>
                    <img src={photo} alt={post.caption} loading="lazy" />
                  </button>
                ))}
              </div>
            </GlassPanel>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {current && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="gallery-zoom" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
              <img src={current} alt="Gallery preview" />
              {zoom.post.photos.length > 1 && (
                <>
                  <button className="zoom-nav left" onClick={prevImage} aria-label="Previous image"><ChevronLeft /></button>
                  <button className="zoom-nav right" onClick={nextImage} aria-label="Next image"><ChevronRight /></button>
                </>
              )}
              <button className="modal-close" onClick={() => setZoom({ post: null, index: 0 })} aria-label="Close gallery preview"><X size={22} /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
