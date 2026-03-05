"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const sectionLinks = [
  { label: "Work",     hash: "#systems" },
  { label: "Projects", hash: "#projects" },
  { label: "Stack",    hash: "#tech-stack" },
  { label: "Contact",  hash: "#vision" },
];

export default function Navigation() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // On the home page anchors resolve directly; on other pages prefix with /
  const href = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkClass =
    "text-sm text-[#666666] hover:text-[#e8e8e8] transition-colors duration-300 tracking-wide";
  const activeLinkClass = "text-sm text-[#e8e8e8] tracking-wide";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "backdrop-blur-md border-b border-[#1a1a1a]/60 bg-[#080808]/60"
          : ""
      }`}
    >
      <div className="px-8 py-5 flex justify-between items-center">
        {/* ── Logo ── */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="font-mono text-2xl md:text-xl font-bold md:font-semibold text-[#e8e8e8] tracking-[0.55em] md:tracking-[0.45em] hover:text-[#00d4ff] transition-colors duration-300 drop-shadow-[0_0_12px_rgba(0,212,255,0.45)] md:drop-shadow-[0_0_8px_rgba(0,212,255,0.3)]"
        >
          ABDUL
        </Link>

        {/* ── Desktop nav ── */}
        <ul className="hidden md:flex items-center gap-8">
          {sectionLinks.map((item) => (
            <li key={item.label}>
              <a href={href(item.hash)} className={linkClass}>
                {item.label}
              </a>
            </li>
          ))}
          {/* About — route link */}
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? activeLinkClass : linkClass}
            >
              About
            </Link>
          </li>
        </ul>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 focus:outline-none"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-full h-[2px] bg-[#e8e8e8] origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-full h-[2px] bg-[#e8e8e8]"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-full h-[2px] bg-[#e8e8e8] origin-center"
          />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden border-t border-[#1a1a1a]"
          >
            <ul className="px-8 py-6 space-y-5">
              {sectionLinks.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                >
                  <a
                    href={href(item.hash)}
                    onClick={() => setMobileOpen(false)}
                    className="font-mono text-sm text-[#666666] hover:text-[#e8e8e8] transition-colors duration-300 tracking-wide block"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: sectionLinks.length * 0.07 }}
              >
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className={`font-mono text-sm transition-colors duration-300 tracking-wide block ${
                    pathname === "/about"
                      ? "text-[#00d4ff]"
                      : "text-[#666666] hover:text-[#e8e8e8]"
                  }`}
                >
                  About
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
