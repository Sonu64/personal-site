// src/components/HeroSection.jsx
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Mail, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const typewriterPhrases = [
  "Mechatronics Student",
  "Robotics SWE Learner",
  "GATE CS Aspirant",
  "ROS2 + C++ Explorer",
  "Survivor",
];

function useTypewriter(phrases, speed = 70, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);

  return display;
}

// Abstract geometric mascot — CSS animated for performance
function RobotMascot() {
  return (
    <div className="robot-float relative w-48 h-48 sm:w-60 sm:h-60 mx-auto">
      <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_24px_rgba(255,122,61,0.3)]">

        {/* Antenna */}
        <line x1="100" y1="5" x2="100" y2="35" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="100" cy="5" r="6" fill="#FF7A3D" className="svg-ant"/>

        {/* Head */}
        <rect x="55" y="35" width="90" height="72" rx="6" fill="#1A1A1A" stroke="#333" strokeWidth="2.5"/>

        {/* Eye Visor */}
        <rect x="65" y="52" width="70" height="22" rx="4" fill="#0C0C0C" stroke="#7EC8A4" strokeWidth="1.5"/>
        <circle cx="85" cy="63" r="7" fill="#7EC8A4" className="svg-eye1"/>
        <circle cx="115" cy="63" r="7" fill="#7EC8A4" className="svg-eye2"/>
        <circle cx="85" cy="63" r="3" fill="#0C0C0C"/>
        <circle cx="115" cy="63" r="3" fill="#0C0C0C"/>

        {/* Mouth panel */}
        <rect x="72" y="85" width="56" height="14" rx="3" fill="#0C0C0C" stroke="#333" strokeWidth="1.5"/>
        <rect x="76" y="89" width="12" height="6" rx="1" fill="#FF7A3D" className="svg-mouth"/>
        <rect x="94" y="89" width="12" height="6" rx="1" fill="#333"/>
        <rect x="112" y="89" width="12" height="6" rx="1" fill="#B48EE0" opacity="0.7"/>

        {/* Neck */}
        <rect x="87" y="107" width="26" height="10" rx="2" fill="#222" stroke="#333" strokeWidth="1.5"/>

        {/* Body */}
        <rect x="40" y="117" width="120" height="80" rx="8" fill="#161616" stroke="#333" strokeWidth="2.5"/>

        {/* Orange panel + circuit lines */}
        <rect x="52" y="128" width="50" height="30" rx="4" fill="#FF7A3D" opacity="0.15" stroke="#FF7A3D" strokeWidth="1.5"/>
        <line x1="60" y1="140" x2="95" y2="140" stroke="#FF7A3D" strokeWidth="1" opacity="0.6"/>
        <line x1="78" y1="132" x2="78" y2="152" stroke="#FF7A3D" strokeWidth="1" opacity="0.6"/>

        {/* Lilac panel + ring */}
        <rect x="108" y="128" width="42" height="30" rx="4" fill="#B48EE0" opacity="0.1" stroke="#B48EE0" strokeWidth="1.5"/>
        <circle cx="129" cy="143" r="8" fill="none" stroke="#B48EE0" strokeWidth="1.5" className="svg-ring"/>
        <circle cx="129" cy="143" r="4" fill="#B48EE0" opacity="0.6"/>

        {/* Belly strip */}
        <rect x="60" y="168" width="80" height="18" rx="3" fill="#0C0C0C" stroke="#333" strokeWidth="1.5"/>
        <circle cx="80"  cy="177" r="4" fill="#7EC8A4" opacity="0.8"/>
        <circle cx="100" cy="177" r="4" fill="#FF7A3D" opacity="0.8"/>
        <circle cx="120" cy="177" r="4" fill="#B48EE0" opacity="0.8"/>

        {/* Arms */}
        <rect x="16"  y="120" width="24" height="60" rx="6" fill="#1A1A1A" stroke="#333" strokeWidth="2"/>
        <rect x="20"  y="170" width="16" height="12" rx="3" fill="#FF7A3D" opacity="0.4"/>
        <rect x="160" y="120" width="24" height="60" rx="6" fill="#1A1A1A" stroke="#333" strokeWidth="2"/>
        <rect x="164" y="170" width="16" height="12" rx="3" fill="#7EC8A4" opacity="0.4"/>

        {/* Legs */}
        <rect x="65"  y="197" width="30" height="20" rx="4" fill="#161616" stroke="#333" strokeWidth="2"/>
        <rect x="105" y="197" width="30" height="20" rx="4" fill="#161616" stroke="#333" strokeWidth="2"/>
        <rect x="68"  y="213" width="24" height="6"  rx="2" fill="#333"/>
        <rect x="108" y="213" width="24" height="6"  rx="2" fill="#333"/>
      </svg>
    </div>
  );
}


export default function HeroSection() {
  const { isDark } = useTheme();
  const typed = useTypewriter(typewriterPhrases);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center pt-[130px] pb-16 overflow-hidden grain-overlay"
    >
      {/* Background abstract circuit pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M10 10 H50 V50" fill="none" stroke="#FF7A3D" strokeWidth="0.8"/>
              <circle cx="10" cy="10" r="2" fill="#FF7A3D"/>
              <circle cx="50" cy="50" r="2" fill="#7EC8A4"/>
              <path d="M30 0 V30 H60" fill="none" stroke="#B48EE0" strokeWidth="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>

        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#FF7A3D] opacity-[0.04] blur-[80px]"/>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#B48EE0] opacity-[0.05] blur-[100px]"/>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-[#7EC8A4] opacity-[0.04] blur-[60px]"/>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-6"
        >
          {/* Left — Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Label */}
            <motion.div variants={itemVariants} className="flex items-center gap-1 sm:gap-2 justify-center lg:justify-start mb-5 px-2 sm:px-0">
              <div className="h-px w-2 sm:w-8 bg-[#FF7A3D] shrink-0"/>
              <span className="section-tag text-[9px] sm:text-xs sm:whitespace-nowrap">Mechatronics And Automation · IIIT Bhagalpur</span>
              <div className="h-px w-2 sm:w-8 bg-[#FF7A3D] shrink-0"/>
            </motion.div>

            {/* Name block — comic panel style */}
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6 comic-border-orange px-4 py-3 bg-[#161616]"
            >
              <p className="font-mono text-xs text-[#FF7A3D] tracking-widest mb-1">// INITIATING SEQUENCE</p>
              <h1 className="section-heading text-gradient-orange leading-tight">
                Engineer.<br/>Survivor.<br/>Builder.
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 justify-center lg:justify-start mb-6">
              <Terminal size={14} className="text-[#7EC8A4]" />
              <p className="font-mono text-sm text-[#FAF7F0]">
                <span className="text-[#7EC8A4]">$ </span>
                <span>{typed}</span>
                <span className="animate-blink text-[#FF7A3D]">▋</span>
              </p>
            </motion.div>

            {/* Bio blurb */}
            <motion.p
              variants={itemVariants}
              className={`font-display text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 ${
                isDark ? "text-[#888]" : "text-[#555]"
              }`}
            >
              Studying the intersection of{" "}
              <span className="text-[#FF7A3D] font-medium">Mechanical Systems</span>,{" "}
              <span className="text-[#7EC8A4] font-medium">Software Engineering</span>, and{" "}
              <span className="text-[#B48EE0] font-medium">Electronics</span> — building robots that actually do things.
            </motion.p>

            {/* Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {["ROS2", "C++", "Java", "GATE CS", "Nav2", "Python", "SLAM"].map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#work"
                id="hero-cta-work"
                className="font-mono text-sm px-5 py-2.5 bg-[#FF7A3D] text-[#0C0C0C] font-bold border-2 border-[#FF7A3D] hover:bg-transparent hover:text-[#FF7A3D] transition-all duration-200 uppercase tracking-wider"
              >
                My Work →
              </a>
              <a
                href="#story"
                id="hero-cta-story"
                className="font-mono text-sm px-5 py-2.5 bg-transparent border-2 border-[#333] text-[#888] hover:border-[#B48EE0] hover:text-[#B48EE0] transition-all duration-200 uppercase tracking-wider"
              >
                My Story
              </a>
            </motion.div>
          </div>

          {/* Right — Robot Mascot */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex flex-col items-center justify-center gap-4"
          >
            <RobotMascot isDark={isDark} />
            {/* Robot speech bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
              className="speech-bubble max-w-[200px] text-center"
            >
              <p className="font-hand text-base text-[#7EC8A4]">
                Let's build something together!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-[#444]"
        >
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
