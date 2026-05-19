"use client";

import { motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-5xl px-6 py-32">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur md:p-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),transparent_60%),radial-gradient(circle_at_bottom,_rgba(34,211,238,0.35),transparent_60%)]" />

        <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }} className="mt-6 text-white">
          Vamos construir <span className="bg-gradient-to-r from-red-400 to-cyan-300 bg-clip-text text-transparent">algo extraordinário</span> juntos.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/65">Tem um projeto em mente? Me chame e vamos transformar sua ideia em uma experiência digital de outro nível.</p>
        <a href="mailto:rafael.souza6657@gmail.com" className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-cyan-400 px-8 py-4 text-black shadow-[0_0_60px_rgba(220,38,38,0.45)] transition hover:scale-[1.02]">
          <Mail className="h-5 w-5" /> rafael.souza6657@gmail.com <ArrowRight className="h-4 w-4" />
        </a>
        <div className="mt-10 flex items-center justify-center gap-3">
          {[
            { Icon: Github, href: "https://github.com/R4finh4sz" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/r4finh4sz/" },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-white/80 transition hover:bg-white/10 hover:text-white">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </motion.div>
      <footer className="mt-16 flex flex-wrap items-center justify-between gap-3 text-white/40">
        <span>© 2026 R4finh4sz — Todos os direitos reservados.</span>
      </footer>
    </section>
  );
}
