import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, BarChart3, Users, Video, Eye, Heart, Mail, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { NerdLogo } from "@/components/nerd-logo";
import { SOCIAL_LINKS, CONTACT } from "@/lib/links";

export const Route = createFileRoute("/midiakit")({
  head: () => ({
    meta: [
      { title: "Mídia Kit — Nerd em Cena" },
      {
        name: "description",
        content:
          "Mídia Kit oficial do Nerd em Cena. Descubra números, público e formas de parceria.",
      },
      { property: "og:title", content: "Mídia Kit — Nerd em Cena" },
      {
        property: "og:description",
        content:
          "Mídia Kit oficial do Nerd em Cena. Descubra números, público e formas de parceria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MidiaKit,
});

const stats = [
  { icon: Users, label: "Seguidores", value: "+10K", sub: "Comunidade ativa" },
  { icon: Eye, label: "Visualizações mensais", value: "+500K", sub: "Reels, shorts e vídeos" },
  { icon: Heart, label: "Engajamento", value: "8,5%", sub: "Média nas redes" },
  { icon: Video, label: "Conteúdos publicados", value: "+300", sub: "Videos e coberturas" },
];

const audiences = [
  "Fãs de animes e cultura pop japonesa",
  "Gamers de todos os estilos e plataformas",
  "Praticantes e curiosos de RPG de mesa",
  "Público de eventos geek e cosplay",
  "Educadores e artistas que misturam teatro + nerd",
];

const partnerships = [
  "Cobertura de eventos geek, culturais e corporativos",
  "Divulgação de produtos, cursos e lançamentos",
  "Criação de conteúdo patrocinado (reels, shorts, posts)",
  "Presença VIP e mediação de painéis/torneios",
  "Consultoria criativa para projetos nerd e educativos",
];

function MidiaKit() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-foreground">
      <div className="pointer-events-none fixed inset-0 stars" />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <main className="relative mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para o início
        </Link>

        <header className="mt-8 flex flex-col items-center text-center">
          <NerdLogo className="h-28 w-auto drop-shadow-[0_0_25px_rgba(242,196,9,0.35)] md:h-36" />
          <h1 className="mt-4 font-heading text-4xl tracking-wide md:text-6xl">
            MÍDIA KIT
          </h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Conheça os números, o público e as formas de parceria com o Nerd em
            Cena.
          </p>
        </header>

        <section className="mt-10">
          <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-gold" />
              <h2 className="font-heading text-2xl tracking-wide md:text-3xl">
                NÚMEROS
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gold/30 bg-black p-5 text-center transition-transform hover:-translate-y-1"
                >
                  <stat.icon className="mx-auto h-7 w-7 text-gold" />
                  <p className="mt-3 font-heading text-3xl text-gold md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-semibold text-foreground">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Users className="h-6 w-6 text-gold" />
              <h2 className="font-heading text-2xl tracking-wide">PÚBLICO</h2>
            </div>
            <ul className="space-y-3">
              {audiences.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Heart className="h-6 w-6 text-gold" />
              <h2 className="font-heading text-2xl tracking-wide">PARCERIAS</h2>
            </div>
            <ul className="space-y-3">
              {partnerships.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6">
          <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-gold via-gold to-gold-muted p-6 text-black md:p-8">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <div className="flex-1">
                <h2 className="font-heading text-2xl tracking-wide md:text-3xl">
                  QUER FECHAR UMA PARCERIA?
                </h2>
                <p className="mt-1 text-black/80">
                  Manda um direct no Instagram ou um e-mail. Vamos criar algo
                  épico juntos!
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={SOCIAL_LINKS.instagramDm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-bold text-gold transition-transform hover:scale-105"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href={CONTACT.email}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-black px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-black/10"
                >
                  <Mail className="h-4 w-4" />
                  E-mail
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-12 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nerd em Cena. Todos os direitos reservados.
        </footer>
      </main>
    </div>
  );
}
