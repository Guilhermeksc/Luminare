"use client";

import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");

    if (typeof window !== "undefined") {
      window.localStorage.setItem("luminare-theme", "dark");
    }
  }, []);

  return null;
}
