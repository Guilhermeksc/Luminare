import { Instagram, Linkedin, MessageCircle, Youtube } from "lucide-react";
import { Button } from "./Button";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/luminarepromove",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@luminarepromove", // ajuste se o canal tiver @
    icon: Youtube,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5561999999999", // coloque o número real
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/luminarepromove", // ajuste se já houver página
    icon: Linkedin,
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-[color:var(--color-primary)]/25 py-14 backdrop-blur">
      <div className="container-section flex flex-col gap-10 text-sm text-[color:var(--color-muted)]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
              Luminare Produção & Eventos · João Pessoa · PB
            </p>
            <h3 className="font-heading mt-3 text-2xl text-[color:var(--color-foreground)]">
              Celebramos pessoas com sofisticação, tecnologia e responsabilidade.
            </h3>
          </div>
          <Button href="#contato" variant="primary" className="text-xs uppercase tracking-[0.22em]">
            Solicitar orçamento
          </Button>
        </div>
        <div className="fade-divider" aria-hidden />
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm text-[color:var(--color-muted)]">
              Conecte-se com a Luminare.
            </p>
            <p className="text-xs text-[color:var(--color-muted)]">
              © {new Date().getFullYear()} Luminare Produção & Eventos. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-accent)]/70 text-[color:var(--color-accent)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
                aria-label={label}
              >
                <Icon className="h-5 w-5 transition group-hover:scale-105" strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
