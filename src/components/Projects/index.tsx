"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../ImageWithFallback";

const projects = [
  {
    title: "Recicla Online",
    tag: "Web · Sustentabilidade",
    desc: "Plataforma completa de gestão de reciclagem com cadastro de usuários, mapa de pontos de coleta e dashboard de impacto ambiental. Projeto TCC — Engenharia de Software.",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=900",
    color: "from-green-500/40 to-cyan-500/40",
    url: "https://reciclaonline.com.br/",
    github: "https://github.com/R4finh4sz/ReciclaWeb",
    featured: true,
    techs: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Recicla App",
    tag: "Mobile · React Native",
    desc: "App mobile do Recicla Online com autenticação 2FA, onboarding animado, notificações e integração completa com a API REST do backend.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900",
    color: "from-green-400/40 to-emerald-500/40",
    url: "https://github.com/R4finh4sz/Recicla-App",
    github: "https://github.com/R4finh4sz/Recicla-App",
    featured: false,
    techs: ["React Native", "Expo", "TypeScript"],
  },
  {
    title: "Siatea — App Paciente",
    tag: "Mobile · Saúde",
    desc: "Aplicativo mobile para gestão de pacientes com agendamentos, histórico médico e integração com sistema hospitalar. TypeScript + Expo.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900",
    color: "from-blue-500/40 to-cyan-400/40",
    url: "https://github.com/R4finh4sz/Siatea-AppPaciente",
    github: "https://github.com/R4finh4sz/Siatea-AppPaciente",
    featured: false,
    techs: ["React Native", "Expo", "TypeScript"],
  },
  {
    title: "Recicla Backend",
    tag: "Backend · API REST",
    desc: "Contribuí como colaborador na API REST do Recicla Online — autenticação JWT, 2FA, endpoints de usuários e pontos de coleta. Node.js + TypeScript.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
    color: "from-red-500/40 to-violet-500/40",
    url: "https://github.com/R4finh4sz/RECICLA_BACKEND",
    github: "https://github.com/R4finh4sz/RECICLA_BACKEND",
    featured: false,
    techs: ["Node.js", "TypeScript", "Strapi", "PostgreSQL"],
    collaborator: true,
  },
];

export function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 700, letterSpacing: "-0.03em" }} className="text-white">
          Trabalhos <span className="bg-gradient-to-r from-red-400 to-cyan-300 bg-clip-text text-transparent">selecionados</span>
        </h2>
        <a
          href="https://github.com/R4finh4sz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/70 transition hover:text-white"
        >
          <Github className="h-4 w-4" />
          Ver todos no GitHub
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Projeto destaque */}
      {projects.filter((p) => p.featured).map((p) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="group relative mb-8 flex overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur md:flex-row flex-col"
        >
          <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${p.color} opacity-40 blur-2xl`} />
          <div className="relative overflow-hidden md:w-1/2">
            <ImageWithFallback
              src={p.img}
              alt={p.title}
              className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 md:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
            <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-white/90 backdrop-blur">
              {p.tag}
            </div>
            <div className="absolute left-4 top-4 rounded-full border border-green-400/40 bg-green-400/20 px-3 py-1 text-green-200 text-xs font-semibold tracking-widest uppercase backdrop-blur">
              ★ Destaque
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 md:w-1/2">
            <h3 className="text-white" style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>{p.title}</h3>
            <p className="mt-4 text-white/65 text-lg">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.techs.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">{t}</span>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-cyan-200 transition"
              >
                <ExternalLink className="h-4 w-4" />
                Visitar site
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="grid gap-6 md:grid-cols-3">
        {projects.filter((p) => !p.featured).map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
          >
            <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${p.color} opacity-40 blur-2xl`} />
            <div className="relative overflow-hidden">
              <ImageWithFallback src={p.img} alt={p.title} className="h-52 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-white/90 backdrop-blur text-sm">{p.tag}</div>
              {"collaborator" in p && p.collaborator && (
                <div className="absolute left-4 top-4 rounded-full border border-amber-400/40 bg-amber-400/20 px-3 py-1 text-amber-200 text-xs font-semibold backdrop-blur">
                  👥 Colaborador
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-white" style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.02em" }}>{p.title}</h3>
              <p className="mt-2 text-white/60 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.techs.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/60">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition ml-auto"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  Ver projeto
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
