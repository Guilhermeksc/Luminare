"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import { Card } from "../components/Card";
import { SectionHeading } from "../components/SectionHeading";

const upcomingEvents = [
  {
    name: "Evento 1",
    date: "11 · Outubro · 2025",
    location: "João Pessoa · PB",
    href: "#",
    description: "Hub de inovação para marcas de impacto positivo, com arenas imersivas e energia limpa.",
  },
  {
    name: "Evento 2",
    date: "30 de outubro à 01 de novembro · 2025",
    location: "João Pessoa · PB",
    href: "#",
    description: "Festival de cultura regenerativa, laboratórios criativos e painéis colaborativos.",
  },
  {
    name: "Evento 3",
    date: "10 · Dezembro · 2025",
    location: "João Pessoa · PB",
    href: "#",
    description: "Encontro estratégico para líderes ESG com workshops e cases de circularidade.",
  },
];

export function UpcomingEvents() {
  return (
    <section className="bg-[color:var(--color-background)] py-24">
      <div className="container-section space-y-12">
        <SectionHeading
          eyebrow="Próximos eventos"
          title="Agenda que inspira o futuro dos eventos sustentáveis"
          description="Cadastre-se para participar, patrocinar ou co-criar experiências que transformam pessoas e negócios."
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
                  Saiba mais
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
