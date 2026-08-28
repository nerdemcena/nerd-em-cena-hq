import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Instagram,
  Mail,
  MessageSquare,
  Play,
  Youtube,
} from "lucide-react";

import { NerdLogo } from "@/components/nerd-logo";
import { CONTACT, SOCIAL_LINKS } from "@/lib/links";

export const Route = createFileRoute("/midiakit")({
  head: () => ({
    meta: [
      { title: "Nerd em Cena — Mídia Kit 2026" },
      {
        name: "description",
        content:
          "Mídia kit do Nerd em Cena: 21 mil seguidores, 13,39% de engajamento, cobertura de eventos, curiosidades e humor sobre animes, games e cultura pop.",
      },
      { property: "og:title", content: "Nerd em Cena — Mídia Kit 2026" },
      {
        property: "og:description",
        content:
          "Números reais, audiência e entregáveis de cobertura do @nerdemcenaoficial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MidiaKitPage,
});

const HERO_TAGS = [
  "Animes",
  "Games",
  "Cultura Pop",
  "CNPJ 60.907.624/0001-19",
  "Emite NF",
];

const AGE_RANGES = [
  { label: "18–24", value: 13, width: "40%" },
  { label: "25–34", value: 29, width: "90%" },
  { label: "35–44", value: 32, width: "100%" },
  { label: "45–54", value: 16, width: "50%" },
  { label: "55–64", value: 6, width: "20%" },
];

const CONTENT_TAGS = [
  "Cobertura de eventos",
  "Curiosidades",
  "Entretenimento",
  "Humor",
  "Bastidores",
];

export function MidiaKitPage() {
  return (
    <div className="min-h-screen bg-blk font-nunito text-wh selection:bg-y selection:text-blk">
      {/* HEADER AMARELO */}
      <header className="relative overflow-hidden border-b-[5px] border-blk bg-y py-12 pb-10">
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.04),rgba(0,0,0,0.04)1px,transparent_1px,transparent_12px)]" />
        <div className="relative z-10 mx-auto max-w-[960px] px-6">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 font-bebas text-[0.85rem] uppercase tracking-[0.2em] text-blk/70 transition-colors hover:text-blk"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para os links
          </Link>

          <div className="grid grid-cols-1 items-center gap-7 sm:grid-cols-[auto_1fr]">
            <Link
              to="/"
              aria-label="Voltar para a página inicial"
              className="mx-auto block h-[112px] w-[112px] shrink-0 overflow-hidden rounded-full border-[4px] border-y bg-blk2 p-2 shadow-[0_0_0_6px_rgba(232,191,20,0.12)] transition-transform hover:scale-105 sm:mx-0"
            >
              <NerdLogo className="h-full w-full rounded-full object-contain" />
            </Link>

            <div className="text-center sm:text-left">
              <h1 className="mb-2 font-bangers text-[clamp(2.6rem,6vw,4.2rem)] leading-[0.92] tracking-[0.04em] text-blk">
                Nerd em Cena
                <br />
                Mídia Kit 2026
              </h1>
              <div className="mb-3 font-bebas text-[0.9rem] tracking-[0.2em] text-black/55">
                @nerdemcenaoficial · Parcerias e Patrocínios
              </div>
              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                {HERO_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[3px] bg-blk px-3 py-1 font-bebas text-[0.7rem] tracking-[0.14em] text-y"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL COM FUNDO DE PONTOS */}
      <div className="dots-bg bg-blk">
        {/* SEÇÃO 1: NÚMEROS REAIS */}
        <section id="numbers" className="border-b border-y/10 bg-black/40 py-16">
          <div className="mx-auto max-w-[960px] px-6">
            <div className="mb-11">
              <span className="mb-2 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org">
                // dados verificados · Instagram Insights · mai 2026
              </span>
              <h2 className="font-bangers text-[clamp(2.6rem,7vw,4.2rem)] leading-[0.95] text-wh">
                Números <span className="text-y">reais</span>
              </h2>
            </div>

            {/* CARDS PRINCIPAIS (SEGUIDORES + ENGAJAMENTO) */}
            <div className="mb-5 grid w-full gap-5 md:grid-cols-2">
              {/* Instagram */}
              <div className="relative -rotate-1 rounded-[18px] border-2 !border-t-4 border-dashed border-y/20 !border-t-y bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:-rotate-1 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]">
                <div className="absolute -top-2 left-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" />
                <div className="absolute -top-2 right-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" />
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-y/20 px-3.5 py-1.5 font-bebas text-[0.8rem] uppercase tracking-[0.15em] text-mut">
                  <Instagram className="h-3.5 w-3.5" /> Instagram
                </div>
                <span className="block font-bangers text-[4.5rem] leading-[0.9] text-wh drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
                  21.148
                </span>
                <div className="mb-6 mt-1 font-bebas text-[1rem] uppercase tracking-[0.18em] text-mut">
                  Seguidores
                </div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-org/30 bg-org/15 px-3.5 py-2 text-[0.85rem] font-bold text-org">
                  ↑ +2.245 em 30 dias (+9,5%)
                </div>
                <div className="text-[0.8rem] font-semibold text-mut">
                  Crescimento constante no nicho
                </div>
              </div>

              {/* Taxa de Engajamento */}
              <div className="relative h-full rotate-1 rounded-[18px] border-2 !border-t-4 border-dashed border-y/20 !border-t-org bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:rotate-1 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]">
                <div className="absolute -top-2 left-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" />
                <div className="absolute -top-2 right-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" />
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-y/20 px-3.5 py-1.5 font-bebas text-[0.8rem] uppercase tracking-[0.15em] text-mut">
                  <MessageSquare className="h-3.5 w-3.5" /> Taxa de Engajamento
                </div>
                <span className="block font-bangers text-[5rem] leading-[0.9] text-org drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">
                  13,39%
                </span>
                <span className="my-5 inline-flex items-center gap-1.5 rounded-full border-transparent bg-y px-3.5 py-1.5 font-bebas text-[0.82rem] uppercase tracking-[0.15em] text-blk">
                  EXCEPCIONAL
                </span>
                <div className="text-[0.85rem] leading-[1.6] text-mut">
                  Média geral do nicho (10K–100K):{" "}
                  <strong className="text-wh">1% a 5%</strong>
                  <br />
                  A cada 100 seguidores, mais de 13 interagem ativamente com a
                  página todos os dias.
                </div>
              </div>
            </div>

            {/* 3 CARDS SECUNDÁRIOS */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="relative rounded-[18px] border-2 border-dashed border-y/20 bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]">
                <span className="mb-3 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org">
                  // views / mês
                </span>
                <span className="block font-bangers text-[3.5rem] leading-[0.9] text-wh">
                  259K
                </span>
                <p className="mt-3 text-[0.82rem] leading-snug text-mut">
                  Visualizações totais somando vídeos em alta
                </p>
              </div>

              <div className="relative rounded-[18px] border-2 border-dashed border-y/20 bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]">
                <span className="mb-3 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org">
                  // compartilhamentos
                </span>
                <span className="block font-bangers text-[3.5rem] leading-[0.9] text-wh">
                  3.502
                </span>
                <p className="mt-3 text-[0.82rem] leading-snug text-mut">
                  Pessoas que enviam para o grupo geek / amigos
                </p>
              </div>

              <div className="relative rounded-[18px] border-2 border-dashed border-y/20 bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]">
                <span className="mb-3 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org">
                  // salvamentos / mês
                </span>
                <span className="block font-bangers text-[3.5rem] leading-[0.9] text-wh">
                  1.553
                </span>
                <p className="mt-3 text-[0.82rem] leading-snug text-mut">
                  Indicador de conteúdo com alto valor e retenção
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: PERFIL DO PÚBLICO */}
        <section id="audience" className="border-b border-y/10 py-16">
          <div className="mx-auto max-w-[960px] px-6">
            <div className="mb-11">
              <span className="mb-2 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org">
                // perfil do público
              </span>
              <h2 className="font-bangers text-[clamp(2.6rem,7vw,4.2rem)] leading-[0.95] text-wh">
                Quem assiste <span className="text-y">é o seu público</span>
              </h2>
              <p className="mt-2 text-[0.9rem] text-mut">
                O mesmo fã que compra ingresso, merchandising e quer ir no
                evento no final de semana.
              </p>
            </div>

            <div className="grid w-full gap-5 md:grid-cols-2">
              {/* Faixa Etária */}
              <div className="relative -rotate-1 rounded-[18px] border-2 border-dashed border-y/20 bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]">
                <div className="absolute -top-2 left-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" />
                <div className="absolute -top-2 right-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" />
                <span className="mb-3 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-y">
                  // faixa etária
                </span>
                <div className="mb-6 text-[0.85rem] text-mut">
                  Pico de retenção em 25–44 anos — o adulto fã com poder de
                  compra.
                </div>
                <div className="space-y-4">
                  {AGE_RANGES.map((r) => (
                    <div
                      key={r.label}
                      className="grid grid-cols-[52px_1fr_40px] items-center gap-3"
                    >
                      <span className="font-bebas text-[0.9rem] tracking-[0.1em] text-wh/80">
                        {r.label}
                      </span>
                      <div className="h-2.5 overflow-hidden rounded-full border border-white/5 bg-black/50">
                        <div
                          className={`h-full rounded-full ${
                            r.value >= 25
                              ? "bg-y"
                              : r.value >= 15
                                ? "bg-org"
                                : "bg-y/30"
                          }`}
                          style={{ width: r.width }}
                        />
                      </div>
                      <span className="text-right font-bangers text-[1.1rem] tracking-wide text-y">
                        {r.value}%
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 rounded border border-org/20 bg-org/10 p-3 text-center font-bebas text-[1.1rem] tracking-[0.05em] text-org drop-shadow-md">
                  61% do público está ativo entre 25 e 44 anos
                </div>
              </div>

              {/* Gênero & Demografia / Alcance Regional */}
              <div className="flex flex-col gap-5">
                <div className="relative h-full rotate-1 rounded-[18px] border-2 border-dashed border-y/20 bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]">
                  <span className="mb-5 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org">
                    // gênero &amp; demografia
                  </span>
                  <div className="mb-6 flex flex-wrap items-center gap-4 border-b border-white/10 pb-6 sm:flex-nowrap sm:gap-6">
                    <div>
                      <div className="font-bangers text-[2.5rem] leading-none text-wh drop-shadow-md sm:text-[3.5rem]">
                        59%
                      </div>
                      <div className="mt-1 font-bebas text-[0.9rem] tracking-[0.15em] text-mut">
                        Masculino
                      </div>
                    </div>
                    <div className="hidden h-12 w-[1px] bg-white/10 sm:block" />
                    <div>
                      <div className="font-bangers text-[2.5rem] leading-none text-y drop-shadow-md sm:text-[3.5rem]">
                        29%
                      </div>
                      <div className="mt-1 font-bebas text-[0.9rem] tracking-[0.15em] text-mut">
                        Feminino
                      </div>
                    </div>
                  </div>

                  <span className="mb-3 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org">
                    // alcance regional
                  </span>
                  <div className="mb-2 font-bangers text-[4.5rem] leading-none text-y drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
                    90% BR
                  </div>
                  <div className="text-[0.85rem] leading-relaxed text-mut">
                    A esmagadora audiência é{" "}
                    <strong className="text-wh">brasileira</strong> focada na
                    região sudeste.
                    <br />
                    Top 5 capitais: <span className="font-bold text-org">SP</span>{" "}
                    · RJ · Manaus · Fortaleza · BH
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: APRESENTAÇÃO */}
        <section id="about" className="border-b border-y/10 py-16">
          <div className="mx-auto max-w-[960px] px-6">
            <div className="mb-11">
              <span className="mb-2 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org">
                // apresentação
              </span>
              <h2 className="font-bangers text-[clamp(2.6rem,7vw,4.2rem)] leading-[0.95] text-wh">
                Quem é o <span className="text-y">Nerd em Cena</span>
              </h2>
              <p className="mt-2 text-[0.9rem] text-mut">
                Não é jornalismo. É o fã que faz conteúdo.
              </p>
            </div>

            <div className="grid w-full gap-5 md:grid-cols-2">
              {/* O Criador */}
              <div className="relative -rotate-1 rounded-[18px] border-2 !border-t-4 border-dashed border-y/20 !border-t-y bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]">
                <div className="absolute -top-2 left-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" />
                <div className="absolute -top-2 right-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" />
                <span className="mb-3 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org">
                  // o criador
                </span>
                <h3 className="mb-4 font-bangers text-[1.8rem] tracking-[0.05em] text-wh">
                  Rogério Horvat
                </h3>
                <p className="mb-6 text-[0.9rem] leading-relaxed text-wh/75">
                  Produtor cultural e ator com anos de experiência, especializado
                  em transformar a cultura nerd em experiência cênica. Une
                  teatro, cosplay, anime, RPG, games e cultura pop para levar o
                  público viver o universo dos personagens.
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border border-y/20 bg-y/5 px-4 py-1.5 font-bebas text-xs tracking-[0.1em] text-mut">
                  <span className="inline-block h-2 w-2 rounded-full bg-y" />
                  CNPJ 60.907.624/0001-19 · Emite NF
                </div>
              </div>

              {/* Estilo de Conteúdo */}
              <div className="relative h-full rotate-1 rounded-[18px] border-2 !border-t-4 border-dashed border-y/20 !border-t-org bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]">
                <div className="absolute -top-2 left-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" />
                <div className="absolute -top-2 right-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" />
                <span className="mb-3 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org">
                  // estilo de conteúdo
                </span>
                <p className="mb-6 text-[0.9rem] leading-relaxed text-wh/75">
                  Cobertura de eventos vivida de dentro, curiosidades sobre
                  animes, games e cultura pop, e muito humor. Entretenimento
                  leve, com reações genuínas e bastidores — o tipo de conteúdo que
                  o público assiste até o fim e compartilha.
                </p>
                <div className="flex flex-wrap gap-2">
                  {CONTENT_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-y/20 bg-y/5 px-3.5 py-1.5 font-bebas text-[0.82rem] uppercase tracking-[0.1em] text-mut"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: VÍDEOS QUE PERFORMAM */}
        <section id="portfolio" className="border-b border-y/10 bg-black/30 py-16">
          <div className="mx-auto max-w-[960px] px-6">
            <div className="mb-11">
              <span className="mb-2 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org">
                // conteúdo em três plataformas
              </span>
              <h2 className="font-bangers text-[clamp(2.6rem,7vw,4.2rem)] leading-[0.95] text-wh">
                Vídeos que <span className="text-y">performam</span>
              </h2>
              <p className="mt-2 text-[0.9rem] text-mut">
                Assista aqui mesmo. Números orgânicos, sem impulsionamento pago.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* TikTok */}
              <div className="flex flex-col">
                <div className="flex h-full flex-col rounded-[18px] border-2 border-dashed border-y/30 bg-[#111100] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex items-center gap-2 font-bebas text-[0.8rem] uppercase tracking-[0.18em] text-mut">
                      <Play className="h-3.5 w-3.5 fill-org text-org" /> TikTok
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-org/30 bg-org/15 px-3.5 py-1.5 font-bebas text-[0.82rem] uppercase tracking-[0.1em] text-org">
                      Viralizou 🚀
                    </span>
                  </div>
                  <div className="h-[520px] w-full overflow-hidden rounded-xl bg-black">
                    <iframe
                      src="https://www.tiktok.com/embed/v2/7637615685648043284"
                      className="h-full w-full border-none"
                      title="Vídeo no TikTok"
                      allowFullScreen
                      allow="autoplay; encrypted-media"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-bangers text-[3.4rem] leading-[0.9] text-y drop-shadow-[3px_3px_0_rgba(255,140,0,0.3)]">
                      1M+
                    </div>
                    <div className="mt-1 font-bebas text-[0.95rem] uppercase tracking-[0.15em] text-mut">
                      Visualizações orgânicas
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram Reel */}
              <div className="flex flex-col">
                <div className="flex h-full flex-col rounded-[18px] border-2 border-dashed border-y/30 bg-[#111100] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex items-center gap-2 font-bebas text-[0.8rem] uppercase tracking-[0.18em] text-mut">
                      <Instagram className="h-3.5 w-3.5 text-y" /> Instagram
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-org/30 bg-org/15 px-3.5 py-1.5 font-bebas text-[0.82rem] uppercase tracking-[0.1em] text-org">
                      Reel
                    </span>
                  </div>
                  <div className="h-[520px] w-full overflow-hidden rounded-xl bg-black">
                    <iframe
                      src="https://www.instagram.com/p/DbrLrbgoTaf/embed"
                      className="h-full w-full border-none"
                      title="Reel no Instagram"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-bangers text-[3.4rem] leading-[0.9] text-y drop-shadow-[3px_3px_0_rgba(255,140,0,0.3)]">
                      368K
                    </div>
                    <div className="mt-1 font-bebas text-[0.95rem] uppercase tracking-[0.15em] text-mut">
                      Views / mês no perfil
                    </div>
                  </div>
                </div>
              </div>

              {/* YouTube Shorts */}
              <div className="flex flex-col">
                <div className="flex h-full flex-col rounded-[18px] border-2 border-dashed border-y/30 bg-[#111100] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex items-center gap-2 font-bebas text-[0.8rem] uppercase tracking-[0.18em] text-mut">
                      <Youtube className="h-4 w-4 text-org" /> YouTube
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-org/30 bg-org/15 px-3.5 py-1.5 font-bebas text-[0.82rem] uppercase tracking-[0.1em] text-org">
                      Shorts
                    </span>
                  </div>
                  <div className="h-[520px] w-full overflow-hidden rounded-xl bg-black">
                    <iframe
                      src="https://www.youtube.com/embed/j1NtCBQ_fTc"
                      className="h-full w-full border-none"
                      title="Vídeo no YouTube"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-bangers text-[3.4rem] leading-[0.9] text-y drop-shadow-[3px_3px_0_rgba(255,140,0,0.3)]">
                      13,39%
                    </div>
                    <div className="mt-1 font-bebas text-[0.95rem] uppercase tracking-[0.15em] text-mut">
                      Taxa de engajamento
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 5: ENTREGÁVEIS / O QUE EU ENTREGO */}
        <section id="request" className="border-b border-y/10 bg-black/40 pb-24 pt-16">
          <div className="mx-auto max-w-[960px] px-6">
            <div className="mb-11 text-center">
              <span className="mb-2 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org">
                // parcerias e patrocínios
              </span>
              <h2 className="font-bangers text-[clamp(2.6rem,7vw,4.2rem)] leading-[0.95] text-wh">
                O que eu <span className="text-y">entrego</span>
              </h2>
              <p className="mt-2 text-[0.9rem] text-mut">
                Formatos flexíveis para marcas, eventos e patrocínios.
              </p>
            </div>

            <div className="relative mx-auto mt-12 w-full max-w-5xl">
              <div className="grid w-full items-stretch gap-6 md:grid-cols-2">
                {/* Formatos disponíveis */}
                <div className="relative flex flex-col justify-center overflow-hidden rounded-[20px] border border-y/20 bg-gradient-to-br from-[#1a1200] to-[#332200] p-8 shadow-[0_0_20px_rgba(255,214,0,0.1)]">
                  <div className="pointer-events-none absolute right-0 top-0 flex p-8 text-y opacity-10">
                    <Instagram className="h-[120px] w-[120px] rotate-12" />
                  </div>
                  <div className="relative z-10 flex h-full flex-col justify-center">
                    <div className="mb-3 flex items-center gap-2 font-bebas text-[1rem] tracking-[0.2em] text-y">
                      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-y" />
                      Formatos disponíveis
                    </div>
                    <div className="mb-4 font-bangers text-[clamp(2.5rem,5vw,3.5rem)] leading-[1] text-wh">
                      Publi, cobertura
                      <br />
                      e patrocínio
                    </div>
                    <div className="mb-8 max-w-[90%] text-[0.95rem] leading-relaxed text-mut">
                      Reels e Shorts patrocinados, cobertura de evento com equipe
                      de <strong>2 pessoas</strong>, ações de humor e
                      curiosidades com o produto integrado.
                    </div>
                    <div className="mt-auto flex flex-wrap gap-4">
                      <div className="rounded border border-y/30 bg-y/10 px-4 py-2.5 font-bebas text-[1.05rem] tracking-[0.1em] text-y">
                        CNPJ · Emite NF
                      </div>
                      <div className="rounded border border-org/30 bg-org/10 px-4 py-2.5 font-bebas text-[1.05rem] tracking-[0.1em] text-org">
                        Mídia 100% Orgânica
                      </div>
                    </div>
                  </div>
                </div>

                {/* Entregáveis */}
                <div className="flex flex-col rounded-[20px] border border-white/5 bg-black/40 p-8 shadow-lg">
                  <h3 className="mb-8 font-bangers text-[2rem] tracking-wide text-wh">
                    Entregáveis
                  </h3>
                  <ul className="grid flex-1 gap-6 sm:grid-cols-2">
                    <li className="flex flex-col gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-y to-org shadow-md">
                        <Play className="ml-1 h-[22px] w-[22px] fill-blk text-blk" />
                      </div>
                      <div>
                        <strong className="mb-1 block text-[1.1rem] text-wh">
                          Vídeo vertical multiplataforma
                        </strong>
                        <span className="block text-[0.9rem] leading-[1.6] text-mut">
                          O mesmo conteúdo publicado no Instagram, TikTok e
                          YouTube Shorts.
                        </span>
                      </div>
                    </li>
                    <li className="flex flex-col gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-y to-org shadow-md">
                        <Instagram className="h-[22px] w-[22px] text-blk" />
                      </div>
                      <div>
                        <strong className="mb-1 block text-[1.1rem] text-wh">
                          Stories ao vivo e bastidores
                        </strong>
                        <span className="block text-[0.9rem] leading-[1.6] text-mut">
                          Interação constante, curiosidades e humor durante toda
                          a ação.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 6: CONTATO */}
        <section id="contact" className="border-t border-y/20 bg-blk pb-32 pt-16">
          <div className="mx-auto max-w-[960px] px-6">
            <div className="mb-11">
              <span className="mb-2 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org">
                // vamos crescer juntos
              </span>
              <h2 className="font-bangers text-[clamp(2.6rem,7vw,4.2rem)] leading-[0.95] text-wh">
                Dê o <span className="text-y">próximo passo</span>
              </h2>
              <p className="mt-2 text-[0.9rem] text-mut">
                Respondemos rápido no direct e no e-mail.
              </p>
            </div>

            <div className="mx-auto grid w-full max-w-4xl gap-6 lg:grid-cols-2">
              <a
                href={SOCIAL_LINKS.instagramDm}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start justify-between gap-4 rounded-xl border-2 border-border bg-[#111100] p-6 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:border-org hover:shadow-[0_15px_30px_rgba(255,101,0,0.15)] md:flex-row md:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-org/20 bg-org/10 text-org transition-all group-hover:scale-110 group-hover:bg-org group-hover:text-black">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mb-0.5 font-bebas text-[0.8rem] uppercase tracking-[0.1em] text-org">
                      Instagram Direct
                    </div>
                    <div className="font-bangers text-[1.4rem] lowercase tracking-wide text-wh">
                      {CONTACT.handle}
                    </div>
                  </div>
                </div>
                <ArrowRight className="hidden h-6 w-6 text-mut transition-colors group-hover:text-org xl:block" />
              </a>

              <a
                href={CONTACT.email}
                className="group flex flex-col items-start justify-between gap-4 overflow-hidden rounded-xl border-2 border-border bg-[#111100] p-6 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:border-y hover:shadow-[0_15px_30px_rgba(255,214,0,0.15)] md:flex-row md:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-y/20 bg-y/10 text-y transition-all group-hover:scale-110 group-hover:bg-y group-hover:text-black">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 pr-2">
                    <div className="mb-0.5 truncate font-bebas text-[0.8rem] uppercase tracking-[0.1em] text-y">
                      E-mail Profissional
                    </div>
                    <div className="truncate font-bangers text-[1rem] lowercase tracking-wide text-wh md:text-[1.1rem]">
                      {CONTACT.emailAddress}
                    </div>
                  </div>
                </div>
                <ArrowRight className="hidden h-6 w-6 shrink-0 text-mut transition-colors group-hover:text-y xl:block" />
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-y/20 bg-black/60 py-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-bebas text-[0.85rem] uppercase tracking-[0.2em] text-mut transition-colors hover:text-y"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para os links
          </Link>
          <p className="mt-4 font-nunito text-xs text-mut">
            © {new Date().getFullYear()} Nerd em Cena · CNPJ 60.907.624/0001-19
          </p>
        </footer>
      </div>
    </div>
  );
}
