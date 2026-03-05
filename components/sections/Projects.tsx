"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Modal from "@/components/ui/Modal";
import { projects } from "@/data/projects";
import { Project } from "@/types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-55%"]);

  return (
    <>
      <section
        id="projects"
        ref={containerRef}
        className="snap-section flex items-center bg-[#080808] overflow-hidden"
      >
        <div className="w-full px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-4"
          >
            Systems Built
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extralight text-[#e8e8e8] mb-12"
          >
            Projects
          </motion.h2>

          <div className="overflow-hidden">
            <motion.div style={{ x }} className="flex gap-6 w-max">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedProject(project)}
                  className="w-80 md:w-96 flex-shrink-0 border border-[#1a1a1a] rounded-xl p-6 cursor-pointer hover:border-[#00d4ff]/30 hover:bg-[#0f0f0f] transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase">
                      {project.category}
                    </span>
                    <span className="text-[#666666] group-hover:text-[#e8e8e8] transition-colors">
                      →
                    </span>
                  </div>

                  <h3 className="text-xl font-light text-[#e8e8e8] mb-3 group-hover:text-[#00d4ff] transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="text-[#666666] text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.problem}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-[#666666] border border-[#1a1a1a] px-2 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="font-mono text-xs text-[#666666]">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <p className="font-mono text-xs text-[#666666] mt-8 text-center">
            Click any project to view full breakdown
          </p>
        </div>
      </section>

      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
