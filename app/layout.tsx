import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teleios Studio | Sistemas digitales diseñados con orden y propósito",
  description:
    "Estudio de software y desarrollo web para comercios y profesionales. Estética sacra moderna, precisión técnica y máxima velocidad.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="bg-[#FAFAFA] text-zinc-900 font-sans antialiased min-h-screen selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
