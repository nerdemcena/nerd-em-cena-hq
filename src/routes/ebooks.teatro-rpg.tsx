import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Check,
  Clock,
  Dices,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import { NerdLogo } from "@/components/nerd-logo";
import { SectionTitle } from "@/components/section-title";
import ebookRpg from "@/assets/ebook-rpg.jpg.asset.json";
import ebookPacote from "@/assets/ebook-pacote.png.asset.json";

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

const DORES = [
  "A turma dispersa em 5 minutos e você perde a aula.",
  "Você passa horas planejando e o resultado não empolga ninguém.",
  "Falta repertório de jogos para grupos grandes e bagunceiros.",
  "Você sabe que RPG funcionaria — mas não sabe por onde começar.",
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
          description:
            "E-book com o método para unir teatro e RPG em sala de aula.",
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
    <div className="relative min-h-screen overflow-x-hidden bg-black text-foreground">
      <div className="pointer-events-none fixed inset-0 stars" />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <main className="relative mx-auto max-w-3xl px-4 py-8 sm:px-6">
        {/* Hero */}
        <section className="rounded-3xl border border-gold/20 bg-black-card/50 p-6 backdrop-blur-sm md:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-xs font-bold tracking-widest text-gold">
            <Dices className="h-3.5 w-3.5" /> E-BOOK NERD EM CENA
          </span>
          <h1 className="mt-4 font-heading text-4xl leading-tight tracking-wide text-foreground md:text-6xl">
            COMO ENSINAR TEATRO <span className="text-gold">COM RPG</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            O guia prático para trocar a aula que ninguém quer assistir por uma
            aventura que a turma não quer que acabe. Método, exemplos e passo a
            passo — do primeiro dado rolado ao aplauso final.
          </p>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
            <img
              src={ebookRpg.url}
              alt="Capa do e-book Como Ensinar Teatro com RPG"
              width={300}
              height={400}
              className="h-48 w-auto self-center rounded-xl object-contain"
            />
            <div className="flex-1">
              <p className="flex items-baseline gap-2">
                <span className="font-heading text-4xl text-gold">R$ 24,90</span>
                <span className="text-sm text-muted-foreground">
                  pagamento único · acesso imediato
                </span>
              </p>
              <a
                href={CHECKOUT_UNICO}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-sm font-bold text-black transition-transform hover:scale-[1.02]"
              >
                QUERO O E-BOOK
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                PDF para ler no celular, tablet ou imprimir. Compra segura via
                Hotmart.
              </p>
            </div>
          </div>
        </section>

        {/* Dores */}
        <section className="mt-6 rounded-3xl border border-gold/20 bg-black-card/50 p-6 backdrop-blur-sm md:p-8">
          <SectionTitle
            icon={<Clock className="h-5 w-5" />}
            subtitle="Se você já viveu isso, esse material foi escrito pra você."
          >
            SOA FAMILIAR?
          </SectionTitle>
          <ul className="grid gap-3">
            {DORES.map((d) => (
              <li
                key={d}
                className="rounded-xl border border-gold/15 bg-black p-4 text-sm text-muted-foreground"
              >
                {d}
              </li>
            ))}
          </ul>
        </section>

        {/* O que você aprende */}
        <section className="mt-6 rounded-3xl border border-gold/20 bg-black-card/50 p-6 backdrop-blur-sm md:p-8">
          <SectionTitle
            icon={<Sparkles className="h-5 w-5" />}
            subtitle="Nada de teoria solta: tudo pensado para aplicar na próxima aula."
          >
            O QUE VOCÊ VAI DOMINAR
          </SectionTitle>
          <ul className="grid gap-3">
            {APRENDIZADOS.map((a) => (
              <li key={a} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-black">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-foreground">{a}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Para quem é */}
        <section className="mt-6 rounded-3xl border border-gold/20 bg-black-card/50 p-6 backdrop-blur-sm md:p-8">
          <SectionTitle icon={<Users className="h-5 w-5" />}>
            PARA QUEM É
          </SectionTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Professores de teatro e artes",
              "Pedagogos e coordenadores",
              "Mestres de RPG que querem ensinar",
              "Educadores sociais e oficineiros",
            ].map((p) => (
              <div
                key={p}
                className="rounded-xl border border-gold/25 bg-black p-4 text-sm font-semibold text-foreground"
              >
                {p}
              </div>
            ))}
          </div>
        </section>

        {/* Oferta do pacote — destaque */}
        <section className="mt-8">
          <div className="relative overflow-hidden rounded-3xl border-2 border-gold bg-black-card p-6 gold-glow md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-bold tracking-widest text-black">
              <Star className="h-3.5 w-3.5" /> ESCOLHA INTELIGENTE
            </span>
            <h2 className="mt-4 font-heading text-3xl tracking-wide text-gold md:text-5xl">
              LEVE O PACOTE COMPLETO
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Por menos de R$ 21 a mais você não leva só o método — leva a
              biblioteca inteira: <strong className="text-foreground">4 e-books</strong>{" "}
              com aventuras e atividades prontas para o ano letivo todo.
            </p>

            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
              <img
                src={ebookPacote.url}
                alt="Capa do Super Pacote com 4 e-books de Teatro-RPG"
                width={400}
                height={400}
                className="h-48 w-auto self-center rounded-xl object-contain"
              />
              <ul className="flex-1 grid gap-3">
                {PACOTE_ITEMS.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-black">
                      <BookOpen className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm">
                      <strong className="text-foreground">{item.title}</strong>
                      <br />
                      <span className="text-muted-foreground">
                        {item.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-gold/30 bg-black p-5">
              <p className="flex flex-wrap items-baseline gap-3">
                <span className="text-sm text-muted-foreground line-through">
                  R$ 69,80
                </span>
                <span className="font-heading text-4xl text-gold md:text-5xl">
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
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-base font-bold text-black transition-transform hover:scale-[1.02]"
              >
                QUERO OS 4 E-BOOKS
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Acesso imediato · Pagamento seguro Hotmart · 7 dias de garantia
              </p>
            </div>

            <div className="mt-5 text-center">
              <a
                href={CHECKOUT_UNICO}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground underline underline-offset-4 hover:text-gold"
              >
                Prefiro só o e-book "Como Ensinar Teatro com RPG" por R$ 24,90
              </a>
            </div>
          </div>
        </section>

        {/* FAQ simples */}
        <section className="mt-6 rounded-3xl border border-gold/20 bg-black-card/50 p-6 backdrop-blur-sm md:p-8">
          <SectionTitle icon={<Dices className="h-5 w-5" />}>
            PERGUNTAS RÁPIDAS
          </SectionTitle>
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
                <p className="font-heading text-lg tracking-wide text-gold">
                  {f.q}
                </p>
                <p className="text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-12 flex flex-col items-center gap-4 border-t border-gold/20 py-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <NerdLogo className="h-12 w-auto" />
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
