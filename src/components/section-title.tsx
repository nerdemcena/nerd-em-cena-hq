import type { ReactNode } from "react";

interface SectionTitleProps {
  icon: ReactNode;
  children: ReactNode;
  subtitle?: string;
  variant?: "default" | "blue";
}

export function SectionTitle({ icon, children, subtitle, variant = "default" }: SectionTitleProps) {
  const isBlue = variant === "blue";

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${isBlue ? 'bg-blue-600 text-white shadow-[inset_-2px_-3px_0_rgba(0,0,0,0.2)]' : 'bg-gold text-black shadow-[inset_-2px_-3px_0_#b38a00]'}`}>
          {icon}
        </div>
        <h2 className="font-heading text-[26px] sm:text-3xl tracking-wide text-foreground md:text-4xl whitespace-nowrap">
          {children}
        </h2>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div className={`h-[2px] w-24 rounded-full ${isBlue ? 'bg-gradient-to-r from-gold to-blue-600' : 'gold-underline'}`} />
        <div className={`h-1.5 w-1.5 rounded-full ${isBlue ? 'bg-blue-500' : 'bg-gold'}`} />
        <div className={`h-[2px] flex-1 rounded-full ${isBlue ? 'bg-gradient-to-r from-blue-600 to-transparent' : 'gold-underline'}`} />
      </div>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
