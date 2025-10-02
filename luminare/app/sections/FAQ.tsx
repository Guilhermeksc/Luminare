"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

const faqs = [
  {
    question: "Como a Luminare garante eventos verdadeiramente sustentáveis?",
    answer:
      "Trabalhamos com inventário de carbono, compensação certificada, fornecedores homologados e logística inteligente para reduzir emissões. Todos os indicadores são reportados em dashboards proprietários.",
  },
  {
    question: "Vocês atendem eventos híbridos e digitais?",
    answer:
      "Sim. Criamos experiências híbridas com transmissão de alta performance, plataformas interativas e aplicações XR, assegurando engajamento tanto presencial quanto online.",
  },
  {
    question: "É possível contratar apenas a consultoria ESG?",
    answer:
      "Oferecemos consultoria independente ou integrada à produção do evento. Mapeamos o ciclo completo, implementamos práticas sustentáveis e entregamos relatórios prontos para auditorias.",
  },
  {
    question: "Quais são os prazos ideais para início de um projeto?",
    answer:
      "Recomendamos 90 dias para eventos de médio porte e 120 dias para eventos complexos. Porém, avaliamos demandas específicas e estruturamos operações ágeis conforme a necessidade.",
  },
];

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="container-section space-y-12 py-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Respostas para quem busca excelência sustentável"
        description="Selecione uma pergunta para saber mais sobre nossos processos, certificações e formas de atuação."
      />
      <div className="divide-y divide-[color:var(--color-border)] rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/80">
        {faqs.map((faq, index) => {
          const isActive = active === index;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setActive(isActive ? null : index)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-base font-medium text-[color:var(--color-foreground)] transition hover:bg-[color:var(--color-primary-muted)]/40"
                aria-expanded={isActive}
              >
                <span>{faq.question}</span>
                <motion.span animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown className="h-5 w-5 text-[color:var(--color-accent)]" strokeWidth={1.7} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isActive ? (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden px-6"
                  >
                    <p className="pb-6 text-sm text-[color:var(--color-muted)]">{faq.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
