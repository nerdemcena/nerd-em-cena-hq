import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail, ArrowRight } from "lucide-react";

import { NerdLogo } from "@/components/nerd-logo";
import { SectionTitle } from "@/components/section-title";
import { AcervoSection } from "@/components/acervo-section";
import { CONTACT, SOCIAL_LINKS } from "@/lib/links";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nerd em Cena — Acervo original de teatro e RPG" },
      {
        name: "description",
        content:
          "Acervo original do Nerd em Cena: kit iniciante gratuito e e-books sobre teatro, RPG e cultura pop.",
      },
      { property: "og:title", content: "Nerd em Cena — Acervo original de teatro e RPG" },
      {
        property: "og:description",
        content:
          "Acervo original do Nerd em Cena: kit iniciante gratuito e e-books sobre teatro, RPG e cultura pop.",
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

      <main className="relative mx-auto max-w-2xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
        <h1 className="sr-only">Nerd em Cena — Acervo original</h1>

        {/* Acervo / ebooks */}
        <AcervoSection />

        {/* Contact */}
        <section className="mt-6">
          <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-4 backdrop-blur-sm sm:p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <SectionTitle
                  icon={<MessageCircle className="h-5 w-5" />}
                  subtitle="Dúvidas, sugestões, parcerias ou convites para eventos? Chama a gente no Instagram!"
                >
                  FALE COM A GENTE
                </SectionTitle>
              </div>
              <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row md:w-auto md:shrink-0">
                <a
                  href={SOCIAL_LINKS.instagramDm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3.5 text-sm font-bold text-black transition-transform hover:scale-[1.02] sm:w-auto"
                >
                  <Instagram className="h-4 w-4" />
                  FALAR NO INSTAGRAM
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={CONTACT.email}
                  className="group inline-flex w-full min-w-0 items-center gap-3 rounded-xl border border-gold/60 bg-gold/5 px-4 py-3 text-left transition-colors hover:border-gold hover:bg-gold/10 sm:w-auto"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold text-black">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="font-heading text-[11px] tracking-widest text-gold">
                      E-MAIL
                    </span>
                    <span className="truncate text-[13px] font-medium text-foreground sm:text-sm">
                      {CONTACT.emailAddress}
                    </span>
                  </span>
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
