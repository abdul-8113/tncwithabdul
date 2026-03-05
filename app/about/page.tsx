"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "5+",  label: "Years Engineering",  sub: "Production systems" },
  { value: "20+", label: "Systems Shipped",     sub: "Across industries" },
  { value: "3+",  label: "AI Products Built",   sub: "LLMs at scale" },
];

const timeline = [
  { year: "2018", title: "First production system deployed.",
    detail: "Self-taught. First server live. No going back." },
  { year: "2020", title: "Led backend for a fintech platform.",
    detail: "50k+ daily transactions. Distributed architecture. Zero downtime." },
  { year: "2022", title: "Shipped first AI product to production.",
    detail: "LLM integration at scale. Prompt engineering meets systems design." },
  { year: "2023", title: "Founded a technology company.",
    detail: "Focused on digital infrastructure for emerging markets." },
  { year: "2024", title: "Scaling globally. AI-first systems.",
    detail: "Multi-region deployments. Intelligent automation. Product thinking." },
];

const values = [
  {
    title: "Systems Thinking",
    desc: "Every feature decision is an architectural decision. I design for the system, not the ticket.",
  },
  {
    title: "Engineering Clarity",
    desc: "Clean service boundaries, honest trade-offs, and no hidden complexity. Clarity scales.",
  },
  {
    title: "Product Precision",
    desc: "Performance and usability are never afterthoughts. Engineering serves the user.",
  },
  {
    title: "Full Ownership",
    desc: "I build systems I'd stake my reputation on. Every deployment is a signature.",
  },
];

const openTo = [
  "Technical Co-Founder roles",
  "CTO advisory engagements",
  "AI product architecture",
  "Complex system design",
  "Strategic tech consulting",
  "Speaking engagements",
];

// ─── Shared card wrapper ──────────────────────────────────────────────────────

function Card({
  children,
  className = "",
  delay = 0,
  glow = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glow?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-2xl border border-[#1a1a1a] bg-[#0f0f0f] overflow-hidden
        hover:border-[#00d4ff]/25 transition-colors duration-500 ${className}`}
    >
      {glow && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #00d4ff 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[#080808] pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* ── Page header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#666666] hover:text-[#00d4ff] transition-colors duration-300 mb-6 tracking-wide"
            >
              ← Home
            </Link>
            <p className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase mb-3">
              About
            </p>
            <h1 className="text-3xl md:text-5xl font-extralight text-[#e8e8e8] tracking-tight">
              The Architect Behind the Systems.
            </h1>
          </motion.div>

          {/* ══════════════════════════════════════════
               BENTO WALL GRID
          ══════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

            {/* ── [1] INTRO — lg:col-span-2 ── */}
            <Card
              className="lg:col-span-2 p-8 min-h-[260px]"
              delay={0}
              glow
            >
              {/* Blueprint grid bg */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,212,255,0.6) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,212,255,0.6) 1px, transparent 1px)
                  `,
                  backgroundSize: "32px 32px",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <p className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase mb-4">
                    Who I Am
                  </p>
                  <h2 className="text-2xl md:text-3xl font-extralight text-[#e8e8e8] mb-4 leading-snug">
                    Abdullahi N. Buhmean
                  </h2>
                  <p className="text-[#666666] leading-relaxed max-w-xl mb-3">
                    A Software Engineer, Systems Architect, AI Builder,
                    and Founder developing scalable digital infrastructure in recruitment, real
                    estate, and emerging African markets.
                  </p>
                  <p className="text-[#666666] leading-relaxed max-w-xl mb-3">
                    Technology leader based in Liberia building intelligent systems, digital
                    marketplaces, and scalable tech platforms as a Software Engineer, AI
                    Builder, and Founder.
                  </p>
                  <p className="text-[#666666] leading-relaxed max-w-xl">
                    I engineer systems that scale. With over half a decade building production
                    infrastructure, from fintech backends to AI pipelines, I architect
                    technology that performs under pressure and grows with the business. My
                    work sits at the intersection of engineering rigour and product thinking.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  {["Software Engineer", "Systems Architect", "AI Builder", "Founder"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs border border-[#1a1a1a] text-[#666666] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* ── [2] STATUS ── */}
            <Card className="p-8 min-h-[260px]" delay={0.08}>
              <p className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-6">
                Current Status
              </p>
              <div className="flex items-center gap-2 mb-5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00d4ff]" />
                </span>
                <span className="text-[#e8e8e8] text-sm font-light">
                  Available for opportunities
                </span>
              </div>
              <div className="space-y-2 mb-6">
                {["Technical Co-Founder", "CTO Advisory", "Consulting"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-[#00d4ff] text-xs">◈</span>
                    <span className="text-[#666666] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#1a1a1a] pt-5 mt-auto">
                <p className="font-mono text-xs text-[#333333] tracking-wide">
                  Based in Nigeria · Available Globally
                </p>
                <p className="font-mono text-xs text-[#333333] mt-1">
                  Timezone: WAT (UTC+1)
                </p>
              </div>
            </Card>

            {/* ── [3-5] STATS ── */}
            {stats.map((s, i) => (
              <Card key={s.label} className="p-8" delay={0.12 + i * 0.07}>
                <p className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-3">
                  {s.label}
                </p>
                <p className="text-5xl font-extralight text-[#e8e8e8] mb-1">
                  {s.value}
                </p>
                <p className="font-mono text-xs text-[#333333]">{s.sub}</p>
              </Card>
            ))}

            {/* ── [6] PHILOSOPHY — lg:col-span-2 ── */}
            <Card className="lg:col-span-2 p-8" delay={0.2} glow>
              <p className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-6">
                Philosophy
              </p>
              <blockquote className="text-xl md:text-2xl font-extralight text-[#e8e8e8] leading-relaxed mb-5 border-l-2 border-[#00d4ff]/40 pl-5">
                "Systems fail in interesting ways. My job is to understand how — and build so they don't."
              </blockquote>
              <p className="text-[#666666] leading-relaxed">
                Every service boundary, every data model, every deployment decision reflects
                a philosophy: engineering is product thinking at the infrastructure level.
                I don't separate the two.
              </p>
            </Card>

            {/* ── [7] CURRENT FOCUS ── */}
            <Card className="p-8" delay={0.22}>
              <p className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-6">
                Currently Building
              </p>
              <p className="text-[#e8e8e8] font-light leading-relaxed mb-4">
                AI-powered products for emerging market operators — turning complex
                workflows into intelligent systems that scale without breaking the bank.
              </p>
              <div className="flex flex-wrap gap-2">
                {["LLM pipelines", "Multi-tenant SaaS", "Edge infra"].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-[#00d4ff] bg-[#00d4ff]/8 border border-[#00d4ff]/20 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>

            {/* ── [8] TIMELINE — lg:col-span-2 ── */}
            <Card className="lg:col-span-2 p-8" delay={0.25}>
              <p className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-7">
                Journey
              </p>
              <ol className="space-y-0">
                {timeline.map((item, i) => (
                  <li key={item.year} className="flex gap-5 group">
                    {/* Year + connector */}
                    <div className="flex flex-col items-center gap-0">
                      <span className="font-mono text-xs text-[#00d4ff] w-10 pt-0.5 flex-shrink-0">
                        {item.year}
                      </span>
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-[#1a1a1a] mt-2 mb-2 min-h-[28px]" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-6">
                      <p className="text-[#e8e8e8] font-light text-sm mb-1">
                        {item.title}
                      </p>
                      <p className="font-mono text-xs text-[#666666]">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Card>

            {/* ── [9] OPEN TO ── */}
            <Card className="p-8" delay={0.28}>
              <p className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-6">
                Open To
              </p>
              <ul className="space-y-3">
                {openTo.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#00d4ff] text-xs mt-0.5 flex-shrink-0">→</span>
                    <span className="text-[#e8e8e8] font-light text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* ── [10] CORE VALUES — lg:col-span-2 ── */}
            <Card className="lg:col-span-2 p-8" delay={0.32}>
              <p className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-7">
                Core Values
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="border border-[#1a1a1a] rounded-xl p-5 hover:border-[#00d4ff]/20 transition-colors duration-400"
                  >
                    <p className="text-[#e8e8e8] font-light mb-2">{v.title}</p>
                    <p className="text-[#666666] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* ── [11] CTA ── */}
            <Card className="p-8 flex flex-col justify-between" delay={0.36} glow>
              <div>
                <p className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-6">
                  Get In Touch
                </p>
                <p className="text-[#e8e8e8] font-light leading-relaxed mb-6">
                  Building something ambitious? I'd like to hear about it.
                </p>
              </div>
              <div className="space-y-3">
                <Link
                  href="/#vision"
                  className="block w-full text-center bg-[#00d4ff] text-[#080808] font-mono text-xs tracking-widest uppercase py-3.5 rounded-lg hover:bg-[#00d4ff]/90 transition-colors duration-300"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/"
                  className="block w-full text-center border border-[#1a1a1a] text-[#666666] font-mono text-xs tracking-widest uppercase py-3.5 rounded-lg hover:border-[#00d4ff]/30 hover:text-[#e8e8e8] transition-all duration-300"
                >
                  View Work
                </Link>
              </div>
            </Card>

          </div>
          {/* end bento grid */}
        </div>
      </main>

      <Footer />
    </>
  );
}
