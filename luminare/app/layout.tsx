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

const title = "Luminare Promove | Produções e Eventos";
const description =
  "Produção de eventos sustentáveis, inovadores e sofisticados para experiências culturais, corporativas e imersivas com impacto positivo.";

export const metadata: Metadata = {
  metadataBase: new URL("https://luminarepromove.com.br"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Luminare Promove",
    images: [
      {
        url: "/images/logo.png",
        width: 250,
        height: 250,
        alt: "Logo Luminare",
        type: "image/png",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/logo.png"],
  },
  keywords: [
    "eventos sustentáveis",
    "produção de eventos",
    "eventos corporativos",
    "eventos culturais",
    "Luminare Produções e Eventos",
  ],
  alternates: {
    canonical: "/",
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
