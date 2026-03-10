import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab & Experimentos | Daniel Salgado",
  description: "Área de testes, widgets vivos e integrações ao vivo construídos por Daniel Salgado.",
};

export default function LabPage() {
  return (
    <div className="container mx-auto px-6 max-w-5xl py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Lab</h1>
      <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
        Features vivas, dashboards mockados e experimentos técnicos construídos
        para provar conceitos e arquiteturas diretamente neste site.
      </p>
      
      {/* Placeholder para experimentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-zinc-800 bg-zinc-900/50 rounded-xl p-8 min-h-64 flex flex-col justify-center items-center text-zinc-500">
          Experimento 1 entrará aqui (ex: Webhook Demo)
        </div>
        <div className="border border-zinc-800 bg-zinc-900/50 rounded-xl p-8 min-h-64 flex flex-col justify-center items-center text-zinc-500">
          Experimento 2 entrará aqui (ex: API Analytics)
        </div>
      </div>
    </div>
  );
}
