"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay },
});

const STACK = [
  {
    label: "Languages_",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / SASS", "PHP"],
  },
  {
    label: "Frameworks_",
    items: ["React.js", "Vue.js", "Node.js", "Express.js", "jQuery"],
  },
  {
    label: "Styling_",
    items: ["Tailwind CSS", "Bootstrap", "Bulma", "styled-components"],
  },
  {
    label: "Platforms_",
    items: ["Shopify (Liquid)", "WordPress", "NuvemShop", "VTEX", "Mercado Shops", "Firebase"],
  },
  {
    label: "Tools_",
    items: ["Git / GitHub", "Webpack", "Shopify CLI", "CI/CD", "Figma", "SCRUM / Kanban"],
  },
];

const EXPERIENCE = [
  {
    role: "Front-End Developer (Freelancer)",
    company: "Hercules Functional",
    period: "Ago 2024 — Fev 2025",
    bullets: [
      "Layouts WordPress customizados com HTML, CSS, JavaScript e PHP.",
      "Design responsivo com Tailwind CSS — +20% no tempo médio de sessão.",
    ],
  },
  {
    role: "Front-End Developer (PJ)",
    company: "Ecom Solutions / Ecom Labs",
    period: "Out 2022 — Presente",
    bullets: [
      "Construção e otimização de lojas no Mercado Shops com React.js e Express.js.",
      "Redução de 30% no tempo de carregamento mobile via gestão de assets e tuning.",
      "Seções Shopify customizáveis com Liquid e JSON Schema; deploy automatizado via Shopify CLI.",
    ],
  },
  {
    role: "Front-End Developer (Freelancer)",
    company: "Orbe Ecom",
    period: "Jun 2022 — Out 2022",
    bullets: [
      "Integrações Shopify e Cartpanda na plataforma ConvertX usando Liquid.js, HTML, CSS e JavaScript.",
      "Melhorias de usabilidade e design — +15% na taxa de conversão.",
    ],
  },
];

const CERTS = [
  { name: "Full Stack Web Development", issuer: "Programador BR" },
  { name: "Front-End Development (Vue.js)", issuer: "Cod3r" },
  { name: "Front-End Development", issuer: "Staart / Grupo Primo" },
  { name: "JavaScript Algorithms & Data Structures", issuer: "FreeCodeCamp" },
];

export default function SobrePage() {
  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="w-full border-b-[1px] border-border px-6 lg:px-12 py-20 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3333331a_1px,transparent_1px),linear-gradient(to_bottom,#3333331a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

          <div className="lg:col-span-8">
            <motion.p {...fadeUp(0)} className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
              ./sobre —
            </motion.p>
            <motion.h1 {...fadeUp(0.05)} className="font-sans font-black text-[10vw] md:text-[7vw] leading-[0.88] tracking-tighter uppercase text-foreground mb-8">
              DANIEL<br />
              <span className="text-primary">SALGADO.</span>
            </motion.h1>
            <motion.div {...fadeUp(0.1)} className="border-l-2 border-primary pl-6 py-2 max-w-2xl">
              <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest leading-relaxed">
                Full Stack Developer — e-commerce, SaaS &{" "}
                <strong className="text-foreground">produtos digitais escaláveis.</strong>
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <motion.div {...fadeUp(0.15)} className="border-[1px] border-border p-6 font-mono text-xs uppercase tracking-widest space-y-4">
              <p className="text-primary font-bold border-b-[1px] border-border pb-3">Contact_</p>
              <a href="mailto:dansalgaado@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-3 h-3 flex-shrink-0" />
                <span>dansalgaado@gmail.com</span>
              </a>
              <a href="tel:+5521979555251" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-3 h-3 flex-shrink-0" />
                <span>+55 (21) 97955-5251</span>
              </a>
              <a href="https://github.com/Salgaado" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-3 h-3 flex-shrink-0" />
                <span>github.com/Salgaado</span>
              </a>
              <a href="https://linkedin.com/in/daniel-salgado-12831a1a6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-3 h-3 flex-shrink-0" />
                <span>linkedin.com/in/daniel-salgado</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground border-t-[1px] border-border pt-3">
                <MapPin className="w-3 h-3 flex-shrink-0" />
                <span>Brasil — Remote Ready</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── STATEMENT ── */}
      <section className="w-full border-b-[1px] border-border px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div {...fadeUp(0.05)} className="lg:col-span-3">
            <p className="font-mono text-xs text-primary uppercase tracking-widest">01 / Statement_</p>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="lg:col-span-9 space-y-5">
            <p className="font-sans text-lg text-foreground leading-relaxed">
              Sou desenvolvedor Full Stack com trajetória sólida em plataformas de e-commerce, aplicações SaaS e
              arquiteturas headless. Construo interfaces responsivas e integro front-ends com back-ends focando em
              performance e experiência do usuário.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Atualmente na <strong className="text-foreground">Ecom Solutions</strong>, construo e otimizo lojas digitais com React e Express.
              Implementei melhorias que reduziram o tempo de carregamento mobile em <strong className="text-primary">~30%</strong> e
              desenvolvo componentes reutilizáveis para escalar projetos com eficiência.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Acredito em ambientes colaborativos e orientados a produto — trabalho junto a designers, PMs e
              engenheiros para transformar necessidades de negócio em soluções técnicas que geram impacto real.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="w-full border-b-[1px] border-border px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div {...fadeUp(0.05)} className="lg:col-span-3">
              <p className="font-mono text-xs text-primary uppercase tracking-widest">02 / Stack_</p>
            </motion.div>
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-[1px] border-border">
              {STACK.map((group, i) => (
                <motion.div
                  key={group.label}
                  {...fadeUp(0.05 + i * 0.05)}
                  className="p-6 border-b-[1px] border-r-[1px] border-border last:border-r-0"
                >
                  <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-4 font-bold">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[10px] uppercase tracking-wider border-[1px] border-border text-muted-foreground px-2 py-1 hover:border-primary hover:text-primary transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="w-full border-b-[1px] border-border px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div {...fadeUp(0.05)} className="lg:col-span-3">
              <p className="font-mono text-xs text-primary uppercase tracking-widest">03 / Experiência_</p>
            </motion.div>
            <div className="lg:col-span-9 space-y-0 border-[1px] border-border">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  {...fadeUp(0.05 + i * 0.07)}
                  className="p-8 border-b-[1px] border-border last:border-b-0 group hover:bg-primary/5 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-mono font-bold text-foreground uppercase tracking-wider text-sm group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-xs text-primary uppercase tracking-widest mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest border-[1px] border-border px-3 py-1 h-fit whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                        <span className="text-primary mt-1 flex-shrink-0">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION + CERTS ── */}
      <section className="w-full border-b-[1px] border-border px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 border-[1px] border-border">

          {/* Education */}
          <motion.div {...fadeUp(0.05)} className="p-8 border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-border">
            <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-6 font-bold">04 / Educação_</p>
            <div className="space-y-2">
              <h3 className="font-mono font-bold text-foreground uppercase tracking-wider text-sm">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                Faculdade Impacta
              </p>
              <span className="inline-block font-mono text-[10px] text-muted-foreground border-[1px] border-border px-3 py-1 mt-2 uppercase tracking-widest">
                Previsão: Jun 2027
              </span>
            </div>

            <div className="mt-8 pt-8 border-t-[1px] border-border">
              <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-4 font-bold">Idiomas_</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest">
                  <span className="text-muted-foreground">Português</span>
                  <span className="text-foreground font-bold border-[1px] border-primary px-2 py-0.5 text-primary text-[10px]">Nativo</span>
                </div>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest">
                  <span className="text-muted-foreground">English</span>
                  <span className="text-foreground font-bold border-[1px] border-border px-2 py-0.5 text-[10px]">Intermediário</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div {...fadeUp(0.1)} className="p-8">
            <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-6 font-bold">05 / Certificações_</p>
            <div className="space-y-4">
              {CERTS.map((cert, i) => (
                <div key={cert.name} className="flex items-start gap-4 pb-4 border-b-[1px] border-border last:border-b-0 last:pb-0">
                  <span className="font-mono text-[10px] text-primary mt-0.5 flex-shrink-0">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <div>
                    <p className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">{cert.name}</p>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full px-6 lg:px-12 py-20">
        <motion.div {...fadeUp(0.05)} className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">Disponível para novos projetos</p>
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tighter uppercase text-foreground">
              Vamos <span className="text-primary">construir</span> algo?
            </h2>
          </div>
          <Link
            href="/contato"
            className="group relative inline-flex items-center justify-center font-mono text-xs font-bold uppercase tracking-widest"
          >
            <span className="absolute inset-0 bg-primary translate-y-1 translate-x-1 transition-transform group-hover:translate-y-2 group-hover:translate-x-2" />
            <span className="relative border-[1px] border-foreground bg-background text-foreground group-hover:text-primary px-8 py-4 flex items-center gap-3 transition-colors">
              Init_Contact() <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
