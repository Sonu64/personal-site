// src/components/CertificationsSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, Lock } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { certifications } from "../data/certifications";

const colorMap = {
  orange: { border: "#FF7A3D", text: "#FF7A3D", glow: "rgba(255,122,61,0.15)", bg: "rgba(255,122,61,0.05)" },
  mint:   { border: "#7EC8A4", text: "#7EC8A4", glow: "rgba(126,200,164,0.15)", bg: "rgba(126,200,164,0.05)" },
  lilac:  { border: "#B48EE0", text: "#B48EE0", glow: "rgba(180,142,224,0.15)", bg: "rgba(180,142,224,0.05)" },
};

const categoryFilters = ["All", "CS", "Robotics", "AI/ML"];

// 3 cards: left from left, center from bottom, right from right
const cardDirections = [-60, 0, 60];

function CertCard({ cert, index, isDark }) {
  const colors  = colorMap[cert.color] || colorMap.mint;
  const fromX   = cardDirections[index] ?? (index % 2 === 0 ? -50 : 50);
  const fromY   = fromX === 0 ? 40 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromX, y: fromY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
      className="h-full"
    >
      <div className={`h-full flex flex-col p-6 relative overflow-hidden shimmer-card transition-all duration-300 ${
        cert.placeholder ? "opacity-55" : ""
      } ${isDark ? "bg-[#161616]" : "bg-[#EDE8DC]"}`}
        style={{ border: `2px solid ${colors.border}`, boxShadow: `4px 4px 0px ${colors.border}, 0 0 20px ${colors.glow}` }}
      >
        <div className="absolute top-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(90deg, ${colors.border}, transparent)` }}/>
        <div className="absolute top-2 right-3 font-mono text-[40px] font-bold leading-none select-none pointer-events-none"
          style={{ color: colors.border, opacity: 0.07 }}>
          {cert.badge}
        </div>

        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 flex items-center justify-center border-2"
            style={{ borderColor: colors.border, background: colors.bg }}>
            {cert.icon ? (
              <cert.icon size={18} style={{ color: colors.text }} />
            ) : (
              <Award size={18} style={{ color: colors.text }} />
            )}
          </div>
          <span className="font-mono text-[10px] px-2 py-0.5 border"
            style={{ color: colors.text, borderColor: colors.border + "66", background: colors.bg }}>
            {cert.category}
          </span>
        </div>

        <h3 className={`font-display font-bold text-sm mb-1 leading-snug ${isDark ? "text-[#FAF7F0]" : "text-[#1A1A2E]"}`}>
          {cert.title}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-[10px]" style={{ color: colors.text }}>{cert.issuer}</span>
          <span className={`font-mono text-[10px] ${isDark ? "text-[#444]" : "text-[#999]"}`}>· {cert.date}</span>
        </div>
        <p className={`font-display text-xs leading-relaxed flex-1 mb-4 ${isDark ? "text-[#777]" : "text-[#666]"}`}>
          {cert.description}
        </p>

        {cert.credentialUrl ? (
          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
            id={`cert-verify-${cert.id}`}
            className="flex items-center gap-1.5 font-mono text-xs transition-all duration-200 w-fit"
            style={{ color: colors.text }}>
            <ExternalLink size={11} /> Verify Credential
          </a>
        ) : (
          <span className={`flex items-center gap-1.5 font-mono text-xs ${isDark ? "text-[#444]" : "text-[#BBB]"}`}>
            <Lock size={11} /> Pending
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function CertificationsSection() {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? certifications
    : certifications.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B48EE0] opacity-[0.03] rounded-full blur-[80px]"/>
      </div>

      <div className="section-container">
        {/* Header from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="section-tag mb-3">// CREDENTIALS.JSON</p>
          <h2 className="section-heading"><span className="text-gradient-orange">Certifications</span></h2>
          <p className={`font-display mt-4 ${isDark ? "text-[#666]" : "text-[#888]"} max-w-lg mx-auto`}>
            Milestones on the learning path — each one a proof-of-work.
          </p>
        </motion.div>

        {/* Filters from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categoryFilters.map((cat) => (
            <button key={cat} id={`cert-filter-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs px-4 py-1.5 border-2 transition-all duration-200 ${
                activeCategory === cat
                  ? "border-[#B48EE0] text-[#B48EE0] bg-[#B48EE0]/10"
                  : isDark
                  ? "border-[#333] text-[#666] hover:border-[#B48EE0] hover:text-[#B48EE0]"
                  : "border-[#C8BFA8] text-[#999] hover:border-[#B48EE0] hover:text-[#B48EE0]"
              }`}
            >{cat}</button>
          ))}
        </motion.div>

        {/* Cards: left | center | right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} isDark={isDark} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.3 }}
          className={`text-center font-mono text-xs mt-10 ${isDark ? "text-[#444]" : "text-[#AAA]"}`}
        >
          // More certs being earned... <span className="animate-blink text-[#B48EE0]">▋</span>
        </motion.p>
      </div>
    </section>
  );
}
