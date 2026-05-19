"use client";

import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-32 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-white/80 backdrop-blur"
      >
        <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
        <span className="tracking-[0.2em] uppercase">
          Engenharia de Software · Fullstack Developer
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontSize: "clamp(2.5rem, 7vw, 6rem)",
          lineHeight: 1.02,
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
        className="bg-gradient-to-br from-white via-red-200 to-cyan-300 bg-clip-text text-transparent"
      >
        Construindo o futuro
        <br />
        da web e do mobile.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 max-w-2xl text-white/60"
        style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
      >
        Desenvolvedor Fullstack, formando em Engenharia de Software. Especializado
        em interfaces imersivas, APIs robustas e experiências de alta performance
        com React, Node.js e TypeScript.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projetos"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-cyan-400 px-6 py-3 text-black shadow-[0_0_60px_rgba(220,38,38,0.45)] transition hover:scale-[1.02]"
        >
          Ver projetos
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </a>
        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white backdrop-blur transition hover:bg-white/10"
        >
          Falar comigo
        </a>
        <div className="flex items-center gap-2">
          <a
            className="rounded-full border border-white/10 bg-white/5 p-3 text-white/80 transition hover:bg-white/10"
            href="https://github.com/R4finh4sz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            className="rounded-full border border-white/10 bg-white/5 p-3 text-white/80 transition hover:bg-white/10"
            href="https://www.linkedin.com/in/r4finh4sz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-3"
      >
        {[
          { v: "3+", k: "Anos de experiência" },
          { v: "+10", k: "Projetos entregues" },
          { v: "Full", k: "Stack Developer" },
        ].map((s) => (
          <div
            key={s.k}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
          >
            <div
              className="bg-gradient-to-r from-red-400 to-cyan-300 bg-clip-text text-transparent"
              style={{ fontSize: "1.75rem", fontWeight: 700 }}
            >
              {s.v}
            </div>
            <div className="text-white/55">{s.k}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
