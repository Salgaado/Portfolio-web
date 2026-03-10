import React from "react";
import { Button } from "@/components/ui/button";
import { MOCK_PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import Link from "next/link";

export default function Home() {
  const featuredProjects = MOCK_PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-24 px-6 md:py-32 flex flex-col items-center justify-center border-b border-white/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/50 via-background to-background">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col gap-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
            Daniel Salgado
          </h1>
          <p className="text-xl md:text-2xl text-center text-zinc-400 max-w-3xl leading-relaxed font-sans">
            Builder de soluções digitais. Eu não apenas construo interfaces. Eu
            estruturo experiências, fluxos, integrações e produtos que
            resolvem problemas reais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/projetos">
              <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all font-semibold">
                Explorar Projetos
              </Button>
            </Link>
            <Link href="/contato">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 py-6 rounded-full border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all font-semibold bg-transparent">
                Entrar em Contato
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Destaques Section */}
      <section className="w-full py-24 px-6 max-w-7xl mx-auto font-sans">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Trabalhos em Destaque</h2>
            <p className="text-zinc-500">SaaS, E-commerces e Integrações.</p>
          </div>
          <Link href="/projetos" className="hidden sm:inline-flex text-sm font-medium text-zinc-400 hover:text-white group">
            Ver todos <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-8 sm:hidden flex justify-center">
           <Link href="/projetos">
              <Button variant="outline" className="rounded-full bg-transparent border-zinc-800 text-zinc-400">
                Ver todos os projetos
              </Button>
            </Link>
        </div>
      </section>
    </main>
  );
}
