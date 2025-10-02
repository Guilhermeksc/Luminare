"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  if (window.localStorage.getItem("luminare-theme")) {
    return window.localStorage.getItem("luminare-theme") as "light" | "dark";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    window.localStorage.setItem("luminare-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <motion.button
      type="button"
      aria-label="Alternar tema"
      onClick={toggle}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-sm text-[color:var(--color-foreground)] shadow-sm transition hover:bg-[color:var(--color-primary-muted)]/60"
      whileTap={{ scale: 0.9 }}
    >
      <span className="text-base" aria-hidden>
        {theme === "dark" ? "☀️" : "🌙"}
      </span>
    </motion.button>
  );
}
