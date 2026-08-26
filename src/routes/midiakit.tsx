import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Eye,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Play,
  Share2,
  Users,
  Youtube,
} from "lucide-react";

import { NerdLogo } from "@/components/nerd-logo";
import { CONTACT, SOCIAL_LINKS } from "@/lib/links";

export const Route = createFileRoute("/midiakit")({
  head: () => ({
    meta: [
      { title: "Mídia Kit 2026 — Nerd em Cena | Parcerias e Patrocínios" },
      {
        name: "description",
        content:
          "Mídia kit do Nerd em Cena: 21.148 seguidores, 13,39% de engajamento e 259K views/mês. Formatos de publi, cobertura de eventos e patrocínio.",
      },
      { property: "og:title", content: "Mídia Kit 2026 — Nerd em Cena" },
      {
        property: "og:description",
        content:
          "Números reais, perfil do público e formatos de parceria do Nerd em Cena (@nerdemcenaoficial).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: MidiaKitPage,
});

const HERO_TAGS = ["ANIMES", "GAMES", "CULTURA POP", "CNPJ 60.907.624/0001-19", "EMITE NF"];

const AGE_RANGES = [
  { label: "18–24", value: 13 },
  { label: "25–34", value: 29 },
  { label: "35–44", value: 32 },
  { label: "45–54", value: 16 },
  { label: "55–64", value: 6 },
];

const CONTENT_TAGS = [
  "Cobertura de eventos",
  "Curiosidades",
  "Entretenimento",
  "Humor",
  "Bastidores",
];

const VIDEOS = [
  {
    platform: "TikTok",
    badge: "Viralizou 🚀",
    icon: Music2,
    metric: "1M+",
    metricLabel: "Visualizações orgânicas",
    href: "https://www.tiktok.com/@nerdemcenaoficial/video/7637615685648043284",
  },
  {
    platform: "Instagram",
    badge: "Reel",
    icon: Instagram,
    metric: "368K",
    metricLabel: "Views / mês no perfil",
    href: "https://www.instagram.com/reel/DbrLrbgoTaf/",
  },
  {
    platform: "YouTube",
    badge: "Shorts",
    icon: Youtube,
    metric: "13,39%",
    metricLabel: "Taxa de engajamento",
    href: "https://www.youtube.com/shorts/j1NtCBQ_fTc",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-heading text-[11px] tracking-[0.25em] text-gold">// {children}</p>
  );
}

function SectionHeading({ first, accent }: { first: string; accent: string }) {
  return (
    <h2 className="mt-2 font-heading text-3xl leading-none tracking-wide text-foreground sm:text-5xl">
      {first} <span className="text-gold">{accent}</span>
    </h2>
  );
}

function MidiaKitPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-foreground">
      {/* HERO — faixa dourada */}
      <header className="relative bg-gold px-5 pb-10 pt-6 text-black sm:px-8 sm:pb-14 sm:pt-8">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] text-black/70 transition-colors hover:text-black"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            VOLTAR PARA OS LINKS
          </Link>

          <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-black p-2 sm:h-28 sm:w-28">
              <NerdLogo className="h-full w-full rounded-full" />
            </div>
            <div className="min-w-0">
              <h1 className="font-heading text-3xl leading-[0.95] tracking-wide sm:text-5xl">
                NERD EM CENA
                <br />
                MÍDIA KIT 2026
              </h1>
              <p className="mt-2 font-heading text-[11px] tracking-[0.2em] text-black/75 sm:text-xs">
                @NERDEMCENAOFICIAL · PARCERIAS E PATROCÍNIOS
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {HERO_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-black px-2.5 py-1 font-heading text-[10px] tracking-widest text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="pointer-events-none fixed inset-0 stars opacity-60" />

      <main className="relative mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        {/* NÚMEROS REAIS */}
        <section>
          <Eyebrow>dados verificados · Instagram Insights · mai 2026</Eyebrow>
          <SectionHeading first="NÚMEROS" accent="REAIS" />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-dashed border-gold/50 bg-black-card/60 p-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-3 py-1 font-heading text-[10px] tracking-[0.2em] text-gold">
                <Instagram className="h-3 w-3" />
                INSTAGRAM
              </span>
              <p className="mt-4 font-heading text-5xl leading-none text-foreground sm:text-6xl">
                21.148
              </p>
              <p className="mt-1 font-heading text-xs tracking-[0.2em] text-muted-foreground">
                SEGUIDORES
              </p>
              <p className="mt-4 inline-block rounded-lg bg-gold/15 px-3 py-1.5 text-sm font-semibold text-gold">
                ↑ +2.245 em 30 dias (+9,5%)
              </p>
              <p className="mt-3 text-sm text-muted-foreground">Crescimento constante no nicho</p>
            </div>

            <div className="rounded-3xl border-2 border-dashed border-gold/50 bg-black-card/60 p-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-3 py-1 font-heading text-[10px] tracking-[0.2em] text-gold">
                <MessageCircle className="h-3 w-3" />
                TAXA DE ENGAJAMENTO
              </span>
              <p className="mt-4 font-heading text-5xl leading-none text-gold sm:text-6xl">13,39%</p>
              <p className="mt-3 inline-block rounded-full bg-gold px-3 py-1 font-heading text-[10px] tracking-[0.2em] text-black">
                EXCEPCIONAL
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Média geral do nicho (10K–100K): <strong className="text-foreground">1% a 5%</strong>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                A cada 100 seguidores, mais de 13 interagem ativamente com a página todos os dias.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Eye,
                label: "views / mês",
                value: "259K",
                desc: "Visualizações totais somando vídeos em alta",
              },
              {
                icon: Share2,
                label: "compartilhamentos",
                value: "3.502",
                desc: "Pessoas que enviam para o grupo geek / amigos",
              },
              {
                icon: Bookmark,
                label: "salvamentos / mês",
                value: "1.553",
                desc: "Indicador de conteúdo com alto valor e retenção",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-dashed border-gold/30 bg-black-card/40 p-5"
              >
                <p className="flex items-center gap-2 font-heading text-[10px] tracking-[0.2em] text-gold">
                  <stat.icon className="h-3.5 w-3.5" />// {stat.label}
                </p>
                <p className="mt-2 font-heading text-4xl leading-none text-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PERFIL DO PÚBLICO */}
        <section className="mt-16">
          <Eyebrow>perfil do público</Eyebrow>
          <SectionHeading first="QUEM ASSISTE" accent="É O SEU PÚBLICO" />
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            O mesmo fã que compra ingresso, merchandising e quer ir no evento no final de semana.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-6">
              <Eyebrow>faixa etária</Eyebrow>
              <p className="mt-3 text-sm text-muted-foreground">
                Pico de retenção em 25–44 anos — o adulto fã com poder de compra.
              </p>
              <div className="mt-5 space-y-3">
                {AGE_RANGES.map((range) => (
                  <div key={range.label} className="flex items-center gap-3">
                    <span className="w-14 shrink-0 font-heading text-xs tracking-widest text-muted-foreground">
                      {range.label}
                    </span>
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-gold/10">
                      <div
                        className="h-full rounded-full bg-gold"
                        style={{ width: `${(range.value / 32) * 100}%` }}
                      />
                    </div>
                    <span className="w-10 shrink-0 text-right font-heading text-sm text-gold">
                      {range.value}%
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-xl bg-gold/10 px-4 py-2.5 text-sm font-semibold text-gold">
                61% do público está ativo entre 25 e 44 anos
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-6">
                <Eyebrow>gênero &amp; demografia</Eyebrow>
                <div className="mt-4 flex gap-8">
                  <div>
                    <p className="font-heading text-4xl leading-none text-foreground">59%</p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Users className="h-3.5 w-3.5" />
                      Masculino
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-4xl leading-none text-gold">29%</p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Users className="h-3.5 w-3.5" />
                      Feminino
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 rounded-3xl border border-gold/20 bg-black-card/50 p-6">
                <Eyebrow>alcance regional</Eyebrow>
                <p className="mt-3 flex items-center gap-2 font-heading text-4xl leading-none text-foreground">
                  <MapPin className="h-6 w-6 text-gold" />
                  90% BR
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  A esmagadora audiência é <strong className="text-foreground">brasileira</strong>,
                  focada na região sudeste.
                </p>
                <p className="mt-2 text-sm text-gold">
                  Top 5 capitais: SP · RJ · Manaus · Fortaleza · BH
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APRESENTAÇÃO */}
        <section className="mt-16">
          <Eyebrow>apresentação</Eyebrow>
          <SectionHeading first="QUEM É O" accent="NERD EM CENA" />
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Não é jornalismo. É o fã que faz conteúdo.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-6">
              <Eyebrow>o criador</Eyebrow>
              <h3 className="mt-3 font-heading text-2xl tracking-wide text-gold">Rogério Horvat</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Produtor cultural e ator com anos de experiência, especializado em transformar a
                cultura nerd em experiência cênica. Une teatro, cosplay, anime, RPG, games e cultura
                pop para levar o público a viver o universo dos personagens.
              </p>
              <p className="mt-4 font-heading text-[10px] tracking-[0.2em] text-muted-foreground">
                CNPJ 60.907.624/0001-19 · EMITE NF
              </p>
            </div>

            <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-6">
              <Eyebrow>estilo de conteúdo</Eyebrow>
              <p className="mt-3 text-sm text-muted-foreground">
                Cobertura de eventos vivida de dentro, curiosidades sobre animes, games e cultura
                pop, e muito humor. Entretenimento leve, com reações genuínas e bastidores — o tipo
                de conteúdo que o público assiste até o fim e compartilha.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {CONTENT_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-gold/30 bg-gold/5 px-2.5 py-1 text-xs text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VÍDEOS */}
        <section className="mt-16">
          <Eyebrow>conteúdo em três plataformas</Eyebrow>
          <SectionHeading first="VÍDEOS QUE" accent="PERFORMAM" />
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Números orgânicos, sem impulsionamento pago.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {VIDEOS.map((video) => (
              <a
                key={video.platform}
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-3xl border border-gold/25 bg-black-card/50 p-5 transition-all hover:-translate-y-1 hover:border-gold"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 font-heading text-sm tracking-wider text-gold">
                    <video.icon className="h-4 w-4" />
                    {video.platform}
                  </span>
                  <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold text-gold">
                    {video.badge}
                  </span>
                </div>
                <div className="mt-4 flex aspect-[9/12] items-center justify-center rounded-2xl border border-gold/15 bg-black">
                  <Play className="h-9 w-9 text-gold/60 transition-transform group-hover:scale-110" />
                </div>
                <p className="mt-4 font-heading text-3xl leading-none text-foreground">
                  {video.metric}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{video.metricLabel}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ENTREGÁVEIS */}
        <section className="mt-16">
          <Eyebrow>parcerias e patrocínios</Eyebrow>
          <SectionHeading first="O QUE EU" accent="ENTREGO" />
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Formatos flexíveis para marcas, eventos e patrocínios.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-dashed border-gold/50 bg-black-card/60 p-6">
              <Eyebrow>formatos disponíveis</Eyebrow>
              <h3 className="mt-3 font-heading text-2xl leading-tight tracking-wide text-foreground">
                PUBLI, COBERTURA <span className="text-gold">E PATROCÍNIO</span>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Reels e Shorts patrocinados, cobertura de evento com equipe de{" "}
                <strong className="text-foreground">2 pessoas</strong>, ações de humor e curiosidades
                com o produto integrado.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-lg bg-gold px-2.5 py-1 font-heading text-[10px] tracking-widest text-black">
                  CNPJ · EMITE NF
                </span>
                <span className="rounded-lg border border-gold/30 px-2.5 py-1 font-heading text-[10px] tracking-widest text-gold">
                  MÍDIA 100% ORGÂNICA
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-6">
              <h3 className="font-heading text-xl tracking-wide text-gold">ENTREGÁVEIS</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Vídeo vertical multiplataforma</strong> — o
                    mesmo conteúdo publicado no Instagram, TikTok e YouTube Shorts.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Stories ao vivo e bastidores</strong> —
                    interação constante, curiosidades e humor durante toda a ação.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section className="mt-16">
          <Eyebrow>vamos crescer juntos</Eyebrow>
          <SectionHeading first="DÊ O" accent="PRÓXIMO PASSO" />
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Respondemos rápido no direct e no e-mail.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={SOCIAL_LINKS.instagramDm}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-gold p-5 text-black transition-transform hover:scale-[1.02]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-gold">
                <Instagram className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-heading text-sm tracking-wider">INSTAGRAM DIRECT</span>
                <span className="block truncate text-sm font-medium">{CONTACT.handle}</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={CONTACT.email}
              className="group flex items-center gap-4 rounded-2xl border border-gold/50 bg-gold/5 p-5 transition-colors hover:border-gold hover:bg-gold/10"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold text-black">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-heading text-sm tracking-wider text-gold">
                  E-MAIL PROFISSIONAL
                </span>
                <span className="block truncate text-sm font-medium text-foreground">
                  {CONTACT.emailAddress}
                </span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        <footer className="mt-16 border-t border-gold/20 pt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            VOLTAR PARA OS LINKS
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nerd em Cena · CNPJ 60.907.624/0001-19
          </p>
        </footer>
      </main>
    </div>
  );
}
