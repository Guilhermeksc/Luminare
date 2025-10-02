import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={`surface-card relative overflow-hidden rounded-3xl p-8 transition duration-300 hover:-translate-y-1 hover:shadow-emerald ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
