"use client";

import Link, { LinkProps } from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactElement, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

type AnchorMotionProps = Omit<HTMLMotionProps<"a">, "href">;

type AnchorProps = BaseProps &
  LinkProps &
  AnchorMotionProps & {
    asChild?: false;
  };

type ButtonProps = BaseProps &
  HTMLMotionProps<"button"> & {
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

export function Button(props: AnchorProps): ReactElement;
export function Button(props: ButtonProps): ReactElement;
export function Button(props: ButtonProps | AnchorProps): ReactElement {
  const {
    children,
    variant = "primary",
    className,
    icon,
    iconPosition = "right",
    whileHover,
    whileTap,
    ...rest
  } = props;

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

  const hoverMotion = whileHover ?? { y: -2 };
  const tapMotion = whileTap ?? { scale: 0.97 };

  if ("href" in rest) {
    const { href, ...linkProps } = rest as AnchorMotionProps & LinkProps & {
      asChild?: false;
    };

    return (
      <MotionLink
        href={href}
        {...linkProps}
        className={baseClasses}
        whileHover={hoverMotion}
        whileTap={tapMotion}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      {...(rest as HTMLMotionProps<"button">)}
      className={baseClasses}
      whileHover={hoverMotion}
      whileTap={tapMotion}
    >
      {content}
    </MotionButton>
  );
}
