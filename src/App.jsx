import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import {
  BackToTop,
  CustomCursor,
  Loader,
  ParticleBackground,
  ScrollProgress,
} from "./components/PremiumUI";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Certificates from "./pages/Certificates";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Skills from "./pages/Skills";
import { personalInfo, socialLinks } from "./data/portfolioData";

const footerIcons = {
  github: <FaGithub size={18} />,
  linkedin: <FaLinkedinIn size={18} />,
  whatsapp: <FaWhatsapp size={18} />,
  instagram: <FaInstagram size={18} />,
  facebook: <FaFacebookF size={16} />,
  email: <Mail size={18} />,
};

const pageTransition = {
  initial: { opacity: 0, y: 18, filter: "blur(12px)", scale: 0.985 },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
  exit: { opacity: 0, y: -18, filter: "blur(10px)", scale: 0.99 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        className="app-main"
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <CustomCursor />
      <Loader />
      <ScrollProgress />
      <Navbar />
      <AnimatedRoutes />
      <footer className="site-footer">
        <div className="footer-glow" />
        <strong>{personalInfo.name}</strong>
        <span>{personalInfo.role} building fast, polished web experiences.</span>
        <div className="footer-links">
          {socialLinks.map((item) => (
            <a key={item.key} href={item.link} target={item.key === "email" ? undefined : "_blank"} rel={item.key === "email" ? undefined : "noreferrer"} aria-label={item.label}>
              {footerIcons[item.key]}
            </a>
          ))}
        </div>
        <small>Copyright {new Date().getFullYear()} {personalInfo.name}. Built with React.</small>
      </footer>
      <BackToTop />
    </div>
  );
}
