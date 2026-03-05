"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const systemCards = [
  {
    id: "architecture",
    title: "System Architecture",
    icon: "◈",
    description:
      "Designing distributed systems that scale horizontally with clear service boundaries, event-driven patterns, and fault tolerance built in from day one.",
    tags: ["Microservices", "Event-Driven", "CQRS", "API Design"],
  },
  {
    id: "ai",
    title: "AI Automation",
    icon: "◎",
    description:
      "Integrating LLMs and AI pipelines into production systems. From prompt engineering to fine-tuning and building reliable AI-powered workflows at scale.",
    tags: ["LLM Integration", "RAG", "Pipelines", "Automation"],
  },
  {
    id: "backend",
    title: "Backend Engineering",
    icon: "◇",
    description:
      "Building high-performance APIs, database architectures, and server infrastructure. Optimized for throughput, latency, and developer experience.",
    tags: ["Node.js", "FastAPI", "PostgreSQL", "Redis"],
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    icon: "◻",
    description:
      "Architecting serverless and containerized deployments with robust CI/CD pipelines. Infrastructure as code with zero-downtime deployments.",
    tags: ["AWS", "Docker", "CI/CD", "Serverless"],
  },
];

const MiniDiagram = () => (
  <div className="w-full h-16 border border-[#1a1a1a]/50 rounded-lg mb-4 bg-[#080808]/50 flex items-center justify-center overflow-hidden">
    <svg className="w-full h-full opacity-40" viewBox="0 0 100 60" aria-hidden="true">
      <circle cx="20" cy="30" r="4" fill="rgba(0,212,255,0.8)" />
      <circle cx="50" cy="15" r="4" fill="rgba(0,212,255,0.8)" />
      <circle cx="50" cy="45" r="4" fill="rgba(0,212,255,0.8)" />
      <circle cx="80" cy="30" r="4" fill="rgba(0,212,255,0.8)" />
      <line x1="20" y1="30" x2="50" y2="15" stroke="rgba(0,212,255,0.4)" strokeWidth="0.5" />
      <line x1="20" y1="30" x2="50" y2="45" stroke="rgba(0,212,255,0.4)" strokeWidth="0.5" />
      <line x1="50" y1="15" x2="80" y2="30" stroke="rgba(0,212,255,0.4)" strokeWidth="0.5" />
      <line x1="50" y1="45" x2="80" y2="30" stroke="rgba(0,212,255,0.4)" strokeWidth="0.5" />
    </svg>
  </div>
);

export default function Systems() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section
      id="systems"
      className="snap-section flex items-center bg-[#0f0f0f]"
    >
      <div className="max-w-7xl mx-auto px-8 w-full">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-4"
        >
          Systems
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extralight text-[#e8e8e8] mb-12"
        >
          What I Build
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {systemCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`border border-[#1a1a1a] rounded-xl cursor-pointer transition-all duration-500 overflow-hidden ${
                expandedId === card.id
                  ? "bg-[#00d4ff]/5 border-[#00d4ff]/30"
                  : "bg-[#080808] hover:border-[#1a1a1a]/80 hover:bg-[#0f0f0f]"
              }`}
              onClick={() =>
                setExpandedId(expandedId === card.id ? null : card.id)
              }
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-2xl text-[#00d4ff] opacity-60">
                    {card.icon}
                  </span>
                  <motion.span
                    animate={{ rotate: expandedId === card.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#666666] text-lg"
                  >
                    +
                  </motion.span>
                </div>

                <h3 className="text-[#e8e8e8] font-light text-lg mb-2">
                  {card.title}
                </h3>

                <AnimatePresence>
                  {expandedId === card.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="text-[#666666] text-sm leading-relaxed mb-4">
                        {card.description}
                      </p>
                      <MiniDiagram />
                      <div className="flex flex-wrap gap-1">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs text-[#00d4ff]/60 border border-[#00d4ff]/20 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
