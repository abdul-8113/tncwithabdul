"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerNav = [
  { label: "Work",     href: "#systems",   route: false },
  { label: "Projects", href: "#projects",  route: false },
  { label: "Stack",    href: "#tech-stack",route: false },
  { label: "Contact",  href: "#vision",    route: false },
  { label: "About",    href: "/about",     route: true  },
];

const socials = [
  { label: "GitHub",   href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter",  href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Subtle corner accent */}
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 100%, #00d4ff 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        {/* ── Main row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="font-mono text-xl font-light text-[#e8e8e8] tracking-[0.35em] hover:text-[#00d4ff] transition-colors duration-300 inline-block mb-3"
            >
              ABDUL
            </a>
            <p className="text-[#666666] text-sm leading-relaxed max-w-xs">
              Engineering Intelligent Systems for Scale.
            </p>
            <p className="font-mono text-xs text-[#333333] mt-3 tracking-wide">
              Software Engineer · Founder · AI Builder
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.label}>
                  {item.route ? (
                    <Link
                      href={item.href}
                      className="text-sm text-[#666666] hover:text-[#e8e8e8] transition-colors duration-300 tracking-wide"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm text-[#666666] hover:text-[#e8e8e8] transition-colors duration-300 tracking-wide"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase mb-5">
              Connect
            </p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#666666] hover:text-[#e8e8e8] transition-colors duration-300 tracking-wide group inline-flex items-center gap-2"
                  >
                    {s.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#00d4ff]">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent mb-8 origin-left"
        />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs text-[#333333]">
            © {new Date().getFullYear()} Abdullahi N. Buhmean. All rights reserved.
          </span>
          <span className="font-mono text-xs text-[#333333] tracking-widest">
            Engineered with precision.
          </span>
        </div>
      </div>
    </footer>
  );
}
