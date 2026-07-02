import React from "react";
import { Home } from "lucide-react";
import { AnimatedButton, GlassPanel } from "../components/PremiumUI";

export default function NotFound() {
  return (
    <section className="page not-found-page">
      <GlassPanel className="not-found-card" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
        <span className="eyebrow">404</span>
        <h1>Route not found</h1>
        <p>The page you requested does not exist in this portfolio interface.</p>
        <AnimatedButton href="/" icon={<Home size={17} />}>Back Home</AnimatedButton>
      </GlassPanel>
    </section>
  );
}
