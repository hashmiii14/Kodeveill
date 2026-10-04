import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Animated Counter Hook ─── */
const useCounter = (end, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const step = end / (duration / 16);
      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [end, duration, delay]);
  return count;
};

/* ─── Code Lines (typing effect) ─── */
const CODE_LINES = [
  { indent: 0, tokens: [{ text: "import", color: "#C792EA" }, { text: " { deploy } ", color: "#EEFFFF" }, { text: "from", color: "#C792EA" }, { text: " '@kodeveil/engine'", color: "#C3E88D" }] },
  { indent: 0, tokens: [{ text: "import", color: "#C792EA" }, { text: " { analytics } ", color: "#EEFFFF" }, { text: "from", color: "#C792EA" }, { text: " '@kodeveil/metrics'", color: "#C3E88D" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ text: "const", color: "#C792EA" }, { text: " config ", color: "#82AAFF" }, { text: "= ", color: "#89DDFF" }, { text: "{", color: "#EEFFFF" }] },
  { indent: 1, tokens: [{ text: "framework", color: "#F78C6C" }, { text: ": ", color: "#89DDFF" }, { text: "'next.js'", color: "#C3E88D" }, { text: ",", color: "#EEFFFF" }] },
  { indent: 1, tokens: [{ text: "performance", color: "#F78C6C" }, { text: ": ", color: "#89DDFF" }, { text: "'optimized'", color: "#C3E88D" }, { text: ",", color: "#EEFFFF" }] },
  { indent: 1, tokens: [{ text: "seo", color: "#F78C6C" }, { text: ": ", color: "#89DDFF" }, { text: "true", color: "#FF5370" }, { text: ",", color: "#EEFFFF" }] },
  { indent: 0, tokens: [{ text: "}", color: "#EEFFFF" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ text: "await", color: "#C792EA" }, { text: " deploy", color: "#82AAFF" }, { text: "(", color: "#EEFFFF" }, { text: "config", color: "#82AAFF" }, { text: ")", color: "#EEFFFF" }] },
  { indent: 0, tokens: [{ text: "// ✓ Deployed successfully", color: "#546E7A" }] },
];

const TypingCode = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= CODE_LINES.length) return 0;
        return prev + 1;
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[10px] sm:text-xs leading-relaxed select-none">
      {CODE_LINES.slice(0, visibleLines).map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center"
          style={{ paddingLeft: line.indent * 16 }}
        >
          <span className="w-6 text-right mr-3 text-zinc-600 select-none">{i + 1}</span>
          {line.tokens.length === 0 ? (
            <span>&nbsp;</span>
          ) : (
            line.tokens.map((token, j) => (
              <span key={j} style={{ color: token.color }}>{token.text}</span>
            ))
          )}
          {i === visibleLines - 1 && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="inline-block w-[6px] h-4 bg-slate-300 ml-0.5"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

/* ─── Mini Bar Chart ─── */
const BarChart = () => {
  const bars = [40, 65, 55, 80, 70, 90, 75, 85, 60, 95, 88, 72];
  return (
    <div className="flex items-end gap-[3px] h-16">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ delay: 0.8 + i * 0.08, duration: 0.5, ease: "easeOut" }}
          className="flex-1 rounded-sm bg-gradient-to-t from-slate-500 to-slate-300 dark:from-slate-400 dark:to-slate-200 min-w-[4px]"
        />
      ))}
    </div>
  );
};

/* ─── Activity Dots ─── */
const ActivityGrid = () => {
  const weeks = 12;
  const days = 7;
  return (
    <div className="flex gap-[2px]">
      {Array.from({ length: weeks }).map((_, w) => (
        <div key={w} className="flex flex-col gap-[2px]">
          {Array.from({ length: days }).map((_, d) => {
            const intensity = Math.random();
            const opacity = intensity < 0.2 ? 0.1 : intensity < 0.4 ? 0.25 : intensity < 0.7 ? 0.5 : 0.9;
            return (
              <motion.div
                key={d}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + (w * days + d) * 0.005 }}
                className="h-[6px] w-[6px] rounded-[1px]"
                style={{ background: `rgba(148,163,184,${opacity})` }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

/* ─── Deployment Status List ─── */
const DEPLOYMENTS = [
  { name: "oakmora.com", status: "live", time: "2m ago" },
  { name: "oudarabia.in", status: "building", time: "just now" },
  { name: "vyuindustries.com", status: "live", time: "1h ago" },
];

const DeploymentList = () => (
  <div className="space-y-2">
    {DEPLOYMENTS.map((d, i) => (
      <motion.div
        key={d.name}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 + i * 0.2, duration: 0.3 }}
        className="flex items-center justify-between rounded-lg bg-zinc-800/50 px-3 py-2"
      >
        <div className="flex items-center gap-2.5">
          <div className={`h-2 w-2 rounded-full ${d.status === "live" ? "bg-emerald-400" : "bg-amber-400 animate-pulse"}`} />
          <span className="text-[11px] font-medium text-zinc-200">{d.name}</span>
        </div>
        <span className="text-[10px] text-zinc-500">{d.time}</span>
      </motion.div>
    ))}
  </div>
);

/* ─── Main Dashboard Component ─── */
export const HeroDashboard = () => {
  const projects = useCounter(54, 2000, 800);
  const uptime = useCounter(99, 1500, 1000);
  const speed = useCounter(98, 1800, 1200);

  return (
    <div className="w-full rounded-3xl border border-zinc-200 bg-[#1a1b23] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] dark:border-white/10 dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden select-none">
      
      {/* ─── Title Bar ─── */}
      <div className="flex items-center justify-between border-b border-white/5 bg-[#15161d] px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400/80" />
          <div className="h-3 w-3 rounded-full bg-amber-400/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-medium text-zinc-400">dashboard.kodeveil.in</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-1 w-4 rounded-full bg-zinc-700" />
          <div className="h-1 w-4 rounded-full bg-zinc-700" />
          <div className="h-1 w-4 rounded-full bg-zinc-700" />
        </div>
      </div>

      {/* ─── Dashboard Content ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        
        {/* Left Panel: Code Editor */}
        <div className="md:col-span-2 p-4 sm:p-5 border-r border-white/5">
          {/* Tab bar */}
          <div className="flex items-center gap-1 mb-4">
            <div className="rounded-md bg-white/10 px-3 py-1">
              <span className="text-[10px] font-medium text-zinc-300">deploy.config.js</span>
            </div>
            <div className="rounded-md px-3 py-1">
              <span className="text-[10px] font-medium text-zinc-600">analytics.ts</span>
            </div>
          </div>

          {/* Code area */}
          <div className="rounded-xl bg-[#0d1117] p-4 min-h-[180px] border border-white/5">
            <TypingCode />
          </div>

          {/* Terminal output */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-4 rounded-xl bg-[#0d1117] p-3 border border-white/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-medium text-zinc-600">TERMINAL</span>
            </div>
            <div className="font-mono text-[10px] space-y-1">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }} className="text-emerald-400">✓ Build completed in 2.3s</motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }} className="text-emerald-400">✓ Lighthouse score: 98/100</motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.6 }} className="text-emerald-400">✓ Deployed to production</motion.p>
            </div>
          </motion.div>

          {/* Live Network Traffic Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0 }}
            className="mt-6 pt-4 border-t border-white/5"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Live Network Traffic</span>
              <span className="text-[10px] font-mono text-emerald-400 animate-pulse">● LIVE</span>
            </div>
            <div className="h-16 flex items-end gap-1 overflow-hidden">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: ["20%", "80%", "40%", "100%", "30%", "60%", "20%"],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                  className="w-full bg-indigo-500/20 rounded-t-sm"
                  style={{ minWidth: '4px' }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Panel: Metrics */}
        <div className="p-4 sm:p-5 space-y-5">
          
          {/* Metric Cards */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="rounded-xl bg-white/5 p-3.5 border border-white/5"
            >
              <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Projects Delivered</p>
              <p className="mt-1 text-2xl font-bold text-white tabular-nums">{projects}+</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="rounded-xl bg-white/5 p-3.5 border border-white/5"
            >
              <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Uptime SLA</p>
              <p className="mt-1 text-2xl font-bold text-white tabular-nums">{uptime}.9%</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="rounded-xl bg-white/5 p-3.5 border border-white/5"
            >
              <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">PageSpeed Score</p>
              <p className="mt-1 text-2xl font-bold text-white tabular-nums">{speed}</p>
              <div className="mt-2"><BarChart /></div>
            </motion.div>
          </div>

          {/* Deployments */}
          <div>
            <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-2">Live Deployments</p>
            <DeploymentList />
          </div>

          {/* Activity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-2">Commit Activity</p>
            <ActivityGrid />
          </motion.div>
        </div>
      </div>

      {/* ─── Bottom Status Bar ─── */}
      <div className="flex items-center justify-between border-t border-white/5 bg-[#15161d] px-5 py-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] text-zinc-500">All systems operational</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-zinc-600">v3.2.1</span>
          <span className="text-[10px] text-zinc-600">React 18</span>
          <span className="text-[10px] text-zinc-600">Next.js 14</span>
        </div>
      </div>
    </div>
  );
};
