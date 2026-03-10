"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "[ INÍCIO ]", href: "/" },
  { name: "[ SOBRE ]", href: "/sobre" },
  { name: "[ PROJETOS ]", href: "/projetos" },
  { name: "[ BLOG ]", href: "/blog" },
  { name: "[ LAB ]", href: "/lab" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b-[1px] border-border bg-background">
      <nav className="mx-auto flex w-full items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        
        {/* Logo / Nome */}
        <div className="flex lg:flex-1">
          <Link href="/" className="group flex items-center gap-2">
            <span className="bg-primary text-primary-foreground font-mono font-bold px-2 py-1 text-sm tracking-tighter">
              SYS
            </span>
            <span className="font-sans font-black text-xl tracking-tighter uppercase text-foreground group-hover:text-primary transition-colors">
              Daniel Salgado
            </span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center border-[1px] border-border p-2 text-foreground hover:bg-primary hover:text-primary-foreground focus:outline-none transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-mono text-xs font-semibold tracking-widest uppercase px-2 py-1 transition-all ${
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-primary hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            href="/contato" 
            className="group relative inline-flex items-center justify-center font-mono text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-foreground transition-colors"
          >
            <span className="absolute inset-0 border-[1px] border-primary group-hover:bg-primary transition-colors"></span>
            <span className="relative px-6 py-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary group-hover:bg-primary-foreground animate-pulse"></span>
              Init_Contact()
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 z-50 bg-background border-b-[1px] border-border h-max pb-6"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b-[1px] border-border">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <span className="bg-primary text-primary-foreground font-mono font-bold px-2 py-1 text-sm tracking-tighter">
                  SYS
                </span>
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center border-[1px] border-border p-2 text-foreground hover:bg-destructive hover:text-destructive-foreground focus:outline-none transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            
            <div className="mt-6 px-6">
              <div className="space-y-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block font-mono text-sm tracking-widest uppercase border-[1px] p-4 transition-colors ${
                        isActive 
                          ? "border-primary bg-primary/10 text-primary" 
                          : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                
                <Link
                  href="/contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mt-8 w-full text-center bg-primary text-primary-foreground font-mono text-sm font-bold tracking-widest uppercase p-4"
                >
                  Init_Contact()
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
