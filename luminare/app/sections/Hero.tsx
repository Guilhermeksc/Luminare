"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../components/Button";

const stats = [
  { label: "Eventos carbono neutro", value: "+120" },
  { label: "Parceiros sustentáveis", value: "80" },
  { label: "Índice de satisfação", value: "98%" },
];

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pb-24 pt-48">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.svg"
          alt="Integração entre natureza e tecnologia"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-[#0f2118]/70 to-[#183522]/40 mix-blend-multiply" />
      </div>
      <div className="container-section relative z-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-8 text-white"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--color-accent)]">
            Luminare Produções e Eventos
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Sustentabilidade, inovação e sofisticação em cada experiência.
          </h1>
          <p className="max-w-xl text-base text-white/80">
            Planejamos e executamos eventos culturais, corporativos e sociais com tecnologia de ponta e energia renovável, transformando visões em experiências memoráveis.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#contato" iconPosition="right">
              Solicitar orçamento
            </Button>
            <Button
              href="#conheca"
              variant="ghost"
              className="border border-white/20 text-white hover:border-white/40 hover:text-white"
            >
              Conheça a Luminare
            </Button>
          </div>
          <dl className="grid gap-6 pt-6 sm:grid-cols-3">
            {stats.map((item) => (
              <motion.div
                key={item.label}
                className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <dt className="text-xs uppercase tracking-[0.32em] text-white/60">
                  {item.label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-white">{item.value}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative"
        >
          <div className="surface-card gradient-ring flex h-full flex-col justify-between gap-6 rounded-[32px] bg-white/5 p-8 text-white backdrop-blur">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
                Nosso manifesto
              </p>
              <p className="text-lg text-white/80">
                Cada evento é um convite para iluminar ideias, conectar pessoas e celebrar a sustentabilidade.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Certificações
              </p>
              <p className="text-2xl font-semibold text-white">ISO 20121 · Energia 100% renovável · Equipe carbono neutro</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 text-sm text-white/70">
              <p>
                Atuamos em todo o Brasil integrando tecnologia imersiva, design biofílico e logística inteligente para eventos mais limpos e impactantes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
