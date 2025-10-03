"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake, Leaf, Lightbulb, Workflow } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/Card";

const values = [
  {
    icon: Leaf,
    title: "Sustentabilidade real",
    description:
      "Compensamos 100% das emissões, priorizamos fornecedores locais e acompanhamos métricas ambientais em tempo real.",
  },
  {
    icon: Lightbulb,
    title: "Inovação contínua",
    description:
      "Experiências imersivas com tecnologias XR, design biofílico e inteligência de dados para decisões assertivas.",
  },
  {
    icon: Workflow,
    title: "Excelência em operação",
    description:
      "Processos certificados, equipe multidisciplinar e planejamento meticuloso garantem execuções impecáveis.",
  },
  {
    icon: Handshake,
    title: "Parcerias estratégicas",
    description:
      "Rede de fornecedores selecionados que compartilham nossos padrões socioambientais e de qualidade.",
  },
];

export function Conheca() {
  return (
    <section id="conheca" className="container-section py-24">
      <div className="mb-8 flex justify-center lg:mb-14">
        <Image
          src="/images/logo_maior.svg"
          alt="Luminare logo"
          width={260}
          height={84}
          className="h-auto w-[220px] drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:w-[260px]"
          priority
        />
      </div>
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-6"
        >
          <SectionHeading
            eyebrow="Conheça a Luminare"
            title="Eventos que iluminam pessoas e cuidam do planeta"
            description="Somos uma produtora que une criatividade, tecnologia e responsabilidade socioambiental. Desenvolvemos jornadas completas — da estratégia ao pós-evento — com dados transparentes e impacto positivo."
          />
          <div className="spotlight relative overflow-hidden rounded-3xl bg-[color:var(--color-surface)]/80 p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[color:var(--color-primary-muted)]/60" />
            <div className="relative space-y-4 text-sm text-[color:var(--color-muted)]">
              <p>
                Nosso time lidera produções culturais, festivais, convenções corporativas, premiações e experiências customizadas, sempre com gestão integrada e indicadores ESG auditáveis.
              </p>
              <p>
                Assumimos cada projeto com foco em legado, conectando marcas a públicos exigentes por meio de narrativas autênticas e ambientes de baixa emissão.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2">
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
                  <h3 className="text-lg font-semibold text-[color:var(--color-foreground)]">
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
