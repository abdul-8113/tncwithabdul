"use client";

import { motion } from "framer-motion";

// ─── Syntax-highlighted code shown on the laptop screen ─────────────────────

type Token = { t: string; c: string };

const CODE_LINES: Token[][] = [
  [{ t: "import", c: "#c792ea" }, { t: " { SystemCore } ", c: "#cdd3de" }, { t: "from", c: "#c792ea" }, { t: ' "./engine"', c: "#c3e88d" }, { t: ";", c: "#89ddff" }],
  [{ t: "import", c: "#c792ea" }, { t: " { deploy, scale } ", c: "#cdd3de" }, { t: "from", c: "#c792ea" }, { t: ' "./infra"', c: "#c3e88d" }, { t: ";", c: "#89ddff" }],
  [{ t: "", c: "" }],
  [{ t: "interface ", c: "#c792ea" }, { t: "System", c: "#ffcb6b" }, { t: " {", c: "#cdd3de" }],
  [{ t: "  services", c: "#cdd3de" }, { t: ": ", c: "#89ddff" }, { t: "Service", c: "#82aaff" }, { t: "[];", c: "#cdd3de" }],
  [{ t: "  regions", c: "#cdd3de" }, { t: ":  ", c: "#89ddff" }, { t: "string", c: "#ffcb6b" }, { t: "[];", c: "#cdd3de" }],
  [{ t: "  replicas", c: "#cdd3de" }, { t: ": ", c: "#89ddff" }, { t: "number", c: "#ffcb6b" }, { t: ";", c: "#cdd3de" }],
  [{ t: "}", c: "#cdd3de" }],
  [{ t: "", c: "" }],
  [{ t: "class ", c: "#c792ea" }, { t: "ProductionPipeline", c: "#82aaff" }, { t: " {", c: "#cdd3de" }],
  [{ t: "  private ", c: "#c792ea" }, { t: "core", c: "#cdd3de" }, { t: ": ", c: "#89ddff" }, { t: "SystemCore", c: "#82aaff" }, { t: ";", c: "#cdd3de" }],
  [{ t: "", c: "" }],
  [{ t: "  ", c: "#cdd3de" }, { t: "constructor", c: "#82aaff" }, { t: "(", c: "#89ddff" }, { t: "config", c: "#ffcb6b" }, { t: ": ", c: "#89ddff" }, { t: "System", c: "#82aaff" }, { t: ") {", c: "#cdd3de" }],
  [{ t: "    this", c: "#ffcb6b" }, { t: ".core = ", c: "#cdd3de" }, { t: "new ", c: "#c792ea" }, { t: "SystemCore", c: "#82aaff" }, { t: "(", c: "#89ddff" }, { t: "config", c: "#ffcb6b" }, { t: ");", c: "#cdd3de" }],
  [{ t: "  }", c: "#cdd3de" }],
  [{ t: "", c: "" }],
  [{ t: "  async ", c: "#c792ea" }, { t: "launch", c: "#82aaff" }, { t: "(): ", c: "#89ddff" }, { t: "Promise", c: "#82aaff" }, { t: "<void>", c: "#ffcb6b" }, { t: " {", c: "#cdd3de" }],
  [{ t: "    const ", c: "#c792ea" }, { t: "p ", c: "#cdd3de" }, { t: "= await ", c: "#c792ea" }, { t: "this", c: "#ffcb6b" }, { t: ".core", c: "#cdd3de" }],
  [{ t: "      .compile()", c: "#82aaff" }],
  [{ t: "      .optimize()", c: "#82aaff" }],
  [{ t: "      .deploy({ env: ", c: "#82aaff" }, { t: '"production"', c: "#c3e88d" }, { t: " });", c: "#cdd3de" }],
  [{ t: "    await ", c: "#c792ea" }, { t: "scale", c: "#82aaff" }, { t: "(p, { min: ", c: "#cdd3de" }, { t: "3", c: "#f78c6c" }, { t: ", max: ", c: "#cdd3de" }, { t: "50", c: "#f78c6c" }, { t: " });", c: "#cdd3de" }],
  [{ t: "  }", c: "#cdd3de" }],
  [{ t: "}", c: "#cdd3de" }],
];

// [count, keyWidth, yOffset from key area top]
const KEY_ROWS: [number, number, number][] = [
  [14, 27, 0],
  [13, 31, 21],
  [12, 33, 42],
];
const K_GAP = 3;
const K_H   = 15;

// ─── Component ───────────────────────────────────────────────────────────────

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="snap-section flex items-center justify-center bg-[#0f0f0f] relative overflow-hidden"
    >
      {/* ── Laptop SVG ── */}
      <svg
        viewBox="0 0 1200 760"
        className="absolute inset-0 w-full h-full opacity-[0.13]"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#00d4ff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0"    />
          </radialGradient>
          <linearGradient id="sheen" x1="0" y1="0" x2="0.25" y2="1">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0"    />
          </linearGradient>
        </defs>

        {/* ── Screen lid ── */}
        {/* Outer casing */}
        <rect x="248" y="18"  width="704" height="448" rx="14"
          fill="rgba(0,212,255,0.015)" stroke="#00d4ff" strokeWidth="0.9" />
        {/* Glow behind glass */}
        <rect x="268" y="38"  width="664" height="408" rx="6"
          fill="url(#screenGlow)" />
        {/* Display glass */}
        <rect x="268" y="38"  width="664" height="408" rx="6"
          fill="rgba(0,8,18,0.72)" stroke="#00d4ff" strokeWidth="0.5" />
        {/* Screen sheen */}
        <rect x="268" y="38"  width="664" height="408" rx="6"
          fill="url(#sheen)" />

        {/* Camera */}
        <circle cx="600" cy="30" r="4.5" fill="none" stroke="#00d4ff" strokeWidth="0.7" />
        <circle cx="600" cy="30" r="1.8" fill="#00d4ff" opacity="0.9" />

        {/* ── Editor chrome ── */}
        <rect x="268" y="38" width="664" height="24"
          fill="rgba(0,212,255,0.05)" />
        {/* Traffic lights */}
        {[286, 302, 318].map((cx) => (
          <circle key={cx} cx={cx} cy="50" r="5"
            fill="none" stroke="#00d4ff" strokeWidth="0.5" opacity="0.6" />
        ))}
        {/* Active tab */}
        <rect x="340" y="38" width="110" height="24"
          fill="rgba(0,212,255,0.09)" />
        <text x="350" y="54" fill="#00d4ff" fontSize="8" fontFamily="monospace" opacity="0.85">
          system.ts
        </text>
        {/* Inactive tab */}
        <text x="464" y="54" fill="#00d4ff" fontSize="8" fontFamily="monospace" opacity="0.3">
          infra.ts
        </text>

        {/* Line number gutter */}
        <rect x="268" y="62" width="32" height="360" fill="rgba(0,0,0,0.22)" />

        {/* ── Code lines ── */}
        {CODE_LINES.map((line, lineIdx) => {
          const y = 76 + lineIdx * 20;
          if (y > 418) return null;

          // Pre-compute x positions for each token
          const tokensWithX: Array<Token & { x: number }> = [];
          let xPos = 308;
          for (const tok of line) {
            tokensWithX.push({ ...tok, x: xPos });
            xPos += tok.t.length * 5.05;
          }

          return (
            <g key={lineIdx}>
              <text
                x="284" y={y}
                fill="#00d4ff" fontSize="7" fontFamily="monospace"
                opacity="0.28" textAnchor="middle"
              >
                {lineIdx + 1}
              </text>
              {tokensWithX.map((tok, i) =>
                tok.t ? (
                  <text key={i} x={tok.x} y={y}
                    fill={tok.c} fontSize="8.5"
                    fontFamily="monospace" opacity="0.9"
                  >
                    {tok.t}
                  </text>
                ) : null
              )}
            </g>
          );
        })}

        {/* Blinking cursor */}
        <rect x="308" y="406" width="5.5" height="12" rx="0.5"
          fill="#00d4ff" opacity="0.8" />

        {/* Status bar */}
        <rect x="268" y="422" width="664" height="24"
          fill="rgba(0,212,255,0.05)" />
        <text x="282" y="438" fill="#00d4ff" fontSize="7" fontFamily="monospace" opacity="0.4">
          TypeScript  ·  Ln 24  ·  ● main  ·  ✓ 0 errors
        </text>

        {/* ── Hinge ── */}
        <rect x="544" y="464" width="112" height="8" rx="3"
          fill="none" stroke="#00d4ff" strokeWidth="0.7" />
        <line x1="578" y1="464" x2="578" y2="472" stroke="#00d4ff" strokeWidth="0.4" opacity="0.5" />
        <line x1="622" y1="464" x2="622" y2="472" stroke="#00d4ff" strokeWidth="0.4" opacity="0.5" />

        {/* ── Base ── */}
        <rect x="206" y="470" width="788" height="114" rx="12"
          fill="rgba(0,212,255,0.01)" stroke="#00d4ff" strokeWidth="0.9" />

        {/* Keyboard keys */}
        {KEY_ROWS.flatMap(([count, kw, yOff]) => {
          const totalW = count * kw + (count - 1) * K_GAP;
          const startX  = 600 - totalW / 2;
          return Array.from({ length: count }, (_, ki) => (
            <rect
              key={`${yOff}-${ki}`}
              x={startX + ki * (kw + K_GAP)}
              y={482 + yOff}
              width={kw}
              height={K_H}
              rx="2.5"
              fill="rgba(0,212,255,0.03)"
              stroke="#00d4ff"
              strokeWidth="0.45"
              opacity="0.7"
            />
          ));
        })}

        {/* Spacebar */}
        <rect x="424" y={482 + 63} width="352" height={K_H} rx="2.5"
          fill="rgba(0,212,255,0.03)" stroke="#00d4ff" strokeWidth="0.45" opacity="0.7" />

        {/* Trackpad */}
        <rect x="476" y="554" width="248" height="22" rx="5"
          fill="rgba(0,212,255,0.02)" stroke="#00d4ff" strokeWidth="0.55" />

        {/* ── Floating system nodes (left) ── */}
        <circle cx="96"  cy="178" r="3.5" fill="#00d4ff" opacity="0.5" />
        <circle cx="58"  cy="312" r="2.5" fill="#00d4ff" opacity="0.38" />
        <circle cx="116" cy="432" r="3"   fill="#00d4ff" opacity="0.42" />
        <line x1="96"  y1="178" x2="248" y2="218" stroke="#00d4ff" strokeWidth="0.4" opacity="0.28" strokeDasharray="5 7" />
        <line x1="58"  y1="312" x2="248" y2="312" stroke="#00d4ff" strokeWidth="0.35" opacity="0.22" strokeDasharray="5 7" />
        <line x1="116" y1="432" x2="248" y2="400" stroke="#00d4ff" strokeWidth="0.4" opacity="0.26" strokeDasharray="5 7" />
        <text x="73"  y="175" fill="#00d4ff" fontSize="6" fontFamily="monospace" opacity="0.35">api</text>
        <text x="34"  y="309" fill="#00d4ff" fontSize="6" fontFamily="monospace" opacity="0.3">db</text>
        <text x="92"  y="429" fill="#00d4ff" fontSize="6" fontFamily="monospace" opacity="0.33">cdn</text>

        {/* ── Floating system nodes (right) ── */}
        <circle cx="1104" cy="162" r="3.5" fill="#00d4ff" opacity="0.5" />
        <circle cx="1142" cy="302" r="2.5" fill="#00d4ff" opacity="0.38" />
        <circle cx="1082" cy="442" r="3"   fill="#00d4ff" opacity="0.42" />
        <line x1="1104" y1="162" x2="952" y2="200" stroke="#00d4ff" strokeWidth="0.4" opacity="0.28" strokeDasharray="5 7" />
        <line x1="1142" y1="302" x2="952" y2="302" stroke="#00d4ff" strokeWidth="0.35" opacity="0.22" strokeDasharray="5 7" />
        <line x1="1082" y1="442" x2="952" y2="402" stroke="#00d4ff" strokeWidth="0.4" opacity="0.26" strokeDasharray="5 7" />
        <text x="1110" y="159" fill="#00d4ff" fontSize="6" fontFamily="monospace" opacity="0.35">auth</text>
        <text x="1148" y="299" fill="#00d4ff" fontSize="6" fontFamily="monospace" opacity="0.3">queue</text>
        <text x="1088" y="439" fill="#00d4ff" fontSize="6" fontFamily="monospace" opacity="0.33">cache</text>
      </svg>

      {/* ── Radial vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 52% at 50% 50%, transparent 0%, rgba(15,15,15,0.42) 48%, rgba(15,15,15,0.92) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Text overlay ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-12"
        >
          Engineering Philosophy
        </motion.p>

        <div className="space-y-3">
          {["I don't build features.", "I build systems."].map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-extralight text-[#e8e8e8] leading-tight drop-shadow-[0_0_60px_rgba(0,212,255,0.10)]"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent"
        />
      </div>
    </section>
  );
}
