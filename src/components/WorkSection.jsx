// src/components/WorkSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { projects } from "../data/projects";

const categories = ["All", "Robotics", "Software", "Learning", "Mechanical"];

const statusColors = {
  "Completed":   "#7EC8A4",
  "In Progress": "#FF7A3D",
  "Continuous Progress": "#B48EE0",
  "Planned":     "#B48EE0",
};

function ProjectCard({ project, index, isDark }) {
  // Even cards from left, odd cards from right
  const fromX = index % 2 === 0 ? -50 : 50;
  const borderClass = project.highlight ? "comic-border-orange" : "comic-border";

  return (
    <motion.div
      initial={{ opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: (index % 2) * 0.08 }}
    >
      <Tilt
        tiltMaxAngleX={6} tiltMaxAngleY={6}
        scale={1.015} transitionSpeed={800}
        glareEnable={false}
        className="h-full"
      >
        <div className={`h-full flex flex-col ${borderClass} shimmer-card ${
          isDark ? "bg-[#161616]" : "bg-[#EDE8DC]"
        } ${project.placeholder ? "opacity-60" : ""} relative overflow-hidden p-6 transition-all duration-300`}>

          <div className="absolute top-0 right-0 font-mono text-[64px] font-bold text-[#1E1E1E] leading-none select-none pointer-events-none">
            {String(project.id).padStart(2, "0")}
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[10px] px-2 py-1 border"
              style={{ color: statusColors[project.status], borderColor: statusColors[project.status] + "66", background: statusColors[project.status] + "10" }}>
              {project.status}
            </span>
            <span className="tech-tag-orange font-mono text-[10px]">{project.category}</span>
          </div>

          <h3 className={`font-display font-bold text-lg mb-3 relative z-10 ${isDark ? "text-[#FAF7F0]" : "text-[#1A1A2E]"}`}>
            {project.title}
          </h3>
          <p className={`font-display text-sm leading-relaxed mb-4 flex-1 ${isDark ? "text-[#888]" : "text-[#666]"}`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => <span key={tag} className="tech-tag text-[10px]">{tag}</span>)}
          </div>

          <div className="flex gap-3 mt-auto pt-2 justify-start">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                id={`project-github-${project.id}`}
                className="flex items-center justify-center gap-2 font-mono text-[11px] w-32 py-2.5 bg-[#7EC8A4]/10 text-[#7EC8A4] border border-[#7EC8A4]/30 hover:bg-[#7EC8A4] hover:text-[#161616] transition-all duration-200 uppercase tracking-wider font-bold">
                <FaGithub size={14} /> Code
              </a>
            ) : (
              <span className="flex items-center justify-center gap-2 font-mono text-[11px] w-32 py-2.5 bg-[#333]/10 text-[#666] border border-[#333]/30 uppercase tracking-wider font-bold">
                <Lock size={14} /> Coming Soon
              </span>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                id={`project-demo-${project.id}`}
                className="flex items-center justify-center gap-2 font-mono text-[11px] w-32 py-2.5 bg-[#FF7A3D]/10 text-[#FF7A3D] border border-[#FF7A3D]/30 hover:bg-[#FF7A3D] hover:text-[#161616] transition-all duration-200 uppercase tracking-wider font-bold">
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>

          {project.highlight && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF7A3D] to-[#B48EE0]"/>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function WorkSection() {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 relative">
      <div className="section-container mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center"
        >
          <p className="section-tag mb-3">// BUILD.LOG</p>
          <h2 className="section-heading">My <span className="text-gradient-mint">Work</span></h2>
          <p className={`font-display mt-4 ${isDark ? "text-[#666]" : "text-[#888]"} max-w-lg mx-auto`}>
            Projects from the intersection of hardware, software, and pure curiosity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mt-10"
        >
          {categories.map((cat) => (
            <button key={cat} id={`work-filter-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs px-4 py-1.5 border-2 transition-all duration-200 ${
                activeCategory === cat
                  ? "border-[#7EC8A4] text-[#7EC8A4] bg-[#7EC8A4]/10"
                  : isDark
                  ? "border-[#333] text-[#666] hover:border-[#7EC8A4] hover:text-[#7EC8A4]"
                  : "border-[#C8BFA8] text-[#999] hover:border-[#7EC8A4] hover:text-[#7EC8A4]"
              }`}
            >{cat}</button>
          ))}
        </motion.div>
      </div>

      <div className="section-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} isDark={isDark} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.3 }}
          className={`text-center font-mono text-xs mt-10 ${isDark ? "text-[#444]" : "text-[#AAA]"}`}
        >
          // More projects loading... <span className="animate-blink text-[#FF7A3D]">▋</span>
        </motion.p>
      </div>
    </section>
  );
}
