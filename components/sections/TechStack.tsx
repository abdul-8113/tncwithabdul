"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStack } from "@/data/tech-stack";

interface TooltipState {
  id: string;
  text: string;
  x: number;
  y: number;
}

export default function TechStack() {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  return (
    <section
      id="tech-stack"
      className="snap-section flex items-center bg-[#080808]"
    >
      <div className="max-w-7xl mx-auto px-8 w-full">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-4"
        >
          Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extralight text-[#e8e8e8] mb-12"
        >
          Technology Stack
        </motion.h2>

        <div className="space-y-10">
          {techStack.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase mb-4">
                {category.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.button
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + techIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setTooltip({
                        id: `${category.category}-${tech.name}`,
                        text: tech.description,
                        x: rect.left + rect.width / 2,
                        y: rect.top - 8,
                      });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                    className="font-mono text-sm border border-[#1a1a1a] rounded-lg px-4 py-2 text-[#e8e8e8]/80 hover:text-[#e8e8e8] hover:border-[#00d4ff]/30 transition-all duration-300 bg-[#0f0f0f]"
                  >
                    {tech.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {tooltip && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              className="fixed z-50 bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-3 py-2 text-xs font-mono text-[#666666] pointer-events-none -translate-x-1/2 -translate-y-full max-w-48 text-center"
              style={{ left: tooltip.x, top: tooltip.y }}
            >
              {tooltip.text}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
