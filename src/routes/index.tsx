import { createFileRoute } from "@tanstack/react-router";
import {
  Instagram,
  Youtube,
  Music2,
  Clapperboard,
  Star,
  Gift,
  MessageCircle,
  Mail,
  ArrowRight,
  Download,
  Trophy,
  Calendar,
  Drama,
  Sparkles,
  Zap,
} from "lucide-react";

import { NerdLogo } from "@/components/nerd-logo";
import { SectionTitle } from "@/components/section-title";
import { SocialButton } from "@/components/social-button";
import { ServiceCard } from "@/components/service-card";
import { CONTACT, PRODUCT_LINKS, SOCIAL_LINKS } from "@/lib/links";
import kitImg from "@/assets/kit-rpg-teatro.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nerd em Cena — Animes, games e cultura nerd com humor" },
      {
        name: "description",
        content:
          "Nerd em Cena: animes, games, cobertura de eventos, RPG e teatro. Siga no Instagram, YouTube e TikTok.",
      },
      { property: "og:title", content: "Nerd em Cena — Animes, games e cultura nerd com humor" },
      {
        property: "og:description",
        content:
          "Nerd em Cena: animes, games, cobertura de eventos, RPG e teatro. Siga no Instagram, YouTube e TikTok.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-foreground">
      {/* Decorative starfield */}
      <div className="pointer-events-none fixed inset-0 stars" />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <main className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="flex flex-col items-center py-12 text-center">
          <div className="relative">
            <NerdLogo className="h-36 w-auto drop-shadow-[0_0_25px_rgba(242,196,9,0.35)] md:h-44" />
            <Sparkles className="absolute -right-4 top-0 h-6 w-6 text-gold animate-pulse" />
            <Zap className="absolute -left-6 bottom-4 h-7 w-7 text-gold" />
          </div>

          <h1 className="mt-6 font-['Bangers'] text-5xl tracking-wide text-foreground md:text-7xl">
            NERD <span className="text-gold">EM</span> CENA
          </h1>
          <p className="mt-2 font-mono text-sm uppercase tracking-widest text-gold">
            @nerdemcenaoficial
          </p>

          <div className="mt-6 flex items-center gap-4">
            <SocialIcon href={SOCIAL_LINKS.instagram} icon={<Instagram className="h-5 w-5" />} label="Instagram" />
            <SocialIcon href={SOCIAL_LINKS.youtube} icon={<Youtube className="h-5 w-5" />} label="YouTube" />
            <SocialIcon href={SOCIAL_LINKS.tiktok} icon={<Music2 className="h-5 w-5" />} label="TikTok" />
          </div>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Animes, games e cobertura de eventos sempre{" "}
            <span className="font-semibold text-gold">com humor!</span>
          </p>
        </section>

        {/* Videos */}
        <section className="mt-4">
          <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-6 backdrop-blur-sm md:p-8">
            <SectionTitle
              icon={<Clapperboard className="h-5 w-5" />}
              subtitle="Shorts, reels e momentos épicos da cultura nerd."
            >
              VEJA NOSSOS VÍDEOS
            </SectionTitle>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <SocialButton
                platform="instagram"
                label="Instagram"
                handle="@NerdEmCenaOficial"
                href={SOCIAL_LINKS.instagram}
              />
              <SocialButton
                platform="youtube"
                label="YouTube Shorts"
                handle="Nerd em Cena"
                href={SOCIAL_LINKS.youtube}
              />
              <SocialButton
                platform="tiktok"
                label="TikTok"
                handle="@NerdEmCenaOficial"
                href={SOCIAL_LINKS.tiktok}
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mt-6">
          <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-6 backdrop-blur-sm md:p-8">
            <SectionTitle
              icon={<Star className="h-5 w-5" />}
              subtitle="Projetos, cursos e experiências para quem vive a cultura nerd."
            >
              TAMBÉM FAZEMOS
            </SectionTitle>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<Drama className="h-7 w-7" />}
                title="TEATRO + RPG"
                description="Cursos, materiais e projetos que misturam teatro e cultura nerd."
                href={PRODUCT_LINKS.comoEnsinar}
                buttonText="SAIBA MAIS"
              />
              <ServiceCard
                icon={<Calendar className="h-7 w-7" />}
                title="EVENTOS"
                description="Cobertura, participações e experiências nos principais eventos nerds."
                href={SOCIAL_LINKS.instagram}
                buttonText="SAIBA MAIS"
              />
              <ServiceCard
                icon={<Trophy className="h-7 w-7" />}
                title="TORNEIOS"
                description="Competições e projetos especiais do Nerd em Cena."
                href="/torneios"
                buttonText="SAIBA MAIS"
              />
            </div>
          </div>
        </section>

        {/* Kit highlight */}
        <section className="mt-6">
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold via-gold to-gold-muted p-6 text-black md:p-8">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-black/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-black/10 blur-3xl" />
            <div className="relative flex flex-col items-center gap-6 md:flex-row">
              <div className="w-40 shrink-0 md:w-48">
                <img
                  src={kitImg}
                  alt="Kit Iniciante de RPG e Teatro"
                  width={260}
                  height={360}
                  className="drop-shadow-2xl"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 text-sm font-semibold text-black">
                  <Gift className="h-4 w-4" />
                  DESTAQUE
                </div>
                <h2 className="mt-3 font-['Bangers'] text-3xl tracking-wide md:text-4xl">
                  KIT INICIANTE DE RPG E TEATRO
                </h2>
                <p className="mt-2 max-w-lg text-black/80">
                  Quer experimentar uma atividade diferente? Baixe gratuitamente
                  nosso Kit Iniciante!
                </p>
              </div>
              <a
                href={PRODUCT_LINKS.kitIniciante}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-gold transition-transform hover:scale-105 hover:gold-glow"
              >
                BAIXAR GRÁTIS
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-6">
          <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-6 backdrop-blur-sm md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <SectionTitle
                  icon={<MessageCircle className="h-5 w-5" />}
                  subtitle="Dúvidas, sugestões, parcerias ou convites para eventos? Chama a gente no Instagram!"
                >
                  FALE COM A GENTE
                </SectionTitle>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
                <a
                  href={SOCIAL_LINKS.instagramDm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-black transition-transform hover:scale-105"
                >
                  <Instagram className="h-4 w-4" />
                  FALAR NO INSTAGRAM
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={CONTACT.email}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-gold px-6 py-3.5 text-sm font-bold text-gold transition-colors hover:bg-gold/10"
                >
                  <Mail className="h-4 w-4" />
                  E-MAIL
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/20 py-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <NerdLogo className="h-12 w-auto" />
            <div>
              <p className="font-['Bangers'] text-xl tracking-wide text-foreground">
                NERD <span className="text-gold">EM</span> CENA
              </p>
              <p className="text-sm text-muted-foreground">
                Onde a cultura nerd <span className="text-gold">vira cena</span>.
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground sm:text-right">
            © {new Date().getFullYear()} Nerd em Cena.
            <br />
            Todos os direitos reservados.
          </p>
        </footer>
      </main>
    </div>
  );
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-black transition-transform hover:scale-110 hover:gold-glow"
    >
      {icon}
    </a>
  );
}
