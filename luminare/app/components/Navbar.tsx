"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Dia Verde", href: "#conheca" },
  // { label: "Eventos", href: "#eventos" },
  // { label: "Serviços", href: "#features" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY > 32);
    };

    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const { style } = document.body;
    const previousOverflow = style.overflow;
    style.overflow = isMenuOpen ? "hidden" : previousOverflow;

    return () => {
      style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

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
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl">
            <Image
              src="/images/logo.png"
              alt="Luminare"
              width={44}
              height={44}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="leading-snug">
            <p className="font-heading text-lg tracking-wide text-[color:var(--color-accent)]">
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
              Entre em contato
            </Button>
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/90 text-[color:var(--color-foreground)] transition hover:border-[color:var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)] lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full px-4 pb-4 pt-2 lg:hidden"
          >
            <div className="container-section rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/95 p-4 shadow-emerald backdrop-blur">
              <nav className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-[color:var(--color-muted)] transition hover:bg-[color:var(--color-primary-muted)]/35 hover:text-[color:var(--color-foreground)]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4">
                <Button
                  href="#contato"
                  variant="secondary"
                  className="w-full justify-center text-xs uppercase tracking-[0.24em]"
                  onClick={closeMenu}
                >
                  Entre em contato
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
