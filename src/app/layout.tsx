import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Daniel Salgado | Builder Digital",
  description: "Portfólio de Daniel Salgado - Desenvolvedor Fullstack focado em e-commerce, SaaS e produtos digitais.",
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
