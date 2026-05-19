"use client";

import { motion } from "motion/react";

export function FuturisticBg() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#05060f]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1b0b3a_0%,_transparent_55%),radial-gradient(ellipse_at_bottom_right,_#0a2a5e_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_left,_#3a0a4a_0%,_transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,180,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(120,180,255,0.25) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <motion.div
        className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-red-600/30 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-400/25 blur-3xl"
        animate={{ x: [0, -70, 0], y: [0, -50, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-indigo-500/25 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}
