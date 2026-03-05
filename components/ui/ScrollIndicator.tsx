"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="font-mono text-xs text-[#666666] tracking-widest uppercase">
        Scroll
      </span>
      <div className="w-px h-12 bg-gradient-to-b from-[#666666] to-transparent relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 h-4 bg-[#00d4ff]"
          animate={{ y: [0, 48] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
}
