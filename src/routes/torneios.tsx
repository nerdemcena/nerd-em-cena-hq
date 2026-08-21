import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Swords, Shield, Crown, Sparkles, Lock } from "lucide-react";

import { NerdLogo } from "@/components/nerd-logo";

export const Route = createFileRoute("/torneios")({
  head: () => ({
    meta: [
      { title: "Torneios — Em Breve | Nerd em Cena" },
      {
        name: "description",
        content:
          "Algo épico está por vir. Em breve, torneios do Nerd em Cena. Prepare-se para a batalha.",
      },
      { property: "og:title", content: "Torneios — Em Breve | Nerd em Cena" },
      {
        property: "og:description",
        content:
          "Algo épico está por vir. Em breve, torneios do Nerd em Cena. Prepare-se para a batalha.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Torneios,
});

const whispers = [
  "Reinos serão conquistados...",
  "Heróis serão escolhidos...",
  "Dados serão lançados...",
  "A glória aguarda os bravos.",
];

function Torneios() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-x-hidden bg-black text-foreground">
      <div className="pointer-events-none fixed inset-0 stars" />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-black via-gold/5 to-black" />

      <main className="relative mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para o início
        </Link>

        <div className="mt-8 flex flex-col items-center">
          <NerdLogo className="h-24 w-auto drop-shadow-[0_0_25px_rgba(242,196,9,0.35)] md:h-32" />

          <div className="relative mt-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-32 rounded-full bg-gold/20 blur-3xl" />
            </div>
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/40 bg-black-card shadow-[0_0_40px_-10px_rgba(242,196,9,0.3)]">
              <Lock className="h-10 w-10 text-gold" />
            </div>
          </div>

          <h1 className="mt-8 font-heading text-5xl tracking-wide text-gold md:text-7xl">
            EM BREVE
          </h1>
          <p className="mt-3 text-xl font-semibold text-foreground md:text-2xl">
            Algo misterioso está por vir...
          </p>
          <p className="mt-2 text-muted-foreground">
            Os torneios do Nerd em Cena estão sendo forjados. Prepare-se para a
            batalha.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {whispers.map((whisper, index) => (
            <div
              key={whisper}
              className="flex items-center gap-3 rounded-2xl border border-gold/20 bg-black-card/50 p-4 text-left backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                {index === 0 && <Crown className="h-5 w-5" />}
                {index === 1 && <Sparkles className="h-5 w-5" />}
                {index === 2 && <Swords className="h-5 w-5" />}
                {index === 3 && <Shield className="h-5 w-5" />}
              </div>
              <p className="text-sm text-muted-foreground">{whisper}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105 hover:gold-glow"
          >
            <ArrowLeft className="h-4 w-4" />
            VOLTAR AO SITE
          </Link>
        </div>

        <footer className="mt-16 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nerd em Cena. Todos os direitos reservados.
        </footer>
      </main>
    </div>
  );
}
