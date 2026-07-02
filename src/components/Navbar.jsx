import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: "/resume" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderLink = (link) => (
    <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setOpen(false)}>
      {({ isActive }) => (
        <span className={`nav-link ${isActive ? "active" : ""}`}>
          {link.label}
          {isActive && <motion.span layoutId="nav-active" className="nav-active" />}
        </span>
      )}
    </NavLink>
  );

  return (
    <header className={`premium-nav ${scrolled ? "scrolled" : ""}`}>
      <NavLink to="/" className="brand-lockup" aria-label={`${personalInfo.name} home`}>
        <motion.span
          className="brand-mark"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          {personalInfo.initials}
        </motion.span>
        <span>
          <strong>{personalInfo.name}</strong>
          <small>Developer Portfolio</small>
        </span>
      </NavLink>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(renderLink)}
      </nav>

      <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -16, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(10px)" }}
            transition={{ duration: 0.25 }}
          >
            {links.map(renderLink)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
