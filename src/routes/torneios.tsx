import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Crown, Gamepad2, Instagram, Lock, Swords, Trophy, Zap } from "lucide-react";

import { NerdLogo } from "@/components/nerd-logo";
import { SOCIAL_LINKS } from "@/lib/links";

export const Route = createFileRoute("/torneios")({
  head: () => ({
    meta: [
      { title: "Nerd em Cena — Torneios (Em Breve)" },
      {
        name: "description",
        content:
          "Torneios Nerd em Cena: desafios, disputas e prêmios para quem vive de animes, games e cultura pop. Algo épico está sendo forjado!",
      },
      { property: "og:title", content: "Nerd em Cena — Torneios (Em Breve)" },
      {
        property: "og:description",
        content:
          "Desafios, disputas e prêmios para quem vive de animes, games e cultura pop. Em breve no Nerd em Cena.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TorneiosPage,
});

const TAGS = ["Animes", "Games", "Disputas", "Prêmios", "Ranking Geek", "Cosplays"];

const PREVIEW_CARDS = [
  {
    icon: Swords,
    tag: "// Dramaturgias e Cosplay",
    title: "Disputas de Escritores e Cosplayers",
    desc: "Seja o melhor na escrita ou na interpretação e se torne o campeão.",
    accent: "text-y",
  },
  {
    icon: Trophy,
    tag: "// recompensas reais",
    title: "Premiações & Troféus",
    desc: "Itens lendários, colecionáveis, brindes exclusivos e reconhecimento no Hall da Fama do Nerd em Cena.",
    accent: "text-org",
  },
  {
    icon: Gamepad2,
    tag: "// transmissão & zoeira",
    title: "Cobertura & Muito Humor",
    desc: "Melhores momentos transmitidos com narração descontraída, react dos participantes e aquela resenha imperdível.",
    accent: "text-y",
  },
];

export function TorneiosPage() {
  return (
    <div className="min-h-screen bg-black font-nunito text-wh selection:bg-y selection:text-blk">
      {/* HEADER AMARELO */}
      <header className="relative overflow-hidden border-b-[5px] border-blk bg-y py-12 pb-10">
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.04),rgba(0,0,0,0.04)1px,transparent_1px,transparent_12px)]" />
        <div className="relative z-10 mx-auto max-w-[960px] px-6">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 font-bebas text-[0.85rem] uppercase tracking-[0.2em] text-blk/70 transition-colors hover:text-blk"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>

          <div className="grid grid-cols-1 items-center gap-7 sm:grid-cols-[auto_1fr]">
            <Link
              to="/"
              aria-label="Voltar para a página inicial"
              className="mx-auto block h-28 w-28 shrink-0 transition-transform hover:scale-105 sm:mx-0"
            >
              <NerdLogo className="h-full w-full" />
            </Link>

            <div className="text-center sm:text-left">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1 font-bebas text-[0.75rem] uppercase tracking-[0.16em] text-y">
                <Lock className="h-3 w-3" /> Selado por enquanto
              </div>
              <h1 className="mb-2 font-bangers text-[clamp(2.6rem,6vw,4.2rem)] leading-[0.92] tracking-[0.04em] text-blk">
                Torneios Nerd em Cena
              </h1>
              <div className="mb-3 font-bebas text-[0.9rem] tracking-[0.2em] text-black/60">
                Desafios · Disputas · Prêmios para quem vive a cultura pop
              </div>
              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[3px] bg-black px-3 py-1 font-bebas text-[0.7rem] tracking-[0.14em] text-y"
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
      <div className="dots-bg bg-black py-16">
        <main className="mx-auto max-w-[960px] px-6">
          {/* HERO BANNER TEASER */}
          <div className="relative mb-8 overflow-hidden rounded-[20px] border-2 border-dashed border-y/30 bg-[#111100] p-8 text-center sm:p-12">
            <div className="absolute -top-2 left-6 h-[14px] w-[14px] rounded-full border-2 border-y/20 bg-black" />
            <div className="absolute -top-2 right-6 h-[14px] w-[14px] rounded-full border-2 border-y/20 bg-black" />

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-y/40 bg-y/10 shadow-[0_0_30px_rgba(232,191,20,0.2)]">
              <Swords className="h-10 w-10 text-y animate-pulse" />
            </div>

            <span className="mt-6 block font-bebas text-[0.85rem] uppercase tracking-[0.25em] text-org">
              // arena em construção
            </span>

            <h2 className="mt-2 font-bangers text-[clamp(2.4rem,6vw,3.8rem)] leading-[0.95] text-wh">
              ALGO ESTÁ SENDO <span className="text-y">FORJADO</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-mut sm:text-[1.05rem]">
              Estamos preparando a arena definitiva para quem ama animes, games, cultura pop e
              duelos. Teste seus conhecimentos, dispute com amigos e conquiste
              prêmios reais em torneios online e presenciais!
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold transition-colors group-hover:bg-gold-muted inline-flex w-full items-center justify-center gap-2.5 rounded-[12px] border-2 border-blk/30 px-6 py-3.5 font-bebas text-[1rem] uppercase tracking-[0.14em] text-blk shadow-[3px_3px_0_rgba(255,140,0,0.6)] transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0_rgba(255,140,0,0.6)] sm:w-auto"
              >
                <Instagram className="h-4 w-4" />
                Quero ser avisado primeiro
              </a>
              <Link
                to="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[12px] border-2 border-white/20 bg-black/40 px-6 py-3.5 font-bebas text-[1rem] uppercase tracking-[0.14em] text-wh transition-all hover:border-y hover:text-y sm:w-auto"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Link>
            </div>
          </div>

          {/* O QUE ESPERAR */}
          <section className="mb-8">
            <div className="mb-10 text-center">
              <span className="mb-2 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org">
                // modalidades & formato
              </span>
              <h3 className="font-bangers text-[clamp(2.4rem,5vw,3.2rem)] leading-none text-wh">
                O QUE VEM <span className="text-y">POR AÍ</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {PREVIEW_CARDS.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className={`relative rounded-[18px] border-2 border-dashed border-y/20 bg-[#111100] px-7 py-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)] ${
                      idx % 2 === 0 ? "-rotate-1" : "rotate-1"
                    }`}
                  >
                    <div className="absolute -top-2 left-[22px] h-[12px] w-[12px] rounded-full border-2 border-y/20 bg-black" />
                    <div className="absolute -top-2 right-[22px] h-[12px] w-[12px] rounded-full border-2 border-y/20 bg-black" />

                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[12px] bg-gradient-to-br from-y to-org shadow-md">
                      <Icon className="h-6 w-6 text-blk" />
                    </div>

                    <span className="mb-2 block font-bebas text-[0.78rem] uppercase tracking-[0.18em] text-org">
                      {card.tag}
                    </span>

                    <h4 className="mb-3 font-bangers text-[1.5rem] tracking-wide text-wh">
                      {card.title}
                    </h4>

                    <p className="text-[0.88rem] leading-relaxed text-mut">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SNEAK PEEK / SPOILER */}
          <section className="rounded-[18px] border border-white/10 bg-black/50 p-8 text-center sm:p-10">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-org/20 text-org">
              <Zap className="h-5 w-5" />
            </div>
            <h4 className="font-bangers text-[1.8rem] text-wh">
              Fique ligado nos Stories e no canal!
            </h4>
            <p className="mx-auto mt-2 max-w-lg text-[0.9rem] text-mut">
              As primeiras vagas para o torneio de lançamento serão abertas exclusivamente para quem
              acompanha o direct do <strong className="text-y">@nerdemcenaoficial</strong>.
            </p>
            <div className="mt-6">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bebas text-[0.9rem] uppercase tracking-[0.18em] text-y hover:underline"
              >
                <Crown className="h-5 w-5 -mt-0.5" /> Seguir no Instagram para não perder
              </a>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="mt-12 border-t border-y/20 bg-black/60 py-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-bebas text-[0.85rem] uppercase tracking-[0.2em] text-mut transition-colors hover:text-y"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
          <p className="mt-4 font-nunito text-xs text-mut">
            © {new Date().getFullYear()} Nerd em Cena · CNPJ 60.907.624/0001-19
          </p>
        </footer>
      </div>
    </div>
  );
}
