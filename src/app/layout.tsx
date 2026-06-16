import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Daniel Salgado | Builder Digital",
  description: "Portfólio de Daniel Salgado — Desenvolvedor Fullstack especializado em e-commerce, SaaS e produtos digitais escaláveis. TypeScript, Next.js, Node.js.",
  keywords: ["Daniel Salgado", "desenvolvedor fullstack", "portfolio", "Next.js", "TypeScript", "e-commerce", "SaaS", "builder digital"],
  authors: [{ name: "Daniel Salgado", url: "https://github.com/Salgaado" }],
  openGraph: {
    title: "Daniel Salgado | Builder Digital",
    description: "Desenvolvedor Fullstack especializado em e-commerce, SaaS e produtos digitais escaláveis.",
    type: "website",
    locale: "pt_BR",
    siteName: "Daniel Salgado",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Salgado | Builder Digital",
    description: "Desenvolvedor Fullstack especializado em e-commerce, SaaS e produtos digitais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 pt-24 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
