"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TerminalWindow from "@/components/ui/TerminalWindow";

const roles = [
  "Software Engineer",
  "Systems Architect",
  "AI Builder",
  "Founder",
];

export default function Identity() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section
      id="identity"
      className="snap-section flex items-center bg-[#080808]"
    >
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Animated terminal window */}
        <TerminalWindow />

        {/* Right: Animated identity text */}
        <div ref={ref} className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-8"
          >
            Identity
          </motion.p>

          {roles.map((role, index) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#e8e8e8] tracking-tight hover:text-[#00d4ff] transition-colors duration-300 cursor-default">
                {role}
              </h2>
              {index < roles.length - 1 && (
                <div className="mt-3 h-px w-full bg-[#1a1a1a]" />
              )}
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-[#666666] font-light leading-relaxed mt-8 max-w-sm"
          >
            Building scalable systems at the intersection of engineering
            precision and product thinking.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
