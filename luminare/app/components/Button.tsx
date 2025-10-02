"use client";

import Link, { LinkProps } from "next/link";
import { motion } from "framer-motion";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

type AnchorProps = BaseProps &
  LinkProps & {
    asChild?: false;
  };

type ButtonProps = BaseProps &
  ComponentPropsWithoutRef<"button"> & {
    as?: "button";
  };

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-[color:var(--color-accent)] text-[#1a160a] shadow-gold hover:brightness-105 focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)]",
  secondary:
    "bg-transparent border border-[color:var(--color-accent)] text-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-muted)]",
  ghost:
    "bg-transparent text-[color:var(--color-foreground)] hover:bg-[color:var(--color-primary-muted)]/40",
};

function composeClassNames(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const MotionLink = motion(Link);
const MotionButton = motion.button;

export function Button(props: AnchorProps): JSX.Element;
export function Button(props: ButtonProps): JSX.Element;
export function Button({
  children,
  variant = "primary",
  className,
  icon,
  iconPosition = "right",
  ...rest
}: ButtonProps | AnchorProps) {
  const baseClasses = composeClassNames(
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-200",
    "shadow-sm shadow-black/5",
    "focus-visible:outline-none",
    styles[variant],
    className,
  );

  const content = (
    <>
      {icon && iconPosition === "left" ? icon : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? icon : null}
    </>
  );

  if ("href" in rest) {
    const { href, ...linkProps } = rest;
    return (
      <MotionLink
        href={href}
        {...linkProps}
        className={baseClasses}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      {...(rest as ComponentPropsWithoutRef<"button">)}
      className={baseClasses}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </MotionButton>
  );
}
