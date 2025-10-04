"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gem, Handshake, Leaf, MessageCircle, Music, Sparkles, Users, Waves } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/Card";
import { Dancing_Script } from "next/font/google";

const highlightScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export function Conheca() {
  return (
    <section id="conheca" className="container-section py-24">

      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="container-section relative z-10 mt-10"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-[32px] p-10 text-white">
          <div className="flex w-full items-center justify-center">
            <Image
              src="/images/dia_verde.png"
              alt="Dia Verde"
              width={500}
              height={500}
              className="h-auto w-full max-w-[500px] object-contain"
              priority
            />
          </div>
          <div className="flex w-full max-w-[520px] flex-col items-center gap-6 text-center">
            <p className={`${highlightScript.className} text-3xl font-semibold text-[#7fe9ac]`}>
              Inovação e Soluções Urbanas Sustentáveis
            </p>
            <div className="flex flex-col items-center gap-3 text-center">
              <p className="rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#7fe9ac] shadow-sm shadow-[#7fe9ac]/30">
                30, 31 de outubro e 01 de novembro
              </p>
              <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                na Semana Nacional de Ciência e Tecnologia
              </p>
            </div>
            <p className="text-sm text-white/80">Local: Espaço Cultural</p>
            <a
              href="https://forms.gle/mbA7quzaF9xysJw88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:border-white/60"
            >
              Inscreva-se aqui
            </a>
            <a
              href="https://wa.me/5583999080130"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:border-white/60"
            >
              <MessageCircle className="mr-3 h-4 w-4" aria-hidden="true" />
              Fale conosco no WhatsApp
            </a>
            <div className="flex w-full max-w-[500px] items-center justify-center p-4">
              <Image
                src="/images/patrocinadores.png"
                alt="Patrocinadores"
                width={1000}
                height={320}
                className="h-auto w-full max-w-[500px] object-contain"
              />
            </div>
          </div>
          <div className="w-full max-w-[520px] space-y-6 text-center">
            <div className="space-y-1 text-lg font-semibold">
              <p className="text-[color:var(--color-accent)]">30 e 31 OUTUBRO (14 às 19h)</p>
              <p className="text-white/85">Quinta e Sexta</p>
            </div>
            <div className="space-y-2 text-base text-white/85">
              <p>VITRINE de Soluções Urbanas Sustentáveis</p>
              <p>ESPAÇO APRENDIZ para compartilhamentos</p>
              <p>RODAS de diálogos em Soluções Urbanas Sustentáveis</p>
            </div>
            <div className="space-y-1 text-lg font-semibold">
              <p className="text-[color:var(--color-accent)]">01 DE NOVEMBRO (14 às 18h)</p>
              <p className="text-white/85">Sábado</p>
            </div>
            <div className="space-y-3 text-base text-white/85">
              <p>Mesa Redonda 1: aproveitamento de resíduos e caminhos sustentáveis para construção civil</p>
              <p>
                Mesa Redonda 2: Soluções Baseadas na Natureza (SbN) e engajamento comunitário rumo ao urbanismo
                sustentável
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
