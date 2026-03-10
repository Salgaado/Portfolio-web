"use client";

import { MOCK_PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { motion } from "framer-motion";

export default function ProjetosPage() {
  return (
    <div className="container mx-auto px-6 max-w-7xl py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">Projetos & Cases</h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Explore os e-commerces, sistemas SaaS e experimentações que criei ao longo 
            da minha carreira. Filtre por stack e plataforma.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
