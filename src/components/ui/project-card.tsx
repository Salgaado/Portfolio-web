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
      <Card className="h-full flex flex-col bg-background border-[1px] border-border hover:border-primary transition-colors overflow-hidden group rounded-none">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 border-[1px] border-border text-muted-foreground group-hover:text-primary group-hover:border-primary transition-colors">
              <Folder size={24} />
            </div>
            <div className="flex gap-2">
              {project.repoUrl && (
                <Link href={project.repoUrl} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={20} />
                </Link>
              )}
              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={20} />
                </Link>
              )}
            </div>
          </div>
          
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors font-mono uppercase">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs font-mono font-bold text-muted-foreground border-[1px] border-border px-2 py-1">
              [ {project.year} ]
            </span>
            <span className="text-xs font-mono font-bold text-muted-foreground border-[1px] border-border px-2 py-1">
              {project.status.toUpperCase()}
            </span>
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm font-sans">
            {project.shortDescription}
          </p>
        </CardContent>
        
        <CardFooter className="flex flex-col items-start gap-4 pt-4 border-t-[1px] border-border">
          <div className="w-full">
            <p className="text-xs text-primary mb-2 font-mono font-bold tracking-widest uppercase">Stack_</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="rounded-none bg-background border-[1px] border-border hover:border-primary hover:bg-primary/10 text-foreground font-mono text-[10px] uppercase tracking-wider">
                  {tech}
                </Badge>
              ))}
              {project.stack.length > 4 && (
                <Badge variant="secondary" className="rounded-none bg-background border-[1px] border-border hover:border-primary hover:bg-primary/10 text-muted-foreground font-mono text-[10px] uppercase tracking-wider">
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
