import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Daniel Salgado",
  description: "Reflexões sobre tech, IA e construção de produtos.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 max-w-5xl py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Blog & Insights</h1>
      <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
        Pipeline automatizado de curadoria de conteúdo sobre Inteligência Artificial, 
        programação e produto do ecossistema global.
      </p>
      
      {/* Placeholder para feed do blog */}
      <div className="border border-dashed border-zinc-800 rounded-lg p-12 text-center text-zinc-500">
        Feed de artigos curados entrará aqui.
      </div>
    </div>
  );
}
