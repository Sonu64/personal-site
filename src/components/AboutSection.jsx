// src/components/AboutSection.jsx
import { motion } from "framer-motion";
import { Cpu, BookOpen, Wrench, Zap } from "lucide-react";
import { FaGithub, FaDocker } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const skills = [
  { name: "Computer Networks", level: 90, color: "#FF7A3D" },
  { name: "Data Structures and Algorithms",             level: 60, color: "#FF7A3D" },
  { name: "C++",    level: 70, color: "#7EC8A4" },
  { name: "C",    level: 70, color: "#7EC8A4" },
  { name: "Java",    level: 65, color: "#7EC8A4" },
  { name: "ROS2",          level: 55, color: "#7EC8A4" },
  { name: "Python",                        level: 65, color: "#B48EE0" },
  { name: "DBMS & SQL",                    level: 68, color: "#FF7A3D" },
  { name: "Mechanical CAD / Design",       level: 50, color: "#B48EE0" },
  { name: "Electronics / Embedded Basics", level: 48, color: "#B48EE0" },
];

const domains = [
  { icon: BookOpen, label: "GATE CS Prep",     desc: "Computer Networks · Operating Systems · DBMS · Data Structures and Algorithms ", color: "#FF7A3D" },
  { icon: Cpu,      label: "Robotics SWE",     desc: "ROS2 · C++ · SLAM · Nav2 · Drone Programming",        color: "#7EC8A4" },
  { icon: Wrench,   label: "Mechanical Design", desc: "CAD · Kinematics",         color: "#B48EE0" },
  { icon: Zap,      label: "Electronics",      desc: "Sensors · Microcontrollers · Embedded Basics",   color: "#FF7A3D" },
];

function SkillBar({ name, level, color, delay }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-xs text-[#888]">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
          style={{ background: `linear-gradient(90deg, ${color}, #B48EE0)` }}
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
  const { isDark } = useTheme();

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">

        {/* Section Header — from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">// WHO.AM.I</p>
          <h2 className="section-heading">About <span className="text-gradient-orange">Me</span></h2>
        </motion.div>

        {/* Two-panel: left from LEFT, right from RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* Left panel — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className={`comic-border p-6 ${isDark ? "bg-[#161616]" : "bg-[#EDE8DC]"} relative overflow-hidden`}>
              <div className="absolute top-0 right-0 font-mono text-[80px] text-[#1E1E1E] font-bold leading-none select-none pointer-events-none">01</div>
              <div className="flex justify-center items-center h-36 relative">
                <svg viewBox="0 0 140 140" className="w-32 h-32">
                  <circle cx="70" cy="35" r="22" fill="none" stroke="#FF7A3D" strokeWidth="2.5"/>
                  <circle cx="70" cy="35" r="14" fill="#FF7A3D" opacity="0.15"/>
                  <circle cx="70" cy="35" r="6"  fill="#FF7A3D"/>
                  <rect x="42" y="62" width="56" height="50" rx="6" fill="none" stroke="#7EC8A4" strokeWidth="2"/>
                  <rect x="48" y="68" width="44" height="38" rx="4" fill="#7EC8A4" opacity="0.08"/>
                  <line x1="42" y1="80" x2="18"  y2="100" stroke="#B48EE0" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="98" y1="80" x2="122" y2="100" stroke="#B48EE0" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="55" y1="112" x2="50" y2="138" stroke="#FF7A3D" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="85" y1="112" x2="90" y2="138" stroke="#FF7A3D" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="70" cy="85" r="3" fill="#7EC8A4" opacity="0.7"/>
                  <circle cx="60" cy="77" r="2" fill="#B48EE0" opacity="0.5"/>
                  <circle cx="80" cy="77" r="2" fill="#B48EE0" opacity="0.5"/>
                </svg>
              </div>
              <div className="text-center mt-2">
                <p className="font-hand text-lg text-[#FF7A3D] font-bold">B.Tech — Mechatronics and Automation Engg.</p>
                <p className={`font-mono text-xs mt-1 ${isDark ? "text-[#666]" : "text-[#888]"}`}>Indian Institute of Information Technology, Bhagalpur · Batch 2022</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Institute", value: "IIIT Bhagalpur", color: "#FF7A3D" },
                { label: "Branch",    value: "Mechatronics & Automation", color: "#7EC8A4" },
                { label: "Focus",     value: "Robotics SWE",              color: "#B48EE0" },
                { label: "Target",    value: "GATE CS",                   color: "#FF7A3D" },
              ].map((stat) => (
                <div key={stat.label} className={`comic-border px-4 py-3 ${isDark ? "bg-[#161616]" : "bg-[#EDE8DC]"}`}>
                  <p className="font-mono text-xs text-[#666] mb-1">{stat.label}</p>
                  <p className="font-display font-bold text-sm" style={{ color: stat.color }}>{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right panel — slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="flex flex-col gap-6"
          >
            <div className={`comic-border-mint p-6 ${isDark ? "bg-[#161616]" : "bg-[#EDE8DC]"}`}>
              <p className="font-mono text-xs text-[#7EC8A4] mb-4 tracking-widest">// BIO.TXT</p>
              <div className="space-y-4">
                <p className={`font-display leading-relaxed ${isDark ? "text-[#DDD]" : "text-[#333]"}`}>
                  I'm a <span className="text-[#FF7A3D] font-semibold">Mechatronics & Automation Engineering</span> student at IIIT Bhagalpur — a discipline that sits at the crossroads of mechanical systems, electronics, and software.
                </p>
                <p className={`font-display leading-relaxed ${isDark ? "text-[#AAA]" : "text-[#555]"}`}>
                  My current obsession is <span className="text-[#7EC8A4] font-semibold">Robotics Software Engineering</span> — writing C++ ROS2 nodes, understanding SLAM, and building systems that can reason about the physical world.
                </p>
                <p className={`font-display leading-relaxed ${isDark ? "text-[#AAA]" : "text-[#555]"}`}>
                  Simultaneously, I'm grinding through <span className="text-[#B48EE0] font-semibold">GATE CS preparation</span> — treating computer science fundamentals as the bedrock of everything I want to build.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {domains.map(({ icon: Icon, label, desc, color }) => (
                <div key={label} className={`comic-border p-3 ${isDark ? "bg-[#0C0C0C]" : "bg-[#EDE8DC]"} hover:scale-[1.02] transition-transform duration-200`}>
                  <Icon size={16} className="mb-2" style={{ color }} />
                  <p className="font-display font-semibold text-xs mb-1" style={{ color }}>{label}</p>
                  <p className={`font-mono text-[10px] leading-relaxed ${isDark ? "text-[#555]" : "text-[#888]"}`}>{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills — from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={`comic-border p-8 ${isDark ? "bg-[#161616]" : "bg-[#EDE8DC]"}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-[#333]"/>
              <p className="font-mono text-xs tracking-widest text-[#FF7A3D] uppercase">// Skill Levels</p>
              <div className="h-px flex-1 bg-[#333]"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.06} />
              ))}
            </div>

            {/* Other relevant skills */}
            <div className="mt-8 pt-6 border-t border-dashed border-[#333]">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="h-px flex-1 bg-[#333]"/>
                <p className="font-mono text-xs tracking-widest text-[#7EC8A4] uppercase">// Other relevant skills</p>
                <div className="h-px flex-1 bg-[#333]"/>
              </div>
              <div className="flex flex-wrap gap-3 justify-start">
                <span className="flex items-center gap-2 font-mono text-xs px-4 py-2 border-2 border-[#7EC8A4] text-[#7EC8A4] bg-[#7EC8A4]/5 hover:bg-[#7EC8A4]/10 transition-colors duration-250">
                  <FaGithub size={15} /> Git and GitHub
                </span>
                <span className="flex items-center gap-2 font-mono text-xs px-4 py-2 border-2 border-[#B48EE0] text-[#B48EE0] bg-[#B48EE0]/5 hover:bg-[#B48EE0]/10 transition-colors duration-250">
                  <FaDocker size={15} /> Docker
                </span>
              </div>
            </div>

            <p className={`font-mono text-[10px] mt-6 text-center ${isDark ? "text-[#444]" : "text-[#999]"}`}>
              // Self-assessed · Constantly updating
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
