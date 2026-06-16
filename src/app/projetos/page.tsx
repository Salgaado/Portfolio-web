"use client";

import { MOCK_PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const FILTER_TABS = [
  { label: "All_()", value: "all" },
  { label: "SaaS", value: "saas" },
  { label: "E-Commerce", value: "e-commerce" },
  { label: "Automação", value: "automacao" },
  { label: "Institucional", value: "institucional" },
  { label: "Lab", value: "lab" },
];

export default function ProjetosPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? MOCK_PROJECTS
    : MOCK_PROJECTS.filter((p) =>
        p.type.some((t) => t.slug === activeFilter)
      );

  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden">

      {/* Page Header */}
      <section className="w-full border-b-[1px] border-border px-6 lg:px-12 py-16 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3333331a_1px,transparent_1px),linear-gradient(to_bottom,#3333331a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            ./projetos —
          </p>
          <h1 className="font-sans font-black text-[8vw] md:text-[6vw] leading-[0.9] tracking-tighter uppercase text-foreground mb-8">
            CASES &<br />
            <span className="text-primary">BUILDS.</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex gap-8 font-mono text-xs uppercase tracking-widest">
              <div>
                <span className="text-muted-foreground">Total_</span>
                <span className="text-primary font-bold ml-2">{MOCK_PROJECTS.length}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Públicos_</span>
                <span className="text-foreground font-bold ml-2">
                  {MOCK_PROJECTS.filter(p => p.repoUrl).length}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Live_</span>
                <span className="text-foreground font-bold ml-2">
                  {MOCK_PROJECTS.filter(p => p.liveUrl).length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Banner */}
      <section className="w-full border-b-[1px] border-border px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="https://github.com/Salgaado"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-5 hover:bg-primary/5 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 border-[1px] border-border group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Open Source
                </p>
                <p className="font-mono font-bold text-foreground group-hover:text-primary transition-colors uppercase tracking-wider text-sm">
                  github.com/Salgaado — Ver todos os repositórios
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors hidden sm:block" />
          </Link>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="w-full border-b-[1px] border-border px-6 lg:px-12 sticky top-[65px] z-40 bg-background">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-0 py-0 w-max min-w-full">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`font-mono text-[10px] uppercase tracking-widest px-5 py-4 border-r-[1px] border-border transition-all whitespace-nowrap ${
                  activeFilter === tab.value
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <div className="flex-1 border-l-0" />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-primary translate-y-2 translate-x-2 transition-transform group-hover:translate-y-3 group-hover:translate-x-3 pointer-events-none" />
                <div className="relative bg-background border-[1px] border-border h-full transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                  <ProjectCard project={project} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-mono text-muted-foreground uppercase tracking-widest text-xs">
                [ No results for this filter ]
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
