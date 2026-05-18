// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useScrollProgress } from "../hooks/useScrollProgress";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "My Work", href: "#work" },
  { label: "Certs", href: "#certifications" },
  { label: "My Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-[#0C0C0C] border-b border-[#333]"
              : "bg-[#F5F0E8] border-b border-[#C8BFA8]"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 border-2 border-[#FF7A3D] flex items-center justify-center font-mono font-bold text-sm text-[#FF7A3D] group-hover:bg-[#FF7A3D] group-hover:text-[#0C0C0C] transition-all duration-200">
                S
              </div>
              <span className="font-display font-bold text-sm tracking-wider hidden sm:block">
                <span className="text-[#FF7A3D]">&lt;</span>
                SONU
                <span className="text-[#FF7A3D]">/&gt;</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-sm px-3 py-1.5 tracking-wider uppercase transition-all duration-200 relative group ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#FF7A3D]"
                      : isDark
                      ? "text-[#888] hover:text-[#FAF7F0]"
                      : "text-[#888] hover:text-[#1A1A2E]"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7A3D]"
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                id="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`hidden w-9 h-9 border-2 flex items-center justify-center transition-all duration-200 ${
                  isDark
                    ? "border-[#333] text-[#888] hover:border-[#FF7A3D] hover:text-[#FF7A3D]"
                    : "border-[#C8BFA8] text-[#888] hover:border-[#FF7A3D] hover:text-[#FF7A3D]"
                }`}
              >
                {isDark ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              {/* Mobile menu toggle */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 border-2 border-[#333] flex items-center justify-center text-[#888] hover:border-[#FF7A3D] hover:text-[#FF7A3D] transition-all duration-200"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X size={15} /> : <Menu size={15} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t ${
                isDark
                  ? "bg-[#0C0C0C]/95 border-[#333]"
                  : "bg-[#F5F0E8]/95 border-[#C8BFA8]"
              }`}
            >
              <div className="section-container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-mono text-sm px-3 py-2.5 tracking-wider uppercase border-l-2 transition-all duration-200 ${
                      activeSection === link.href.replace("#", "")
                        ? "border-[#FF7A3D] text-[#FF7A3D] bg-[#FF7A3D]/5"
                        : "border-transparent text-[#888] hover:text-[#FAF7F0] hover:border-[#333]"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
