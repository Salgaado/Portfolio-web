import React from "react";
import { Button } from "@/components/ui/button";
import { MOCK_PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export default function Home() {
  const featuredProjects = MOCK_PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <main className="flex min-h-screen flex-col items-center bg-background w-full overflow-x-hidden pt-16">
      
      {/* Hero Section - 90/10 Asymmetric Topology */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-center border-b-[1px] border-border overflow-hidden">
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3333331a_1px,transparent_1px),linear-gradient(to_bottom,#3333331a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="relative z-10 w-full px-6 lg:px-12 pt-20 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 90% Column: Massive Typography  */}
          <div className="lg:col-span-9 flex flex-col justify-end">
            <h1 className="font-sans font-black text-[12vw] leading-[0.85] tracking-tighter uppercase text-foreground mb-6">
              SYSTEM<br />
              <span className="text-primary">BUILDER.</span>
            </h1>
            
            <div className="max-w-2xl border-l-2 border-primary pl-6 py-2">
              <p className="font-mono text-sm md:text-base text-muted-foreground uppercase tracking-widest leading-relaxed">
                Eu não &quot;faço sites&quot;. Eu estruturo <br className="hidden md:block"/>
                <strong className="text-foreground">experiências, fluxos, integrações</strong> <br className="hidden md:block"/>
                e <strong className="text-accent">produtos escaláveis</strong>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-12 w-full max-w-lg">
               <Link href="/projetos" className="w-full">
                <Button 
                  size="lg" 
                  className="w-full relative group bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-mono font-bold uppercase tracking-widest text-xs h-16 rounded-none border-none"
                >
                  <span className="flex items-center gap-2">
                    Execute_Projects() <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          
          {/* 10% Column: Tech Info Sidebar */}
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-end items-end pb-8">
             <div className="flex flex-col gap-6 w-full max-w-[240px] border-[1px] border-border bg-background p-6">
                <div className="flex items-center gap-3 border-b-[1px] border-border pb-4 w-full">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Status</span>
                </div>
                
                <div className="space-y-4 font-mono text-xs uppercase tracking-widest">
                  <div className="flex justify-between w-full">
                    <span className="text-muted-foreground">Class:</span>
                    <span className="text-foreground font-bold">Senior</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span className="text-muted-foreground">Stack:</span>
                    <span className="text-primary font-bold">Full/Arch</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-foreground font-bold">BR/Remote</span>
                  </div>
                </div>
             </div>
          </div>
          
        </div>
      </section>

      {/* Destaques Section - Neo-brutalist Strict Grid */}
      <section className="w-full py-24 px-6 lg:px-12 border-b-[1px] border-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b-[1px] border-border pb-6">
          <div className="max-w-2xl">
            <h2 className="font-sans font-black text-4xl md:text-5xl tracking-tighter uppercase text-foreground mb-4">
               Trabalhos <span className="text-primary">Recentes</span>
            </h2>
            <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
              SaaS Labs / E-Commerce Systems / AI Tooling
            </p>
          </div>
          <Link href="/projetos" className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors">
            [ Read_All() ] <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="relative group">
              <div className="absolute inset-0 bg-primary translate-y-2 translate-x-2 transition-transform group-hover:translate-y-3 group-hover:translate-x-3 pointer-events-none" />
              <div className="relative bg-background border-[1px] border-border h-full transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 sm:hidden flex w-full">
           <Link href="/projetos" className="w-full">
              <Button className="w-full h-14 rounded-none border-[1px] border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest transition-colors">
                 [ Load_More_Projects ]
              </Button>
            </Link>
        </div>
      </section>
    </main>
  );
}
