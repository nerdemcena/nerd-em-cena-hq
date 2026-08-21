import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  buttonText?: string;
}

export function ServiceCard({ icon, title, description, href, buttonText = "SAIBA MAIS" }: ServiceCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 rounded-2xl border border-gold/40 bg-gold p-5 text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-8px_rgba(242,196,9,0.4)] sm:flex-row sm:items-center sm:justify-between sm:gap-6"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-gold">
          {icon}
        </div>
        <div>
          <h3 className="font-heading text-2xl tracking-wide">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-black/80">{description}</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center justify-between gap-3 rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-gold transition-colors group-hover:bg-black-soft">
        <span>{buttonText}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>

    </a>
  );
}
