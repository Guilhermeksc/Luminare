"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export interface CarouselItem {
  image: string;
  title: string;
  description?: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export function Carousel({ items }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const [dragBounds, setDragBounds] = useState({ right: 0, left: 0 });

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !slideRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = slideRef.current.scrollWidth;
      const maxDrag = contentWidth - containerWidth;
      setDragBounds({ right: 0, left: maxDrag > 0 ? -maxDrag : 0 });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items.length]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/70 p-4"
    >
      <motion.div
        ref={slideRef}
        drag="x"
        dragElastic={0.12}
        dragConstraints={dragBounds}
        className="flex gap-6"
      >
        {items.map((item, index) => (
          <motion.figure
            key={item.title}
            className="group relative min-w-[260px] max-w-sm overflow-hidden rounded-[28px] bg-[color:var(--color-primary-muted)]/50"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 280px"
                className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="space-y-2 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--color-accent)]">
                Evento Realizado
              </p>
              <h3 className="text-lg font-semibold text-[color:var(--color-foreground)]">
                {item.title}
              </h3>
              {item.description ? (
                <p className="text-sm text-[color:var(--color-muted)]">{item.description}</p>
              ) : null}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  );
}
