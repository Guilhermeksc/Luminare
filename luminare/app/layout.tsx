import type { Metadata } from "next";
import { Lustria, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const lustria = Lustria({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

const title = "Luminare Produções e Eventos";
const description =
  "Produção de eventos sustentáveis, inovadores e sofisticados: experiências culturais, corporativas e imersivas com impacto positivo.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://luminareeventos.com",
    siteName: "Luminare Produções e Eventos",
    images: [
      {
        url: "/images/hero-bg.svg",
        width: 1200,
        height: 630,
        alt: "Luminare Produções e Eventos",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-bg.svg"],
  },
  keywords: [
    "eventos sustentáveis",
    "produção de eventos",
    "eventos corporativos",
    "eventos culturais",
    "Luminare Produções e Eventos",
  ],
  alternates: {
    canonical: "https://luminareeventos.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${lustria.variable} bg-[color:var(--color-background)] text-[color:var(--color-foreground)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
