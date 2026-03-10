import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Daniel Salgado",
  description: "Conheça minha trajetória, visão e como construo soluções digitais.",
};

export default function SobrePage() {
  return (
    <div className="container mx-auto px-6 max-w-4xl py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Sobre Mim</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-zinc-300 leading-relaxed mb-6">
          Sou um builder de soluções digitais. Meu foco vai além de escrever código — 
          eu estruturo arquiteturas, integro sistemas e crio produtos que entregam valor real.
        </p>
        {/* Placeholder para conteúdo futuro detalhado do README */}
        <p className="text-zinc-400">Conteúdo a ser preenchido...</p>
      </div>
    </div>
  );
}
