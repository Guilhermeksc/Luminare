"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gem, Handshake, Leaf, Music, Sparkles, Users, Waves } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/Card";

const values = [
  {
    icon: Users,
    title: "Pessoas celebram com pessoas",
    description:
      "Cada projeto nasce escutando anfitriões e convidados para que o encontro gere bem-estar, vínculos e memórias reais.",
  },
  {
    icon: Handshake,
    title: "Respeito aos celebrantes",
    description:
      "Planejamento colaborativo, protocolos de etiqueta e fluxos sob medida para honrar histórias e expectativas.",
  },
  {
    icon: Sparkles,
    title: "Modernidade e sofisticação",
    description:
      "Tecnologias emergentes, trajes e condutas impecáveis para eventos contemporâneos com assinatura autoral.",
  },
  {
    icon: Gem,
    title: "Personalização e autenticidade",
    description:
      "Narrativas únicas, identidade visual proprietária e storytelling que evidenciam os protagonistas da celebração.",
  },
];

export function Conheca() {
  return (
    <section id="conheca" className="container-section py-24">

      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-6"
        >
          <SectionHeading
            eyebrow="Conheça a Luminare"
            title="Plano 2024–2031 para celebrar com propósito"
            description="Somos uma produtora nascida em João Pessoa comprometida em unir criatividade, tecnologia e responsabilidade socioambiental. Nosso plano de negócios mapeia metas para os próximos sete anos e prepara a Luminare para entregar experiências memoráveis com eficiência e impacto positivo."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-[color:var(--color-accent)]/25 bg-[color:var(--color-surface)]/85 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--color-accent)]">
                Missão
              </p>
              <p className="mt-3 text-sm text-[color:var(--color-muted)]">
                Promover eventos que proporcionem experiências agradáveis e memoráveis aos participantes, valorizando pessoas e fortalecendo conexões.
              </p>
            </div>
            <div className="rounded-3xl border border-[color:var(--color-accent)]/25 bg-[color:var(--color-surface)]/85 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--color-accent)]">
                Visão
              </p>
              <p className="mt-3 text-sm text-[color:var(--color-muted)]">
                Ser referência em eventos familiares e corporativos, inovadores e acolhedores, com excelência na estrutura, música de qualidade e personalização.
              </p>
            </div>
          </div>
          <div className="spotlight relative overflow-hidden rounded-3xl bg-[color:var(--color-surface)]/80 p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[color:var(--color-primary-muted)]/55" />
            <div className="relative space-y-4 text-sm text-[color:var(--color-muted)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
                Metas 2024–2031
              </p>
              <p>
                Estruturamos nossas áreas administrativas, comerciais e operacionais para garantir excelência em logística, aquisições e gestão de parceiros estratégicos.
              </p>
              <p>
                Atuamos em João Pessoa e região conectando tecnologia, sofisticação e acolhimento. A cada evento, produzimos indicadores ESG auditáveis e fortalecemos uma rede de fornecedores que partilham nossos valores.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="grid gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <Card className="h-full bg-[color:var(--color-surface)]/90">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-primary-muted)]">
                    <Icon className="h-6 w-6 text-[color:var(--color-accent)]" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-heading text-lg text-[color:var(--color-foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[color:var(--color-muted)]">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
