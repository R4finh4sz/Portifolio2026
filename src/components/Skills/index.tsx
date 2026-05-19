"use client";

import { motion } from "motion/react";
import { Atom, Smartphone, Palette, Zap, Database, GitBranch, Server, Globe } from "lucide-react";

const skills = [
  { icon: Atom, title: "React & Next.js", desc: "SSR, RSC, Suspense, otimização de bundles e Core Web Vitals." },
  { icon: Server, title: "Node.js & APIs REST", desc: "Express, autenticação JWT, middlewares e arquitetura MVC." },
  { icon: Smartphone, title: "React Native", desc: "Apps nativos iOS/Android com Expo, animações e gestos." },
  { icon: Database, title: "Banco de Dados", desc: "PostgreSQL, MySQL, MongoDB, Strapi" },
  { icon: Globe, title: "TypeScript & JS", desc: "Tipagem forte, clean code e padrões modernos de desenvolvimento." },
  { icon: Palette, title: "UI/UX Design", desc: "Figma, design tokens e construção de design systems escaláveis." },
  { icon: Zap, title: "Performance & SEO", desc: "Lighthouse 100, lazy loading, edge rendering e caching avançado." },
  { icon: GitBranch, title: "DevOps & CI/CD", desc: "GitHub Actions, Vercel, Docker, EAS Build e deploys automatizados." },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-14 text-center">
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 700, letterSpacing: "-0.03em" }} className="text-white">
          Tecnologias que <span className="bg-gradient-to-r from-red-400 to-cyan-300 bg-clip-text text-transparent">eu domino</span>
        </h2>
        <p className="mt-4 text-white/55 max-w-xl mx-auto">
          Stack completa para construir produtos do zero — do backend ao app mobile.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/30">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-600/0 via-cyan-400/0 to-red-600/0 opacity-0 transition group-hover:from-red-600/10 group-hover:to-cyan-400/10 group-hover:opacity-100" />
            <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-gradient-to-br from-red-600/20 to-cyan-400/20 p-3">
              <s.icon className="h-5 w-5 text-cyan-200" />
            </div>
            <h3 className="text-white" style={{ fontWeight: 600 }}>{s.title}</h3>
            <p className="mt-2 text-white/60 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
