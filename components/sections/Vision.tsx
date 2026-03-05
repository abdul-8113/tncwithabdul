"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ui/ContactForm";

export default function Vision() {
  return (
    <section
      id="vision"
      className="snap-section flex items-center bg-[#0f0f0f] relative overflow-hidden"
    >
      {/* Animated radial gradient background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, #00d4ff 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, #0066ff 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Vision text */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-8"
          >
            Vision
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extralight text-[#e8e8e8] leading-relaxed mb-8"
          >
            Building scalable digital infrastructure for emerging markets and
            global innovation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-light text-[#00d4ff] mb-12"
          >
            Let&apos;s Build Something That Lasts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="font-mono text-xs text-[#666666] hover:text-[#00d4ff] transition-colors duration-300 tracking-wide"
                aria-label={platform}
              >
                {platform}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Contact form */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-6"
          >
            Get In Touch
          </motion.p>
          <ContactForm />
        </div>
      </div>

    </section>
  );
}
