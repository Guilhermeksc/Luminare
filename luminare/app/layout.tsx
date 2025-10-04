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

const baseUrl = "https://luminarepromove.com.br";
// imagem otimizada em 1200x630 (recomendado para WhatsApp, FB, Twitter, LinkedIn)
const ogImageUrl = `${baseUrl}/images/logo-og.jpg`;

const title = "Luminare Promove | Produções e Eventos";
const description =
  "Produção de eventos sustentáveis, inovadores e sofisticados para experiências culturais, corporativas e imersivas com impacto positivo.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: baseUrl,
    siteName: "Luminare Promove",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Logo Luminare",
        type: "image/jpeg",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // garante exibição com imagem grande
    title,
    description,
    images: [ogImageUrl],
  },
  keywords: [
    "eventos sustentáveis",
    "produção de eventos",
    "eventos corporativos",
    "eventos culturais",
    "Luminare Produções e Eventos",
  ],
  alternates: {
    canonical: baseUrl,
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
        className={`${montserrat.variable} ${lustria.variable} text-[color:var(--color-foreground)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
