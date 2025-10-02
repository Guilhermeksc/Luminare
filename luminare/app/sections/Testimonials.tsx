"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/Card";

const testimonials = [
  {
    quote:
      "A Luminare transformou nosso summit em uma referência nacional. A governança ESG e a excelência operacional superaram todas as expectativas.",
    name: "Marina Duarte",
    role: "Diretora de Comunicação · Grupo Horizonte",
  },
  {
    quote:
      "Metodologia impecável, equipe transparente e inventário de carbono detalhado. Parceria essencial para nosso posicionamento sustentável.",
    name: "Tiago Sarti",
    role: "Head de ESG · Conecta Corp",
  },
  {
    quote:
      "Criatividade e respeito aos recursos do planeta em igual medida. A Luminare é sinônimo de evento premium responsável.",
    name: "Ana Paula Ribeiro",
    role: "CEO · Instituto Viver Cidades",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[color:var(--color-primary-muted)]/30 py-24">
      <div className="container-section space-y-14">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Parcerias que brilham com propósito"
          description="Clientes, patrocinadores e instituições que confiam na Luminare para criar momentos memoráveis e responsáveis."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="h-full bg-[color:var(--color-surface)]/90 px-8 py-10">
                <Quote className="mb-6 h-10 w-10 text-[color:var(--color-accent)]" strokeWidth={1.8} />
                <p className="text-base text-[color:var(--color-foreground)]">{testimonial.quote}</p>
                <div className="mt-6 space-y-1 text-sm">
                  <p className="font-semibold text-[color:var(--color-foreground)]">
                    {testimonial.name}
                  </p>
                  <p className="text-[color:var(--color-muted)]">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
