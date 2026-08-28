import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Instagram,
  Youtube,
  Music2,
  MessageCircle,
  Mail,
  ArrowRight,
  Clapperboard,
  Swords,
  Lock,
} from "lucide-react";

import { NerdLogo } from "@/components/nerd-logo";
import { SectionTitle } from "@/components/section-title";
import { SocialButton } from "@/components/social-button";
import { AcervoSection } from "@/components/acervo-section";
import { CONTACT, SOCIAL_LINKS } from "@/lib/links";

function TwitchIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nerd em Cena — Acervo original de teatro e RPG" },
      {
        name: "description",
        content:
          "Acervo original do Nerd em Cena: animes, games, RPG, cobertura de eventos com humor, e-books e kit iniciante.",
      },
      { property: "og:title", content: "Nerd em Cena — Acervo original de teatro e RPG" },
      {
        property: "og:description",
        content:
          "Acervo original do Nerd em Cena: animes, games, RPG, cobertura de eventos com humor, e-books e kit iniciante.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

export function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-blk dots-bg font-nunito text-foreground selection:bg-gold selection:text-black">
      {/* Decorative starfield overlay */}
      <div className="pointer-events-none fixed inset-0 stars opacity-40" />

      <main className="relative mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1 className="sr-only">Nerd em Cena — Links e Acervo Oficial</h1>

        {/* HERO: LOGO + REDES + SLOGAN */}
        <header className="flex flex-col items-center text-center">
          <NerdLogo className="h-28 w-28 transition-transform duration-300 hover:scale-105 sm:h-32 sm:w-32" />
          <div className="mt-4 flex w-full flex-col items-center">
            <p className="font-heading text-sm tracking-[0.25em] text-gold sm:text-base">
              @NERDEMCENAOFICIAL
            </p>

            {/* 4 REDES SOCIAIS: INSTAGRAM, YOUTUBE, TIKTOK, TWITCH */}
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Nerd em Cena"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-black transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:gold-glow"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube do Nerd em Cena"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-black transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:gold-glow"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok do Nerd em Cena"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-black transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:gold-glow"
              >
                <Music2 className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitch}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitch do Nerd em Cena"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-black transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:gold-glow"
              >
                <TwitchIcon className="h-5 w-5" />
              </a>
            </div>

            <p className="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
              Animes, games, RPG e cobertura de eventos sempre{" "}
              <span className="font-semibold text-gold">com humor!</span>
            </p>
          </div>
        </header>

        {/* VEJA NOSSOS VÍDEOS */}
        <section className="mt-7">
          <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-4 backdrop-blur-sm sm:p-6 md:p-8">
            <SectionTitle icon={<Clapperboard className="h-5 w-5" />}>
              VEJA NOSSOS VÍDEOS
            </SectionTitle>
            <div className="grid grid-cols-1 gap-3.5 sm:gap-4">
              <SocialButton
                platform="instagram"
                label="Instagram"
                handle="@NerdEmCenaOficial"
                href={SOCIAL_LINKS.instagram}
              />
              <SocialButton
                platform="youtube"
                label="YouTube"
                handle="Nerd em Cena"
                href={SOCIAL_LINKS.youtube}
              />
              <SocialButton
                platform="tiktok"
                label="TikTok"
                handle="@NerdEmCenaOficial"
                href={SOCIAL_LINKS.tiktok}
              />
              <SocialButton
                platform="twitch"
                label="Twitch"
                handle="nerdemcena"
                href={SOCIAL_LINKS.twitch}
              />
            </div>
          </div>
        </section>

        {/* ACERVO / E-BOOKS */}
        <AcervoSection />

        {/* TORNEIOS (EM BREVE) */}
        <section className="mt-6">
          <Link
            to="/torneios"
            className="group block rounded-3xl border border-gold/20 bg-black-card/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:gold-glow sm:p-6 md:p-8"
          >
            <SectionTitle
              icon={<Swords className="h-5 w-5" />}
              subtitle="Desafios, disputas e prêmios para quem vive de animes, games e cultura pop."
            >
              TORNEIOS <span className="text-gold">(EM BREVE)</span>
            </SectionTitle>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 font-heading text-[11px] tracking-widest text-gold">
                <Lock className="h-3 w-3" />
                SELADO POR ENQUANTO
              </span>
              <span className="ml-auto inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-bold text-black transition-colors group-hover:bg-gold-muted">
                DESCOBRIR
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </section>

        {/* FALE COM A GENTE (DESKTOP + MOBILE FIX) */}
        <section className="mt-6">
          <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-4 backdrop-blur-sm sm:p-6 md:p-8">
            <SectionTitle
              icon={<MessageCircle className="h-5 w-5" />}
              subtitle="Dúvidas, sugestões, parcerias ou convites para eventos? Chama a gente!"
            >
              FALE COM A GENTE
            </SectionTitle>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href={SOCIAL_LINKS.instagramDm}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-2xl bg-gold p-4 text-black transition-all duration-300 hover:scale-[1.02] hover:gold-glow sm:p-5"
              >
                <div className="flex min-w-0 items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-gold">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <span className="block font-heading text-xs uppercase tracking-wider text-black/70">
                      INSTAGRAM DIRECT
                    </span>
                    <span className="block truncate font-heading text-base font-bold text-black sm:text-lg">
                      {CONTACT.handle}
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={CONTACT.email}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-gold/40 bg-gold/5 p-4 text-foreground transition-all duration-300 hover:border-gold hover:bg-gold/10 sm:p-5"
              >
                <div className="flex min-w-0 items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold text-black">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <span className="block font-heading text-xs uppercase tracking-wider text-gold">
                      E-MAIL PROFISSIONAL
                    </span>
                    <span className="block truncate text-xs font-medium text-foreground sm:text-sm">
                      {CONTACT.emailAddress}
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/20 py-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <NerdLogo className="h-12 w-12" glow={false} />
            <div>
              <p className="font-heading text-xl tracking-wide text-foreground">
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
