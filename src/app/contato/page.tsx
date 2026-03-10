import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Daniel Salgado",
  description: "Entre em contato comigo para parcerias, projetos e conversas em geral.",
};

export default function ContatoPage() {
  return (
    <div className="container mx-auto px-6 max-w-3xl py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Contato</h1>
      <p className="text-lg text-zinc-400 mb-12">
        Aberto para discutir como posso ajudar a tirar o seu próximo produto 
        digital, e-commerce ou SaaS do papel.
      </p>
      
      {/* Placeholder para formulário */}
      <div className="border border-zinc-800 bg-zinc-900/50 rounded-xl p-12 mb-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Nome</label>
            <input type="text" id="name" className="w-full bg-background border border-zinc-800 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Seu nome" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
            <input type="email" id="email" className="w-full bg-background border border-zinc-800 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="seu@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Mensagem</label>
            <textarea id="message" rows={5} className="w-full bg-background border border-zinc-800 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Como posso ajudar?"></textarea>
          </div>
          <button type="button" className="w-full bg-white text-zinc-950 font-semibold py-3 rounded-md hover:bg-zinc-200 transition-colors">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
