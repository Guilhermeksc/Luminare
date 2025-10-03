"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

export function Manifesto() {
  return (
    <section className="bg-[color:var(--color-primary-muted)]/35 py-24">
      <div className="container-section grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-6"
        >
          <SectionHeading
            eyebrow="Essência Luminare"
            title="Celebramos o encanto da Amazônia e de João Pessoa"
            description="A onça pintada simboliza nossa conexão com a natureza, a força da biodiversidade brasileira e o compromisso em produzir eventos que respeitam território, pessoas e meio ambiente."
          />
          <div className="space-y-4 text-sm text-[color:var(--color-muted)]">
            <p>
              Inspirados por paisagens brasileiras, adotamos práticas que minimizam impactos, valorizam fornecedores locais e criam experiências multissensoriais alinhadas aos celebrantes.
            </p>
            <p>
              Cada projeto nasce de escuta ativa e persistência diária — pilares do nosso plano 2024–2031 — para entregar sofisticação, acolhimento e responsabilidade.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-[color:var(--color-accent)]/25 bg-white/5 p-4 shadow-emerald backdrop-blur">
            <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-white/20" />
            <Image
              src="/images/onca.jpeg"
              alt="Onça pintada em floresta"
              width={720}
              height={900}
              className="h-full w-full rounded-[28px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
