"use client";

import { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden group">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-zinc-800/50 rounded-lg text-zinc-400 group-hover:text-white transition-colors">
              <Folder size={24} />
            </div>
            <div className="flex gap-2">
              {project.repoUrl && (
                <Link href={project.repoUrl} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                  <Github size={20} />
                </Link>
              )}
              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </Link>
              )}
            </div>
          </div>
          
          <h3 className="text-xl font-bold tracking-tight text-zinc-100 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
              {project.year}
            </span>
            <span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
              {project.status}
            </span>
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-zinc-400 text-sm leading-relaxed">
            {project.shortDescription}
          </p>
        </CardContent>
        
        <CardFooter className="flex flex-col items-start gap-4 pt-4 border-t border-zinc-800/50">
          <div className="w-full">
            <p className="text-xs text-zinc-500 mb-2 font-mono">STACK</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 font-mono text-[10px]">
                  {tech}
                </Badge>
              ))}
              {project.stack.length > 4 && (
                <Badge variant="secondary" className="bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 font-mono text-[10px]">
                  +{project.stack.length - 4}
                </Badge>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
