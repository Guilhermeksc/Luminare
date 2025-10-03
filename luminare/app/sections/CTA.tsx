"use client";

import { motion } from "framer-motion";
import { Button } from "../components/Button";

export function CTA() {
  return (
    <section id="contato" className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[color:var(--color-primary)]" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at top left, #d0ae48 0%, transparent 55%)" }} />
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at bottom right, rgba(2, 20, 14, 0.85) 0%, transparent 65%)" }} />
      </div>
      <div className="container-section text-white">
        <motion.div
          className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/10 p-12 shadow-emerald backdrop-blur"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="absolute -left-32 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-[color:var(--color-accent)]/20 blur-3xl sm:block" />
          <div className="absolute -right-36 top-12 hidden h-72 w-72 rounded-full bg-white/10 blur-3xl lg:block" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--color-accent)]">
                Construa com a Luminare
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl">
                Transforme seu evento em um marco inesquecível e sustentável.
              </h2>
              <p className="text-base text-white/75">
                Compartilhe sua ideia para receber um desenho estratégico alinhado ao plano 2024–2031: curadoria criativa, planejamento logístico e indicadores ESG transparentes.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="mailto:contato@luminareeventos.com" variant="primary">
                  contato@luminareeventos.com
                </Button>
                <Button href="https://wa.me/5500000000000" variant="secondary">
                  Falar com especialista
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-white/20 bg-black/20 p-8 text-sm text-white/80">
              <p className="font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                O que entregamos
              </p>
              <ul className="mt-5 space-y-3">
                <li>• Planejamento completo com acolhimento e personalização para celebrantes</li>
                <li>• Curadoria musical e sensorial alinhada ao perfil do público</li>
                <li>• Rede de fornecedores certificados, logística inteligente e indicadores ESG</li>
                <li>• Relatórios pós-evento com storytelling, métricas e oportunidades de legado</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
