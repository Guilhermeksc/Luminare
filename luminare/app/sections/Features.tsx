"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Leaf, Music, Route, Sparkles, Users } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/Card";

const services = [
  {
    title: "Eventos familiares e sociais",
    description:
      "Produção completa para casamentos, aniversários e celebrações autorais com curadoria acolhedora e ambientação exclusiva.",
    icon: Users,
  },
  {
    title: "Eventos corporativos e institucionais",
    description:
      "Convenções, summits e premiações que combinam estratégia de marca, protocolos impecáveis e indicadores de performance.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Curadoria musical e sensorial",
    description:
      "Playlists, performances e experiências multissensoriais que equilibram movimento, emoção e narrativa do evento.",
    icon: Music,
  },
  {
    title: "Logística e fornecedores integrados",
    description:
      "Gestão de aquisições, contratos e operações circulares com parceiros certificados e foco em eficiência.",
    icon: Route,
  },
  {
    title: "Sustentabilidade e ESG",
    description:
      "Inventário de emissões, compensação certificada, reaproveitamento de materiais e relatórios auditáveis.",
    icon: Leaf,
  },
  {
    title: "Identidade e storytelling",
    description:
      "Direção criativa, cenografia biofílica e comunicação autoral que evidenciam os protagonistas de cada celebração.",
    icon: Sparkles,
  },
];

export function Features() {
  return (
    <section id="features" className="bg-[color:var(--color-primary-muted)]/40 py-24">
      <div className="container-section space-y-16">
        <SectionHeading
          eyebrow="Serviços oferecidos"
          title="Estrutura que sustenta nosso plano de crescimento"
          description="Integramos gestão, criação e operação para garantir que cada entrega reflita nossos valores e metas traçadas para 2024–2031."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                    <h3 className="font-heading text-lg text-[color:var(--color-foreground)]">
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
