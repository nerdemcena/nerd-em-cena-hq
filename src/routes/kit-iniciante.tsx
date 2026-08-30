import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  Gamepad2,
  Map,
  Shield,
  Scroll,
  CheckCircle,
  Loader2,
  ArrowLeft,
  ArrowRight,
  Download,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

// Kit assets
const kitPdf = { url: "/assets-v1/kit-iniciante.pdf" };
const livroCapa = { url: "/assets-v1/livro-teatro-rpg-capa.png" };

// =========================================================
// CONFIGURAÇÕES DO EMAILJS (mesmas do site original)
// =========================================================
const EMAILJS_SERVICE_ID = "service_rh1ougl";
const EMAILJS_TEMPLATE_ID = "template_2165vw5";
const EMAILJS_PUBLIC_KEY = "LAwMgLmFx_CiZBsFB";

// Planilha (SheetMonkey) — mesma do site original
const SHEET_DB_URL = "https://api.sheetmonkey.io/form/b9t6pnuKaJSRRR3X2FbcB1";

export const Route = createFileRoute("/kit-iniciante")({
  head: () => ({
    meta: [
      { title: "Teatro-RPG Kit Iniciante — Baixe grátis" },
      {
        name: "description",
        content:
          "Baixe grátis o Kit Iniciante de Teatro-RPG: ficha de personagem exclusiva, guia de 2 jogos práticos e uma aventura base para começar hoje mesmo.",
      },
      { property: "og:title", content: "Teatro-RPG Kit Iniciante — Baixe grátis" },
      {
        property: "og:description",
        content:
          "Ficha de personagem, 2 jogos práticos e uma aventura base. Tudo que você precisa para iniciar uma aventura de Teatro-RPG.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Cinzel:wght@400;700;900&display=swap",
      },
    ],
  }),
  component: KitIniciantePage,
});

// Custom D20 Icon Component for background decoration
function D20Icon({
  size = 60,
  stroke = "#D64585",
  className = "",
}: {
  size?: number;
  stroke?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke={stroke}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Outer Hexagon */}
      <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" />
      {/* Center Lines */}
      <path d="M50 5 L50 50" />
      <path d="M90 25 L50 50" />
      <path d="M90 75 L50 50" />
      <path d="M50 95 L50 50" />
      <path d="M10 75 L50 50" />
      <path d="M10 25 L50 50" />
      {/* Inner Triangle effect for depth */}
      <path d="M10 25 L90 25 L50 95 Z" opacity="0.5" />
    </svg>
  );
}

function KitIniciantePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // 1. Envia o e-mail (EmailJS) — import dinâmico para não quebrar o SSR
      const emailjs = await import("@emailjs/browser");
      const emailPromise = emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: formData.name,
          to_email: formData.email,
          email: formData.email,
          phone: formData.phone,
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY,
      );

      // 2. Salva na Planilha (se configurada)
      let sheetPromise: Promise<unknown> = Promise.resolve();
      if (SHEET_DB_URL && SHEET_DB_URL.startsWith("http")) {
        sheetPromise = fetch(SHEET_DB_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            created_at: new Date().toLocaleString("pt-BR"),
          }),
        });
      }

      await Promise.all([emailPromise, sheetPromise]);

      console.log("Form Submitted Successfully:", formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send data:", error);
      alert(
        "Houve um pequeno problema ao convocar os corvos. Verifique sua conexão e tente novamente.",
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="font-body-kit min-h-screen bg-[#FB8CBF] bg-grid-pattern relative overflow-hidden flex items-center justify-center p-4">
      <h1 className="sr-only">Kit Iniciante de Teatro-RPG — Download gratuito</h1>

      {/* RPG Background Elements */}
      <div className="absolute top-10 left-10 opacity-30 animate-float pointer-events-none">
        <D20Icon size={80} stroke="#9D174D" />
      </div>

      <div className="absolute top-20 right-20 opacity-30 animate-float-delayed pointer-events-none">
        <Shield size={70} color="#9D174D" strokeWidth={1.5} />
      </div>

      <div className="absolute bottom-20 left-20 opacity-30 animate-float-delayed pointer-events-none">
        <Scroll size={60} color="#9D174D" strokeWidth={1.5} />
      </div>

      <div className="absolute bottom-10 right-10 opacity-30 animate-float pointer-events-none">
        <D20Icon size={100} stroke="#9D174D" className="rotate-12" />
      </div>

      {/* Main Card - Parchment Style */}
      <div className="bg-[#FFFAF0] w-full max-w-2xl border-[4px] border-[#2D1B2E] shadow-[8px_8px_0px_0px_rgba(45,27,46,1)] p-6 sm:p-8 relative z-10 my-4 rounded-sm transition-all duration-500">
        {/* Decorative Corner Rivets */}
        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#2D1B2E] opacity-50" />
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#2D1B2E] opacity-50" />
        <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#2D1B2E] opacity-50" />
        <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#2D1B2E] opacity-50" />

        {!submitted ? (
          <>
            {/* Header Section */}
            <div className="flex flex-col items-center mb-6">
              <div className="flex flex-col items-center text-center w-full mb-6 gap-2">
                <p className="text-2xl md:text-3xl font-rpg text-[#2D1B2E] tracking-tight whitespace-normal sm:whitespace-nowrap drop-shadow-sm font-bold leading-tight">
                  Pronto para começar sua aventura?
                </p>
                <p className="text-xl md:text-2xl font-rpg text-[#D64585] whitespace-normal sm:whitespace-nowrap font-bold leading-tight">
                  Baixe o Kit Iniciante de Teatro-RPG
                </p>
              </div>

              {/* Benefits Box - Stat Block Style */}
              <div className="w-full bg-[#FDF2D0] border-[3px] border-[#2D1B2E] p-5 shadow-[4px_4px_0px_0px_rgba(45,27,46,0.3)] transform rotate-1 hover:rotate-0 transition-transform duration-300 mt-2 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2D1B2E] text-[#FDF2D0] px-4 py-1 text-xs font-bold uppercase tracking-widest font-rpg rounded-sm">
                  Inventário do Kit
                </div>

                <ul className="space-y-4 mt-2">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#FF9DE2] border-2 border-[#2D1B2E] p-1 shadow-[2px_2px_0px_0px_rgba(45,27,46,1)] shrink-0 mt-1">
                      <FileText size={18} className="text-[#2D1B2E]" />
                    </div>
                    <p className="text-sm leading-snug text-[#2D1B2E]">
                      <span className="font-bold block text-base mb-0.5 font-rpg">
                        Ficha de Personagem Exclusiva:
                      </span>
                      Um modelo simples para organizar ideias, habilidades e até os medos dos
                      personagens.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#6BC5FF] border-2 border-[#2D1B2E] p-1 shadow-[2px_2px_0px_0px_rgba(45,27,46,1)] shrink-0 mt-1">
                      <Gamepad2 size={18} className="text-[#2D1B2E]" />
                    </div>
                    <p className="text-sm leading-snug text-[#2D1B2E]">
                      <span className="font-bold block text-base mb-0.5 font-rpg">
                        Guia de 2 Jogos Práticos:
                      </span>
                      Instruções para as dinâmicas que treinam foco, prontidão e aquecem para o
                      jogo.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#FFB86B] border-2 border-[#2D1B2E] p-1 shadow-[2px_2px_0px_0px_rgba(45,27,46,1)] shrink-0 mt-1">
                      <Map size={18} className="text-[#2D1B2E]" />
                    </div>
                    <p className="text-sm leading-snug text-[#2D1B2E]">
                      <span className="font-bold block text-base mb-0.5 font-rpg">
                        Uma Aventura Base:
                      </span>
                      Um pequeno mundo para criar sua aventura a partir dele.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="border-t-2 border-[#2D1B2E] mb-8 border-dashed opacity-50" />

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#2D1B2E] font-bold mb-1 ml-1 text-sm uppercase tracking-wider font-rpg"
                >
                  Nome do Jogador <span className="text-[#D64585]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSending}
                    className="w-full bg-white border-[2px] border-[#2D1B2E] p-3 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(214,69,133,1)] transition-all placeholder:text-gray-400 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                    placeholder="Seu nome completo"
                  />
                  <User
                    className="absolute right-3 top-3.5 text-gray-400 pointer-events-none"
                    size={20}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#2D1B2E] font-bold mb-1 ml-1 text-sm uppercase tracking-wider font-rpg"
                >
                  Pergaminho de Contato (E-mail) <span className="text-[#D64585]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSending}
                    className="w-full bg-white border-[2px] border-[#2D1B2E] p-3 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(214,69,133,1)] transition-all placeholder:text-gray-400 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                    placeholder="exemplo@email.com"
                  />
                  <Mail
                    className="absolute right-3 top-3.5 text-gray-400 pointer-events-none"
                    size={20}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-[#2D1B2E] font-bold mb-1 ml-1 text-sm uppercase tracking-wider font-rpg"
                >
                  Telefone (Opcional)
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSending}
                    className="w-full bg-white border-[2px] border-[#2D1B2E] p-3 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(214,69,133,1)] transition-all placeholder:text-gray-400 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                    placeholder="(00) 00000-0000"
                  />
                  <Phone
                    className="absolute right-3 top-3.5 text-gray-400 pointer-events-none"
                    size={20}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full bg-[#2D1B2E] text-white font-black text-xl py-5 border-[2px] border-[#2D1B2E] shadow-[6px_6px_0px_0px_#FF9DE2] hover:shadow-[3px_3px_0px_0px_#FF9DE2] hover:translate-y-1 hover:translate-x-1 transition-all flex items-center justify-center gap-2 font-rpg tracking-widest uppercase disabled:opacity-80 disabled:cursor-wait ${isSending ? "translate-y-1 translate-x-1 shadow-none" : ""}`}
              >
                {isSending ? (
                  <>
                    <span className="hidden sm:inline">Enviando Corvos...</span>
                    <span className="sm:hidden">Enviando...</span>
                    <Loader2 className="animate-spin sm:size-6 size-4" />
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">Iniciar Aventura (Baixar)</span>
                    <span className="sm:hidden">Baixar Kit</span>
                    <Download className="sm:size-6 size-4" strokeWidth={3} />
                  </>
                )}
              </button>
            </form>

            {/* Separator for Secondary Actions */}
            <div className="mt-8 pt-6 border-t-2 border-[#2D1B2E] border-dashed opacity-50 flex flex-col gap-2">
              <div className="flex justify-between gap-3">
                <a
                  href="https://ig.me/m/nerdemcenaoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-transparent border border-[#2D1B2E] py-2 px-1 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm font-rpg text-[#2D1B2E] no-underline opacity-60 hover:opacity-100 hover:bg-[#2D1B2E] hover:text-white transition-all rounded-sm"
                >
                  <span>Direct (Instagram)</span> <MessageSquare size={16} />
                </a>
                <a
                  href="mailto:contato.nerdemcena@gmail.com"
                  className="flex-1 bg-transparent border border-[#2D1B2E] py-2 px-1 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm font-rpg text-[#2D1B2E] no-underline opacity-60 hover:opacity-100 hover:bg-[#2D1B2E] hover:text-white transition-all rounded-sm"
                >
                  <span>E-mail</span> <Mail size={16} />
                </a>
              </div>
            </div>
          </>
        ) : (
          /* Success Screen */
          <div className="flex flex-col items-center text-center animate-pulse-slow py-8 px-4">
            <div className="mb-6 relative">
              <div className="absolute inset-0 blur-xl opacity-50 rounded-full bg-green-200" />
              <CheckCircle size={80} className="text-green-600 relative z-10" strokeWidth={1.5} />
            </div>

            <h2 className="text-3xl md:text-4xl font-rpg text-[#2D1B2E] font-bold mb-8 leading-tight">
              Sua aventura já vai começar!
            </h2>

            <div className="bg-[#FDF2D0] border-2 border-[#2D1B2E] p-6 mb-8 shadow-[4px_4px_0px_0px_rgba(45,27,46,0.2)] w-full relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2D1B2E] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest font-rpg rounded-sm">
                Missão Aceita
              </div>
              <p className="text-[#2D1B2E] text-lg leading-relaxed">
                Seu{" "}
                <span className="font-bold font-rpg text-[#D64585]">
                  Kit do Aventureiro Iniciante
                </span>{" "}
                já está a caminho do seu e-mail.
                <br />
                <br />
                Em alguns minutos você receberá o material com a ficha, os jogos e a aventura base
                para começar.
                <br />
                <span className="text-sm text-gray-600 mt-2 block font-bold">
                  (Confere o Spam também! 😉)
                </span>
              </p>
            </div>

            <div className="bg-white border-[3px] border-[#D64585] p-6 mb-8 shadow-[6px_6px_0px_0px_#D64585] relative w-full transform hover:scale-[1.02] transition-transform duration-300 mt-6">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D64585] text-white px-4 py-1 text-sm font-bold uppercase tracking-widest font-rpg rounded-sm whitespace-nowrap shadow-sm">
                Oferta Especial
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                {/* Book Cover */}
                <Link to="/ebooks/teatro-rpg" className="shrink-0 group cursor-pointer">
                  <div className="w-32 h-44 bg-[#2D1B2E] flex flex-col items-center justify-center text-[#FDF2D0] shadow-md border-2 border-[#2D1B2E] relative overflow-hidden rounded-sm">
                    <img
                      src={livroCapa.url}
                      alt="Capa do Livro Como Ensinar Teatro com RPG"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </Link>

                <div className="text-left flex-1 flex flex-col items-center md:items-start">
                  <h3 className="text-xl font-bold text-[#2D1B2E] font-rpg mb-2 leading-tight text-center md:text-left">
                    Quer ir além do Kit Iniciante?
                  </h3>
                  <p className="text-[#2D1B2E] text-sm mb-5 leading-relaxed text-center md:text-left">
                    Descubra o método completo no livro{" "}
                    <span className="font-bold text-[#D64585]">"Como Ensinar Teatro com RPG"</span>{" "}
                    e transforme o ensino em aventuras inesquecíveis.
                  </p>

                  <Link
                    to="/ebooks/teatro-rpg"
                    className="inline-flex items-center justify-center gap-2 bg-[#D64585] text-white font-bold py-3 px-6 border-[2px] border-[#2D1B2E] shadow-[4px_4px_0px_0px_#2D1B2E] hover:shadow-[2px_2px_0px_0px_#2D1B2E] hover:translate-y-1 hover:translate-x-1 transition-all font-rpg tracking-wider text-sm uppercase w-full md:w-auto text-center no-underline rounded-sm group"
                  >
                    <span>Ver o Livro Completo</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <a
              href={kitPdf.url}
              download="KitIniciante.pdf"
              className="bg-[#D64585] text-white font-bold py-3 px-12 border-[2px] border-[#2D1B2E] shadow-[4px_4px_0px_0px_#2D1B2E] hover:shadow-[2px_2px_0px_0px_#2D1B2E] hover:translate-y-1 hover:translate-x-1 transition-all flex items-center justify-center gap-2 font-rpg tracking-wider text-sm uppercase mb-6 no-underline rounded-sm group w-full md:w-auto"
            >
              <span className="hidden sm:inline">BAIXAR KIT INICIANTE (PDF)</span>
              <span className="sm:hidden">BAIXAR KIT (PDF)</span>
              <Download className="sm:size-6 size-4" strokeWidth={3} />
            </a>

            <button
              onClick={handleReset}
              className="bg-[#2D1B2E] text-white font-bold py-3 px-6 border-[2px] border-[#2D1B2E] shadow-[4px_4px_0px_0px_#FF9DE2] hover:shadow-[2px_2px_0px_0px_#FF9DE2] hover:translate-y-1 hover:translate-x-1 transition-all flex items-center justify-center gap-2 font-rpg tracking-wider mx-auto text-sm"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Voltar (Nova Aventura)</span>
              <span className="sm:hidden">Voltar</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
