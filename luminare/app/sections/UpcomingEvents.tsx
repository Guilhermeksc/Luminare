"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import { Card } from "../components/Card";
import { SectionHeading } from "../components/SectionHeading";

const upcomingEvents = [
  {
    name: "Fase 1 · Estruturação",
    date: "2024 – 2025",
    location: "Capacitação interna e rede de fornecedores",
    href: "#contato",
    description:
      "Formalização da empresa, aprimoramento administrativo, construção da base logística e realização de eventos piloto na região de João Pessoa-PB.",
  },
  {
    name: "Fase 2 · Expansão",
    date: "2026 – 2028",
    location: "Portfólio autoral e parcerias estratégicas",
    href: "#contato",
    description:
      "Escala de eventos familiares e corporativos, ampliação da inteligência criativa, consolidação da curadoria sensorial e das métricas ESG.",
  },
  {
    name: "Fase 3 · Consolidação",
    date: "2029 – 2031",
    location: "Reconhecimento regional e novos mercados",
    href: "#contato",
    description:
      "Fortalecimento da marca Luminare, expansão para outras capitais e criação de programas de formação para fornecedores comprometidos com sustentabilidade.",
  },
];

export function UpcomingEvents() {
  return (
    <section className="bg-[color:var(--color-background)] py-24">
      <div className="container-section space-y-12">
        <SectionHeading
          eyebrow="Plano de crescimento"
          title="Marcos estratégicos da Luminare até 2031"
          description="Conheça as fases que guiam nosso plano de negócios e descubra como participar como parceiro, fornecedor ou celebrante."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="flex h-full flex-col bg-[color:var(--color-surface)]">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs tracking-[0.3em] text-[color:var(--color-accent)]">
                    <CalendarDays className="h-4 w-4" strokeWidth={1.6} />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[color:var(--color-foreground)]">
                    {event.name}
                  </h3>
                  <p className="flex items-center gap-2 text-sm text-[color:var(--color-muted)]">
                    <MapPin className="h-4 w-4" strokeWidth={1.6} />
                    {event.location}
                  </p>
                  <p className="text-sm text-[color:var(--color-muted)]">{event.description}</p>
                </div>
                <Link
                  href={event.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-accent)] transition hover:gap-3"
                >
                  Quero contribuir
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
