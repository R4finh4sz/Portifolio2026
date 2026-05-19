"use client";

import { motion } from "motion/react";
import { Code2 } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl shadow-[0_0_40px_rgba(120,80,255,0.25)]">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full bg-gradient-to-br from-red-600 to-cyan-400 px-3 py-1.5 text-black"
        >
          <Code2 className="h-4 w-4" />
          <span className="tracking-widest">R4finh4sz</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          className="ml-1 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 text-cyan-200 transition hover:bg-cyan-400/20"
        >
          Fale comigo
        </a>
      </div>
    </motion.nav>
  );
}
