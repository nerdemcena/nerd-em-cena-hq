import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Instagram, Lock, Swords } from "lucide-react";

import { NerdLogo } from "@/components/nerd-logo";
import { SOCIAL_LINKS } from "@/lib/links";

export const Route = createFileRoute("/torneios")({
  head: () => ({
    meta: [
      { title: "Torneios em breve — Nerd em Cena" },
      {
        name: "description",
        content:
          "Algo está sendo forjado nos bastidores: desafios, disputas e prêmios para quem vive de animes, games e cultura pop.",
      },
      { property: "og:title", content: "Torneios em breve — Nerd em Cena" },
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

const TAGS = ["DESAFIOS", "PRÊMIOS", "RANKING", "???"];

function TorneiosPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-5 py-16 text-center text-foreground">
      {/* Fundo: estrelas + brilho dourado central */}
      <div className="pointer-events-none absolute inset-0 stars opacity-50" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, color-mix(in oklab, var(--color-gold) 14%, transparent), transparent 60%)",
        }}
      />

      <main className="relative mx-auto flex w-full max-w-2xl flex-col items-center">
        <h1 className="sr-only">Torneios em breve — Nerd em Cena</h1>

        <NerdLogo className="h-24 w-24 rounded-full border-2 border-gold/70 gold-glow" />

        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 font-heading text-[11px] tracking-[0.25em] text-gold">
          <Lock className="h-3 w-3" />
          SELADO POR ENQUANTO
        </span>

        <p className="mt-6 font-heading text-4xl leading-none tracking-wide text-foreground sm:text-6xl md:text-7xl">
          TORNEIOS <span className="text-gold">EM BREVE</span>
        </p>

        <p className="mt-5 max-w-md text-sm text-muted-foreground sm:text-base">
          Algo está sendo forjado nos bastidores. Desafios, disputas e prêmios para quem vive de
          animes, games e cultura pop.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-gold/30 bg-gold/5 px-3 py-1.5 font-heading text-[11px] tracking-[0.2em] text-gold"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-heading text-sm tracking-wider text-black gold-glow transition-transform hover:scale-[1.02] sm:w-auto"
          >
            <Instagram className="h-4 w-4" />
            SER AVISADO PRIMEIRO
          </a>
          <Link
            to="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gold/40 px-6 py-3.5 font-heading text-sm tracking-wider text-foreground transition-colors hover:border-gold hover:bg-gold/10 sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            VOLTAR
          </Link>
        </div>

        <Swords className="mt-14 h-8 w-8 text-gold/25" />
      </main>
    </div>
  );
}
