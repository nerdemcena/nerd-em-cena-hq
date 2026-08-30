import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { SectionTitle } from "@/components/section-title";
import kitCapa from "@/assets/kit-iniciante-capa.jpg.asset.json";
import ebookPacote from "@/assets/ebook-pacote.png.asset.json";
import ebookRpg from "@/assets/ebook-rpg.jpg.asset.json";
import ebookCriancas from "@/assets/ebook-criancas.jpg.asset.json";

export interface AcervoItem {
  img: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  href: string;
  cta?: string;
  tag?: string;
  variant?: "default" | "blue";
}

export const ACERVO_ITEMS: AcervoItem[] = [
  {
    img: kitCapa.url,
    title: "KIT INICIANTE TEATRO-RPG",
    description: "Material introdutório para começar a unir teatro e RPG hoje mesmo",
    price: "GRÁTIS",
    href: "/kit-iniciante",
    cta: "BAIXAR",
  },
  {
    img: ebookRpg.url,
    title: "COMO ENSINAR TEATRO COM RPG",
    description: "Guia completo para integrar RPG no ensino teatral",
    price: "R$ 24,90",
    href: "/ebooks/teatro-rpg",
    variant: "blue",
  },
  {
    img: ebookCriancas.url,
    title: "TEATRO PARA CRIANÇAS",
    description: "Técnicas e atividades teatrais para crianças",
    price: "R$ 19,90",
    href: "https://hotmart.com/pt-br/marketplace/produtos/como-ensinar-teatro-para-criancas/P86223542K?sck=HOTMART_PRODUCT_PAGE",
  },
  {
    img: ebookPacote.url,
    title: "SUPER PACOTE COMPLETO",
    description: "Todos os 3 ebooks em um único pacote com desconto especial",
    price: "R$ 45,90",
    oldPrice: "R$ 69,80",
    href: "https://go.hotmart.com/L104847133B",
    tag: "MAIOR DESCONTO",
  },
];

export function AcervoSection({ items = ACERVO_ITEMS }: { items?: AcervoItem[] }) {
  return (
    <section className="mt-6">
      <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-4 backdrop-blur-sm sm:p-6 md:p-8">
        <SectionTitle
          icon={<BookOpen className="h-5 w-5" />}
          subtitle="Nossos E-books autorais escritos por Rogério Horvat"
        >
          ACERVO ORIGINAL
        </SectionTitle>
        <div className="grid grid-cols-1 gap-5">
          {items.map((item) => {
            const isInternal = item.href.startsWith("/");
            const isBlue = item.variant === "blue";
            const cardClass =
              `group flex flex-col gap-3 rounded-2xl border p-3 transition-all duration-300 hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-4 sm:p-4 ${
                isBlue 
                  ? "border-blue-900/40 bg-gradient-to-br from-[#0a192f] to-[#020817] hover:border-blue-500/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]" 
                  : "border-gold/30 bg-black hover:border-gold"
              }`;
            const btnClass = 
              `transition-colors flex shrink-0 items-center justify-center gap-2 sm:justify-between rounded-xl px-4 py-2.5 text-sm font-bold ${
                isBlue
                  ? "bg-blue-600 text-white hover:bg-blue-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                  : "bg-gold text-black group-hover:bg-gold-muted"
              }`;

            const inner = (
              <>
                <img
                  src={item.img}
                  alt={`Capa do e-book ${item.title}`}
                  width={160}
                  height={214}
                  loading="lazy"
                  decoding="async"
                  className="h-40 w-auto shrink-0 self-center rounded-xl object-contain sm:h-32"
                />
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  {item.tag && (
                    <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-orange/40 px-3 py-1 font-heading text-[11px] tracking-widest text-[#e85d04]">
                      {item.tag}
                    </span>
                  )}
                  <h3 className="font-heading text-lg leading-tight tracking-wide text-white sm:text-xl">
                    {item.title}
                  </h3>
                  <p className={`mt-1 text-sm ${isBlue ? 'text-blue-100/70' : 'text-muted-foreground'}`}>{item.description}</p>
                  <p className="mt-2 flex flex-wrap items-baseline justify-center gap-2 sm:justify-start">
                    <span className={`font-heading text-2xl ${item.price === 'GRÁTIS' ? 'text-green-500' : isBlue ? 'text-blue-400' : 'text-foreground'}`}>
                      {item.price}
                    </span>
                    {item.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {item.oldPrice}
                      </span>
                    )}
                  </p>
                </div>
                <div className={btnClass}>
                  <span>{item.cta ?? "COMPRAR"}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </>
            );
            return isInternal ? (
              <Link key={item.title} to={item.href} className={cardClass}>
                {inner}
              </Link>
            ) : (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
