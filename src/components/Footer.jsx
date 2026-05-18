// src/components/Footer.jsx
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Mail, ExternalLink, Copy } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const socials = [
  { id: "footer-github",   href: "https://github.com/sonu64",                    icon: FaGithub,   label: "GitHub",   color: "#FF7A3D" },
  { id: "footer-linkedin", href: "https://linkedin.com/in/sourakanti-mandal",                  icon: FaLinkedin, label: "LinkedIn", color: "#7EC8A4" },
  { id: "footer-email",    href: "mailto:sourakantimandal@gmail.com",    icon: Mail,       label: "Email",    color: "#B48EE0" },
];

export default function Footer() {
  const { isDark } = useTheme();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sourakantimandal@gmail.com");
    toast.success("Email copied to clipboard!", {
      icon: "📋",
      style: {
        background: isDark ? "#161616" : "#EDE8DC",
        color: isDark ? "#FAF7F0" : "#1A1A2E",
        border: "2px solid #7EC8A4",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "12px",
      }
    });
  };

  return (
    <footer id="contact" className="pt-24 pb-12 relative">
      <Toaster position="bottom-right" />

      {/* Top divider */}
      <div className="section-container mb-16">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#333] to-transparent"/>
          <p className="font-mono text-xs text-[#444] tracking-widest">// CONTACT.TXT</p>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#333] to-transparent"/>
        </div>
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left — text + socials */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="section-tag mb-4">Let's Connect</p>
              <h2 className="section-heading mb-6">
                Say <span className="text-gradient-orange">Hello</span>
              </h2>
              <p className={`font-display leading-relaxed mb-8 ${isDark ? "text-[#666]" : "text-[#888]"}`}>
                Whether you're curious about Mechatronics, want to talk ROS2, GATE CS, or just want to connect — my inbox is always open. Feel free to reach out directly!
              </p>
            </div>

            {/* Social grid */}
            <div className="grid grid-cols-2 gap-3">
              {socials.map(({ id, href, icon: Icon, label, color }) => (
                <a
                  key={id}
                  href={href}
                  id={id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 border-2 transition-all duration-200 group ${
                    isDark ? "border-[#1E1E1E] hover:border-[#FF7A3D]" : "border-[#C8BFA8] hover:border-[#FF7A3D]"
                  }`}
                  style={{ "--hover-color": color }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center border"
                    style={{ borderColor: color + "44", background: color + "10" }}
                  >
                    <Icon size={14} style={{ color }} />
                  </div>
                  <span className={`font-mono text-xs ${isDark ? "text-[#888] group-hover:text-[#FAF7F0]" : "text-[#888] group-hover:text-[#1A1A2E]"} transition-colors duration-200`}>
                    {label}
                    <ExternalLink size={9} className="inline ml-1 opacity-40"/>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Big Stylized Email Display */}
          <div>
            <div className={`comic-border p-8 ${isDark ? "bg-[#161616]" : "bg-[#EDE8DC]"} h-full flex flex-col justify-center relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 font-mono text-[90px] font-bold text-[#1E1E1E] leading-none select-none pointer-events-none opacity-40">
                @
              </div>
              
              <p className="font-mono text-xs text-[#FF7A3D] mb-4 tracking-widest">// DIRECT_CONTACT.sh</p>
              
              <h3 className={`font-mono text-[10px] tracking-wider mb-2 ${isDark ? "text-[#444]" : "text-[#999]"}`}>
                EMAIL_ADDRESS
              </h3>
              
              {/* Prominent, large email address */}
              <a
                href="mailto:sourakantimandal@gmail.com"
                className={`font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl hover:text-[#FF7A3D] transition-colors duration-200 break-all mb-6 block`}
                title="Send a direct mail"
              >
                sourakantimandal@gmail.com
              </a>
              
              <p className={`font-display text-sm leading-relaxed mb-8 ${isDark ? "text-[#888]" : "text-[#666]"}`}>
                Click the address above to open your default mail client, or use the quick buttons below to interact.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:sourakantimandal@gmail.com"
                  className="flex-1 flex items-center justify-center gap-2 font-mono text-xs px-5 py-3 bg-[#FF7A3D] text-[#0C0C0C] font-bold border-2 border-[#FF7A3D] hover:bg-transparent hover:text-[#FF7A3D] transition-all duration-200 uppercase tracking-wider text-center"
                >
                  <Mail size={13} />
                  Open Mail Client
                </a>
                <button
                  onClick={handleCopyEmail}
                  className={`flex-1 flex items-center justify-center gap-2 font-mono text-xs px-5 py-3 border-2 font-bold transition-all duration-200 uppercase tracking-wider ${
                    isDark
                      ? "border-[#333] text-[#FAF7F0] hover:border-[#7EC8A4] hover:text-[#7EC8A4]"
                      : "border-[#C8BFA8] text-[#1A1A2E] hover:border-[#7EC8A4] hover:text-[#7EC8A4]"
                  }`}
                >
                  <Copy size={13} />
                  Copy Address
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t ${isDark ? "border-[#1E1E1E]" : "border-[#C8BFA8]"}`}
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border border-[#FF7A3D] flex items-center justify-center font-mono font-bold text-[10px] text-[#FF7A3D]">
              S
            </div>
            <span className="font-mono text-xs text-[#444]">
              Built with ❤️ by Sonu
            </span>
          </div>
          <p className="font-mono text-xs text-[#444]">
            © {new Date().getFullYear()} · Sourakanti Mandal
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
