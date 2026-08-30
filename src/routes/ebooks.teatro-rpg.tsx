import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Book, BookOpen, Check, Dices, Sparkles, Star, Users } from "lucide-react";

import { NerdLogo } from "@/components/nerd-logo";
import { SectionTitle } from "@/components/section-title";
// Ebook assets
const ebookRpg = { url: "/assets-v1/ebook-rpg.jpg" };
const ebookPacote = { url: "/assets-v1/ebook-pacote.png" };

const CHECKOUT_UNICO =
  "https://pay.hotmart.com/I104079611H?sck=HOTMART_PRODUCT_PAGE&off=4c5nx472&hotfeature=32&bid=1787343121644";
const CHECKOUT_PACOTE =
  "https://pay.hotmart.com/L104847133B?sck=HOTMART_PRODUCT_PAGE&off=mp5a34do&hotfeature=32&bid=1787343101244";

const PACOTE_ITEMS = [
  {
    title: "Como Ensinar Teatro com RPG",
    description: "O método completo para transformar suas aulas em aventuras.",
  },
  {
    title: "Teatro para Crianças",
    description: "Jogos, aquecimentos e dinâmicas testados em sala.",
  },
  {
    title: "+10 Aventuras Base Prontas para Jogar",
    description: "Roteiros prontos: leia, imprima e conduza a turma hoje.",
  },
  {
    title: "+20 Atividades de Teatro-RPG",
    description: "Exercícios rápidos para qualquer faixa etária.",
  },
];

const APRENDIZADOS = [
  "Estruturar uma aula-aventura do aquecimento ao encerramento.",
  "Criar personagens que destravam alunos travados e tímidos.",
  "Conduzir a turma como narrador, sem perder o controle da sala.",
  "Adaptar qualquer conteúdo curricular para uma mesa de RPG.",
  "Avaliar o aluno pelo jogo, sem prova e sem trauma.",
];

export const Route = createFileRoute("/ebooks/teatro-rpg")({
  head: () => ({
    meta: [
      { title: "Como Ensinar Teatro com RPG — E-book | Nerd em Cena" },
      {
        name: "description",
        content:
          "O e-book que transforma suas aulas de teatro em aventuras de RPG: método, aventuras prontas e atividades. Leve o pacote com 4 e-books e economize.",
      },
      {
        property: "og:title",
        content: "Como Ensinar Teatro com RPG — E-book | Nerd em Cena",
      },
      {
        property: "og:description",
        content:
          "Método, aventuras prontas e +20 atividades de Teatro-RPG. Pacote com 4 e-books com desconto.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/ebooks/teatro-rpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ebooks/teatro-rpg" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Como Ensinar Teatro com RPG",
          description: "E-book com o método para unir teatro e RPG em sala de aula.",
          brand: { "@type": "Brand", name: "Nerd em Cena" },
          offers: {
            "@type": "Offer",
            price: "24.90",
            priceCurrency: "BRL",
            url: CHECKOUT_UNICO,
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: SalesPage,
});

function SalesPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020817] text-foreground">
      <div className="pointer-events-none fixed inset-0 stars" />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-\[#0a192f\] via-transparent to-\[#020817\]" />

      <main className="relative mx-auto max-w-3xl px-3 py-6 sm:px-6 sm:py-8">
        {/* Hero — foco em pais nerds e RPGistas */}
        <section className="rounded-3xl border border-blue-900/50 bg-[#0a192f]/50 p-5 backdrop-blur-sm sm:p-6 md:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 px-3 py-1 text-xs font-bold tracking-widest text-blue-400">
            <Dices className="h-3.5 w-3.5" /> E-BOOK NERD EM CENA
          </span>
          <h1 className="mt-4 font-heading text-3xl leading-[1.05] tracking-wide text-foreground sm:text-4xl md:text-6xl">
            RPG SEMPRE FOI UM JOGO DE <span className="text-gold">INTERPRETAR</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            E com esse guia completo, você vai transformar a diversão da mesa em teatro,
            criatividade e colaboração que ninguém quer que acabe.
          </p>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="relative flex shrink-0 justify-center sm:block">
              <div className="absolute inset-0 scale-125 rounded-full bg-blue-500/20 blur-2xl" />
              <img
                src={ebookRpg.url}
                alt="Capa do e-book Como Ensinar Teatro com RPG"
                width={300}
                height={400}
                className="relative z-10 h-44 w-auto shrink-0 self-center rounded-xl object-contain sm:h-48"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col items-center gap-1 sm:items-start">
                <span className="font-heading text-4xl leading-none text-gold">R$ 24,90</span>
                <span className="text-xs text-muted-foreground sm:text-sm">
                  pagamento único • acesso imediato
                </span>
              </div>
              <a
                href={CHECKOUT_UNICO}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-4 py-3 sm:px-6 sm:py-4 text-sm font-bold text-white transition-all hover:scale-[1.02] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_15px_rgba(37,99,235,0.4)] hover:from-blue-400 hover:to-blue-600"
              >
                QUERO O E-BOOK
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-3 text-xs text-center sm:text-left text-muted-foreground">
                PDF para ler no celular, tablet ou imprimir. Compra segura via Hotmart.
              </p>
            </div>
          </div>

          {/* Teaser do pacote logo no início */}
          <a
            href={CHECKOUT_PACOTE}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 block rounded-2xl border border-blue-900/70 bg-blue-600/10 p-4 transition-colors hover:bg-blue-600/20"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center text-gold">
                <Book className="absolute -left-0.5 top-0.5 h-5 w-5 rotate-[-8deg] opacity-60" />
                <BookOpen className="relative h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-heading text-sm leading-snug tracking-wide text-foreground">
                  Ainda mais barato levando o Pacote Completo
                </p>
                <p className="mt-0.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs text-muted-foreground">
                  <span>
                    4 e-books por <span className="font-heading text-gold">R$ 45,90</span>
                  </span>
                  <span className="line-through">R$ 69,80</span>
                  <span className="inline-flex items-center whitespace-nowrap text-gold">
                    · ver oferta
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </p>
              </div>
            </div>
          </a>
        </section>

        {/* O que você aprende */}
        <section className="mt-6 rounded-3xl border border-blue-900/50 bg-[#0a192f]/50 p-4 backdrop-blur-sm sm:p-6 md:p-8">
          <SectionTitle variant="blue"
            icon={<Sparkles className="h-5 w-5" />}
            subtitle="Nada de teoria solta: tudo pensado para aplicar na próxima mesa ou aula."
          >
            O QUE VOCÊ VAI DOMINAR
          </SectionTitle>
          <ul className="grid gap-3">
            {APRENDIZADOS.map((a) => (
              <li key={a} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-foreground">{a}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Para quem é — pais nerds e RPGistas em primeiro lugar */}
        <section className="mt-6 rounded-3xl border border-blue-900/50 bg-[#0a192f]/50 p-4 backdrop-blur-sm sm:p-6 md:p-8">
          <SectionTitle variant="blue" icon={<Users className="h-5 w-5" />}>PARA QUEM É</SectionTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Pais nerds que jogam RPG com os filhos",
              "Mestres de RPG que querem ensinar teatro",
              "Professores de teatro e artes",
              "Educadores sociais e oficineiros",
            ].map((p) => (
              <div
                key={p}
                className="group flex items-start gap-3 rounded-xl border border-blue-900/60 bg-[#020817] p-4 text-sm font-semibold text-foreground transition-all hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_4px_20px_-5px_rgba(37,99,235,0.3)]"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-black">
                  <Check className="h-3 w-3" />
                </div>
                <span className="leading-snug">{p}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Oferta do pacote — destaque */}
        <section className="mt-8">
          <div className="relative overflow-hidden rounded-3xl border-2 border-blue-600 bg-[#0a192f] p-5 shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] sm:p-6 md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-bold tracking-widest text-black">
              <Star className="h-3.5 w-3.5" /> ESCOLHA INTELIGENTE
            </span>
            <h2 className="mt-4 font-heading text-2xl leading-tight tracking-wide text-white sm:text-3xl md:text-5xl">
              LEVE O PACOTE COMPLETO
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Por menos de R$ 21 a mais você não leva só o método — leva a biblioteca inteira:{" "}
              <strong className="text-foreground">4 e-books</strong> com aventuras e atividades
              prontas para começar agora mesmo.
            </p>

            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="relative flex shrink-0 justify-center sm:block">
                <div className="absolute inset-0 scale-125 rounded-full bg-blue-500/20 blur-2xl" />
                <img
                  src={ebookPacote.url}
                  alt="Capa do Super Pacote com 4 e-books de Teatro-RPG"
                  width={400}
                  height={400}
                  className="relative z-10 h-44 w-auto shrink-0 self-center rounded-xl object-contain sm:h-48"
                />
              </div>
              <ul className="grid min-w-0 flex-1 gap-3">
                {PACOTE_ITEMS.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                      <BookOpen className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm">
                      <strong className="text-foreground">{item.title}</strong>
                      <br />
                      <span className="text-muted-foreground">{item.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-900/70 bg-[#020817] p-5">
              <p className="flex flex-wrap items-baseline gap-3">
                <span className="text-sm text-muted-foreground line-through">R$ 69,80</span>
                <span className="font-heading text-3xl text-gold sm:text-4xl md:text-5xl">
                  R$ 45,90
                </span>
                <span className="rounded-full bg-gold px-2.5 py-1 text-xs font-bold text-black">
                  ECONOMIZE R$ 23,90
                </span>
              </p>
              <a
                href={CHECKOUT_PACOTE}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-bold text-white transition-all hover:scale-[1.02] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_15px_rgba(37,99,235,0.4)] hover:from-blue-400 hover:to-blue-600"
              >
                QUERO OS 4 E-BOOKS
                <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Acesso imediato • Pagamento seguro Hotmart • 7 dias de garantia
              </p>
            </div>

            <div className="mt-5 text-center">
              <a
                href={CHECKOUT_UNICO}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground underline underline-offset-4 hover:text-blue-400"
              >
                Prefiro só o e-book "Como Ensinar Teatro com RPG" por R$ 24,90
              </a>
            </div>
          </div>
        </section>

        {/* FAQ simples */}
        <section className="mt-6 rounded-3xl border border-blue-900/50 bg-[#0a192f]/50 p-4 backdrop-blur-sm sm:p-6 md:p-8">
          <SectionTitle variant="blue" icon={<Dices className="h-5 w-5" />}>PERGUNTAS RÁPIDAS</SectionTitle>
          <div className="grid gap-4">
            {[
              {
                q: "Preciso saber jogar RPG?",
                a: "Não. O material começa do zero e explica cada elemento em linguagem de sala de aula.",
              },
              {
                q: "Serve para qual idade?",
                a: "As atividades são adaptáveis da infância ao ensino médio, com variações indicadas em cada jogo.",
              },
              {
                q: "Como recebo?",
                a: "Em PDF, por e-mail, imediatamente após a confirmação do pagamento.",
              },
            ].map((f) => (
              <div key={f.q}>
                <p className="font-heading text-lg tracking-wide text-blue-400">{f.q}</p>
                <p className="text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-12 flex flex-col items-center gap-4 border-t border-blue-900/50 py-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <NerdLogo className="h-12 w-12" glow={false} />
            <p className="font-heading text-xl tracking-wide text-foreground">
              NERD <span className="text-gold">EM</span> CENA
            </p>
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
