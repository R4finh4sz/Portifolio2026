"use client";

import { motion } from "motion/react";
import Image from "next/image";
import foto from "@/Assets/131507059.jpg";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-32">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-red-600/40 to-cyan-400/40 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1 backdrop-blur">
            <Image
              src={foto}
              alt="Foto do desenvolvedor"
              className="h-full w-full rounded-3xl object-cover"
              placeholder="blur"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
            className="text-white"
          >
            Desenvolvedor Fullstack orientado a{" "}
            <span className="bg-gradient-to-r from-red-400 to-cyan-300 bg-clip-text text-transparent">
              resultados e impacto real
            </span>
            .
          </h2>
          <p className="mt-5 text-white/65">
            Sou desenvolvedor fullstack e estou finalizando minha graduação em
            Engenharia de Software. Apaixonado por transformar ideias em produtos
            digitais completos do banco de dados à interface, entregando
            soluções escaláveis, performáticas e com excelente experiência de uso.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "React, Next.js, TypeScript e Tailwind no front",
              "Node.js, Express, REST e autenticação no back",
              "React Native e Expo para apps mobile nativos",
              "Banco de dados relacionais e não-relacionais",
              "DevOps: CI/CD, Docker, Vercel e Supabase",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-white/80">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-red-400 to-cyan-300 shadow-[0_0_12px_rgba(220,38,38,0.8)]" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
