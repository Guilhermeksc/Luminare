"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Conheça", href: "#conheca" },
  { label: "Eventos", href: "#eventos" },
  { label: "Serviços", href: "#features" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY > 32);
    };

    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg" : ""
      }`}
    >
      <div
        className={`container-section flex items-center justify-between gap-4 rounded-2xl border border-transparent px-6 py-3 transition-all duration-300 ${
          isScrolled
            ? "border-[color:var(--color-border)] bg-[color:var(--color-surface)]/80 shadow-emerald"
            : "bg-[color:var(--color-surface)]/70"
        }`}
      >
        <a href="#hero" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-primary)] text-xl font-bold text-white shadow-emerald">
            L
          </div>
          <div className="leading-snug">
            <p className="text-base font-semibold tracking-wide text-[color:var(--color-foreground)]">
              Luminare
            </p>
            <p className="text-xs text-[color:var(--color-muted)]">
              Produções e Eventos
            </p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[color:var(--color-muted)] transition hover:text-[color:var(--color-foreground)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button href="#contato" variant="secondary" className="text-xs uppercase tracking-[0.18em]">
              Solicitar orçamento
            </Button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
