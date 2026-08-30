import type { ReactNode } from "react";

interface SectionTitleProps {
  icon: ReactNode;
  children: ReactNode;
  subtitle?: string;
}

export function SectionTitle({ icon, children, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-black shadow-[inset_-2px_-3px_0_#b38a00]">
          {icon}
        </div>
        <h2 className="font-heading text-[26px] sm:text-3xl tracking-wide text-foreground md:text-4xl whitespace-nowrap">
          {children}
        </h2>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div className="gold-underline w-24 rounded-full" />
        <div className="h-1.5 w-1.5 rounded-full bg-gold" />
        <div className="gold-underline flex-1 rounded-full" />
      </div>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
