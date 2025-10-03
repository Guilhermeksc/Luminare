"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { Dancing_Script } from "next/font/google";

const highlightScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pb-24 pt-48">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.svg"
          alt="Integração entre natureza e tecnologia"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-[#0f2118]/70 to-[#183522]/40 mix-blend-multiply" />
      </div>
      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-5xl space-y-8 text-white"
        >
        <div className="mb-8 flex justify-center lg:mb-14">
          <Image
            src="/images/logo_maior.svg"
            alt="Luminare logo"
            width={390}
            height={126}
            className="h-auto w-[220px] drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:w-[390px]"
            priority
          />
        </div>          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl">
            Eventos que acolhem pessoas, honram histórias e iluminam cada celebração.
          </h1>
          <p className="max-w-3xl text-base text-white/80">
            A Luminare Produção & Eventos nasce em João Pessoa-PB para entregar experiências modernas, personalizadas e sustentáveis — combinando tecnologia, curadoria musical e logística impecável para famílias, marcas e instituições.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#contato" iconPosition="right">
              Solicitar orçamento
            </Button>
            <Button
              href="#conheca"
              variant="ghost"
              className="border border-white/20 text-white hover:border-white/40 hover:text-white"
            >
              Conheça a Luminare
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="container-section relative z-10 mt-16">
        <div className="h-px w-full bg-white/20" />
      </div>
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
    </section>
  );
}
