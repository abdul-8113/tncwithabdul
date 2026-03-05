"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

type Token = { text: string; color: string };

const codeLines: Token[][] = [
  [{ text: "class ", color: "#c792ea" }, { text: "SystemArchitect", color: "#82aaff" }, { text: " {", color: "#e8e8e8" }],
  [{ text: "  private ", color: "#c792ea" }, { text: "stack", color: "#e8e8e8" }, { text: ": ", color: "#666666" }, { text: "string", color: "#ffcb6b" }, { text: "[] = [", color: "#e8e8e8" }],
  [{ text: '    "Node.js"', color: "#c3e88d" }, { text: ",", color: "#e8e8e8" }],
  [{ text: '    "FastAPI"', color: "#c3e88d" }, { text: ",", color: "#e8e8e8" }],
  [{ text: '    "PostgreSQL"', color: "#c3e88d" }, { text: ",", color: "#e8e8e8" }],
  [{ text: "  ];", color: "#e8e8e8" }],
  [{ text: "", color: "" }],
  [{ text: "  async ", color: "#c792ea" }, { text: "build", color: "#82aaff" }, { text: "(", color: "#e8e8e8" }, { text: "target", color: "#ffcb6b" }, { text: ": System) {", color: "#e8e8e8" }],
  [{ text: "    const ", color: "#c792ea" }, { text: "pipeline", color: "#e8e8e8" }, { text: " = await ", color: "#c792ea" }, { text: "this", color: "#ffcb6b" }],
  [{ text: "      .optimize(", color: "#82aaff" }, { text: "target", color: "#ffcb6b" }, { text: ")", color: "#e8e8e8" }],
  [{ text: '      .deploy({ env: "', color: "#82aaff" }, { text: "production", color: "#c3e88d" }, { text: '" });', color: "#e8e8e8" }],
  [{ text: "    return ", color: "#c792ea" }, { text: "pipeline", color: "#e8e8e8" }, { text: ".status;", color: "#666666" }],
  [{ text: "  }", color: "#e8e8e8" }],
  [{ text: "}", color: "#e8e8e8" }],
];

const terminalLines = [
  { prefix: "$", prefixColor: "#666666", text: " tsc --build system.ts", color: "#e8e8e8" },
  { prefix: "✓", prefixColor: "#c3e88d", text: " compiled 14 modules", color: "#c3e88d" },
  { prefix: "$", prefixColor: "#666666", text: " npm run deploy", color: "#e8e8e8" },
  { prefix: "→", prefixColor: "#ffcb6b", text: " optimizing bundle...", color: "#666666" },
  { prefix: "✓", prefixColor: "#c3e88d", text: " bundle: 38kb gzipped", color: "#c3e88d" },
  { prefix: "→", prefixColor: "#ffcb6b", text: " deploying to 3 regions...", color: "#666666" },
  { prefix: "✓", prefixColor: "#c3e88d", text: " edge network online", color: "#c3e88d" },
  { prefix: "●", prefixColor: "#00d4ff", text: " system ready", color: "#00d4ff" },
];

export default function TerminalWindow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [visibleCode, setVisibleCode] = useState(0);
  const [visibleTerminal, setVisibleTerminal] = useState(0);
  const [phase, setPhase] = useState<"idle" | "code" | "terminal" | "done">("idle");

  useEffect(() => {
    if (!isInView || phase !== "idle") return;
    setPhase("code");
  }, [isInView, phase]);

  useEffect(() => {
    if (phase !== "code") return;

    if (visibleCode >= codeLines.length) {
      // short pause then start terminal
      const t = setTimeout(() => setPhase("terminal"), 400);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setVisibleCode((n) => n + 1);
    }, 70);
    return () => clearTimeout(t);
  }, [phase, visibleCode]);

  useEffect(() => {
    if (phase !== "terminal") return;

    if (visibleTerminal >= terminalLines.length) {
      setPhase("done");
      return;
    }

    const t = setTimeout(() => {
      setVisibleTerminal((n) => n + 1);
    }, 160);
    return () => clearTimeout(t);
  }, [phase, visibleTerminal]);

  const showCodeCursor = phase === "code";
  const showTermCursor = phase === "terminal" || phase === "done";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Decorative corner brackets */}
      <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-[#00d4ff]/40 z-10" />
      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-[#00d4ff]/40 z-10" />

      <div className="rounded-2xl overflow-hidden border border-[#1a1a1a] bg-[#0d0d0d]">

        {/* ── Code editor panel ── */}
        <div className="border-b border-[#1a1a1a]">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#111111]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-[#666666]">
              system.ts
            </span>
          </div>

          {/* Code lines */}
          <div className="p-4 font-mono text-xs leading-6 min-h-[220px]">
            {codeLines.slice(0, visibleCode).map((tokens, lineIdx) => (
              <div key={lineIdx} className="flex items-center">
                {/* Line number */}
                <span className="w-6 mr-4 text-right text-[#333333] select-none flex-shrink-0">
                  {lineIdx + 1}
                </span>
                <span>
                  {tokens.map((tok, i) => (
                    <span key={i} style={{ color: tok.color }}>
                      {tok.text}
                    </span>
                  ))}
                  {/* blinking cursor on last visible code line */}
                  {showCodeCursor && lineIdx === visibleCode - 1 && (
                    <Cursor />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Terminal panel ── */}
        <div>
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#111111] border-b border-[#1a1a1a]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]/60" />
            <span className="font-mono text-xs text-[#666666]">terminal</span>
          </div>

          {/* Terminal output */}
          <div className="p-4 font-mono text-xs leading-6 min-h-[120px]">
            {terminalLines.slice(0, visibleTerminal).map((line, i) => (
              <div key={i} className="flex items-baseline gap-1">
                <span
                  className="flex-shrink-0 font-bold"
                  style={{ color: line.prefixColor }}
                >
                  {line.prefix}
                </span>
                <span style={{ color: line.color }}>{line.text}</span>
                {/* blinking cursor on last visible terminal line */}
                {showTermCursor && i === visibleTerminal - 1 && (
                  <Cursor />
                )}
              </div>
            ))}

            {/* Idle prompt when done */}
            {phase === "done" && (
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[#666666]">$</span>
                <Cursor />
              </div>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

function Cursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
      className="inline-block w-1.5 h-3.5 bg-[#00d4ff] align-middle ml-0.5"
    />
  );
}
