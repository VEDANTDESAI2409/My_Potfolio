import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Download, Image } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export function ParticleBackground() {
  const [pos, setPos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const move = (event) => {
      setPos({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="cinematic-bg" aria-hidden="true">
      <div className="gradient-field" />
      <div className="soft-vignette" />
      <div className="grain" />
      <div className="mouse-wash" style={{ "--x": `${pos.x}%`, "--y": `${pos.y}%` }} />
    </div>
  );
}

export function CustomCursor() {
  return null;
}

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  if (!loading) return null;
  return (
    <motion.div className="loader-screen" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.span initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        {personalInfo.name}
      </motion.span>
      <motion.div className="loader-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.65, ease: "easeInOut" }} />
    </motion.div>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />;
}

export function BackToTop() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.button
      className="back-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      animate={{ opacity: shown ? 1 : 0, y: shown ? 0 : 18, pointerEvents: shown ? "auto" : "none" }}
    >
      <ArrowUp size={19} />
    </motion.button>
  );
}

export function SectionHeading({ eyebrow, title, children, align = "left" }) {
  return (
    <motion.header
      className={`section-heading ${align === "center" ? "center" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {children && <p>{children}</p>}
    </motion.header>
  );
}

export function GlassPanel({ children, className = "", ...props }) {
  return (
    <motion.div className={`soft-panel ${className}`} variants={fadeUp} {...props}>
      {children}
    </motion.div>
  );
}

export function AnimatedButton({ children, href, download, icon, variant = "primary", className = "", ...props }) {
  const ref = useRef(null);
  const external = href && /^(https?:|mailto:|tel:)/.test(href);

  const onMove = (event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const common = {
    ref,
    className: `premium-button ${variant} ${className}`,
    onPointerMove: onMove,
    whileHover: { y: -4 },
    whileTap: { scale: 0.98 },
    ...props,
  };
  const content = (
    <>
      <span className="button-ripple" />
      {icon}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a href={href} download={download} target={external && !download ? "_blank" : undefined} rel={external && !download ? "noreferrer" : undefined} {...common}>
        {content}
      </motion.a>
    );
  }
  return <motion.button {...common}>{content}</motion.button>;
}

export function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / 1000, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Tilt({ children, className = "" }) {
  return (
    <motion.div className={className} whileHover={{ y: -8, rotate: -1 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  );
}

export function Divider() {
  return <div className="editorial-divider" aria-hidden="true" />;
}

export function EmptyMedia({ label }) {
  return (
    <div className="empty-media">
      <Image size={20} />
      <span>{label}</span>
    </div>
  );
}

export function DownloadResumeButton({ children = "Download Resume" }) {
  return (
    <AnimatedButton href={personalInfo.resumePdf} download icon={<Download size={18} />}>
      {children}
    </AnimatedButton>
  );
}
