"use client";

import { motion } from "framer-motion";
import { Leaf, Palette, Sparkles, Users } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/Card";

const services = [
  {
    title: "Produções culturais",
    description:
      "Shows, festivais, exposições e ativações urbanas com curadoria artística, design cenográfico autoral e logística circular.",
    icon: Palette,
  },
  {
    title: "Eventos corporativos",
    description:
      "Summits, convenções, lançamentos e experiências digitais com ambientes imersivos e métricas acionáveis.",
    icon: Users,
  },
  {
    title: "Sustentabilidade na prática",
    description:
      "Consultoria ESG, inventário de carbono, reaproveitamento de materiais, gerenciamento de resíduos e relatórios de impacto.",
    icon: Leaf,
  },
  {
    title: "Tecnologia e inovação",
    description:
      "Plataformas interativas, inteligência de dados, realidade aumentada e automatização para jornadas memoráveis.",
    icon: Sparkles,
  },
];

export function Features() {
  return (
    <section id="features" className="bg-[color:var(--color-primary-muted)]/40 py-24">
      <div className="container-section space-y-16">
        <SectionHeading
          eyebrow="Serviços principais"
          title="Experiências completas com propósito, design e tecnologia"
          description="Nossa equipe integra estratégia, criação, produção e operação para entregar eventos memoráveis, com foco em sustentabilidade e performance."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <Card className="h-full bg-[color:var(--color-surface)]/85">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-primary-muted)]">
                      <Icon className="h-6 w-6 text-[color:var(--color-accent)]" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-semibold text-[color:var(--color-foreground)]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[color:var(--color-muted)]">{service.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
