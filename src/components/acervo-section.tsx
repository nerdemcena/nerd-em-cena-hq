import { ArrowRight, BookOpen } from "lucide-react";

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
}

export const ACERVO_ITEMS: AcervoItem[] = [
  {
    img: kitCapa.url,
    title: "KIT INICIANTE TEATRO-RPG",
    description: "Material introdutório para começar a unir teatro e RPG hoje mesmo",
    price: "GRÁTIS",
    href: "https://teatrorpg-ax9kfudz.manus.space/",
    cta: "BAIXAR",
  },
  {
    img: ebookRpg.url,
    title: "COMO ENSINAR TEATRO COM RPG",
    description: "Guia completo para integrar RPG no ensino teatral",
    price: "R$ 24,90",
    href: "https://go.hotmart.com/I104079611H",
  },
  {
    img: ebookCriancas.url,
    title: "TEATRO PARA CRIANÇAS",
    description: "Técnicas e atividades teatrais para crianças",
    price: "R$ 19,90",
    href: "https://go.hotmart.com/P86223542K",
  },
  {
    img: ebookPacote.url,
    title: "SUPER PACOTE COMPLETO",
    description: "Todos os 3 ebooks em um único pacote com desconto especial",
    price: "R$ 45,90",
    oldPrice: "R$ 69,80",
    href: "https://go.hotmart.com/L104847133B",
  },
];

export function AcervoSection({ items = ACERVO_ITEMS }: { items?: AcervoItem[] }) {
  return (
    <section className="mt-6">
      <div className="rounded-3xl border border-gold/20 bg-black-card/50 p-6 backdrop-blur-sm md:p-8">
        <SectionTitle
          icon={<BookOpen className="h-5 w-5" />}
          subtitle="Nossos e-books sobre teatro, RPG e cultura pop."
        >
          ACERVO ORIGINAL
        </SectionTitle>
        <div className="grid grid-cols-1 gap-5">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-2xl border border-gold/30 bg-black p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold sm:flex-row sm:items-center"
            >
              <img
                src={item.img}
                alt={`Capa do e-book ${item.title}`}
                width={300}
                height={400}
                loading="lazy"
                className="h-40 w-auto self-center rounded-xl object-contain sm:h-32"
              />
              <div className="flex-1">
                <h3 className="font-heading text-xl tracking-wide text-gold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="font-heading text-2xl text-foreground">{item.price}</span>
                  {item.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {item.oldPrice}
                    </span>
                  )}
                </p>
              </div>
              <div className="flex shrink-0 items-center justify-between gap-3 rounded-xl bg-gold px-4 py-2.5 text-sm font-bold text-black transition-colors group-hover:bg-gold-muted">
                <span>{item.cta ?? "COMPRAR"}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
