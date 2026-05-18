// src/components/MyStorySection.jsx
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { timelineEvents } from "../data/timeline";

const colorMap = {
  orange: { accent: "#FF7A3D", glow: "rgba(255,122,61,0.2)",  border: "#FF7A3D" },
  mint:   { accent: "#7EC8A4", glow: "rgba(126,200,164,0.15)", border: "#7EC8A4" },
  lilac:  { accent: "#B48EE0", glow: "rgba(180,142,224,0.2)",  border: "#B48EE0" },
};

function TimelineEvent({ event, index, isDark }) {
  const isLeft = index % 2 === 0;
  const colors = colorMap[event.color] || colorMap.orange;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row md:items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content card */}
      <div className={`w-full pl-14 md:pl-0 md:w-5/12 ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`inline-block w-full p-5 ${isDark ? "bg-[#161616]" : "bg-[#EDE8DC]"} relative overflow-hidden`}
          style={{ border: `2px solid ${colors.border}`, boxShadow: `4px 4px 0px ${colors.border}` }}
        >
          <p className="font-hand text-lg font-bold mb-1" style={{ color: colors.accent }}>{event.chapter}</p>
          <p className={`font-mono text-[10px] mb-2 ${isDark ? "text-[#555]" : "text-[#999]"}`}>{event.date}</p>
          <h3 className={`font-display font-bold text-base mb-2 ${isDark ? "text-[#FAF7F0]" : "text-[#1A1A2E]"}`}>{event.title}</h3>
          <p className={`font-display text-sm leading-relaxed ${isDark ? "text-[#777]" : "text-[#666]"}`}>{event.description}</p>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 0%, ${colors.glow}, transparent 70%)` }}/>
        </motion.div>
      </div>

      {/* Center node */}
      <div className="absolute left-0 top-0 md:static md:w-2/12 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.35, delay: 0.15, type: "spring", stiffness: 220 }}
          className="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 border-2"
          style={{ background: isDark ? "#0C0C0C" : "#F5F0E8", borderColor: colors.border, boxShadow: `0 0 16px ${colors.glow}` }}
        >
          {event.icon}
        </motion.div>
      </div>

      <div className="hidden md:block md:w-5/12" />
    </motion.div>
  );
}

export default function MyStorySection() {
  const { isDark } = useTheme();

  return (
    <section id="story" className="py-24 relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,.5) 2px,rgba(255,255,255,.5) 4px)" }}/>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#B48EE0] opacity-[0.03] rounded-full blur-[120px]"/>
      </div>

      <div className="section-container relative z-10">
        {/* Header — from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-6"
        >
          <p className="section-tag mb-3">// FEATURE.STORY</p>
          <h2 className="section-heading">My <span className="text-gradient-orange">Story</span></h2>
        </motion.div>

        {/* Pull quote — from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="max-w-2xl mx-auto mb-16 text-center"
        >
          <div className={`p-6 relative ${isDark ? "bg-[#161616]" : "bg-[#EDE8DC]"}`}
            style={{ border: "2px solid #333", boxShadow: "4px 4px 0px #333" }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-hand text-4xl text-[#FF7A3D] leading-none">"</div>
            <p className="font-hand text-xl md:text-2xl leading-relaxed mt-2" style={{ color: isDark ? "#DDD" : "#333" }}>
              Three surgeries, One Dream, and a whole lot of C++ —
              <span className="text-[#FF7A3D]"> this is my story...</span>
            </p>
          </div>
        </motion.div>

        {/* Timeline — alternating left/right */}
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 origin-top md:-translate-x-1/2"
            style={{ background: "linear-gradient(180deg, #FF7A3D, #B48EE0, #7EC8A4)" }}
          />
          <div className="relative flex flex-col">
            {timelineEvents.map((event, i) => (
              <div key={event.id} className={i < timelineEvents.length - 1 ? "pb-12" : ""}>
                <TimelineEvent event={event} index={i} isDark={isDark} />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className={`font-mono text-xs ${isDark ? "text-[#444]" : "text-[#BBB]"}`}>
            // This story is still being written. <span className="animate-blink text-[#FF7A3D]">▋</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
