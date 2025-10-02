"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { Carousel } from "../components/Carousel";

const events = [
  {
    image: "/images/evento-floresta-tech.svg",
    title: "Festival Floresta Tech",
    description: "Imersão sonora com captação de energia solar e experiências XR sobre bioeconomia.",
  },
  {
    image: "/images/evento-corporativo.svg",
    title: "Summit Regreen Corporativo",
    description:
      "Convenção híbrida para líderes ESG, com relatórios de impacto em tempo real e materiais reutilizados.",
  },
  {
    image: "/images/evento-gala.svg",
    title: "Gala Luminare Experience",
    description:
      "Jantar beneficente carbono neutro, cenografia biomimética e iluminação inteligente de baixo consumo.",
  },
  {
    image: "/images/evento-immersivo.svg",
    title: "Imersão Metacidades",
    description: "Exposição interativa com dados de smart cities e projeções 360º em estruturas sustentáveis.",
  },
];

export function EventsCarousel() {
  return (
    <section id="eventos" className="container-section space-y-12 py-24">
      <SectionHeading
        eyebrow="Eventos realizados"
        title="Portfólio com tecnologia, impacto e sofisticação"
        description="Conheça alguns dos projetos que idealizamos e executamos com parceiros que compartilham nosso compromisso com a sustentabilidade."
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Carousel items={events} />
      </motion.div>
    </section>
  );
}
