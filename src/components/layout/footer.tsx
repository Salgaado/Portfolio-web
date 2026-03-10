import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 bg-background mt-auto">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold tracking-tighter mb-4">DANIEL SALGADO</h3>
            <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">
              Builder de soluções digitais focado em e-commerce, SaaS e experiências web conversoras.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 text-zinc-300">Navegação</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre Mim</Link></li>
              <li><Link href="/projetos" className="hover:text-white transition-colors">Projetos</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/lab" className="hover:text-white transition-colors">Lab / Experimentos</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 text-zinc-300">Conectar</h3>
            <div className="flex space-x-4 text-zinc-500">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
              <a href="mailto:contato@exemplo.com" className="hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Daniel Salgado. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span>Construído com Next.js, Tailwind e Antigravity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
