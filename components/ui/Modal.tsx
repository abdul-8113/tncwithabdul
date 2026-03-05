"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function Modal({ project, onClose }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-8 pointer-events-none"
          >
            <div
              className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-8 max-w-2xl w-full pointer-events-auto max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h2 className="text-2xl font-light text-[#e8e8e8] mt-1">
                    {project.name}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-[#666666] hover:text-[#e8e8e8] transition-colors p-2"
                  aria-label="Close modal"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M15 5L5 15M5 5l10 10" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-xs text-[#666666] uppercase tracking-widest mb-2">
                    Problem
                  </h3>
                  <p className="text-[#e8e8e8]/80 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-[#666666] uppercase tracking-widest mb-2">
                    Architecture
                  </h3>
                  <p className="text-[#e8e8e8]/80 leading-relaxed">
                    {project.architecture}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-[#666666] uppercase tracking-widest mb-2">
                    Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-[#666666] uppercase tracking-widest mb-2">
                    Scalability
                  </h3>
                  <p className="text-[#e8e8e8]/80 leading-relaxed">
                    {project.scalability}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
