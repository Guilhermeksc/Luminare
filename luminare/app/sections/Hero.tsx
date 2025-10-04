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
        <div className="h-full w-full bg-gradient-to-br from-black/40 via-[#0f2118]/70 to-[#183522]/40 mix-blend-multiply" />
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
          {/* <div className="flex flex-col gap-4 sm:flex-row">
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
          </div> */}
        </motion.div>
      </div>


    </section>
  );
}
