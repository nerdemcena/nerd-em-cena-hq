import { ArrowRight, Instagram, Youtube, Music2 } from "lucide-react";

interface SocialButtonProps {
  platform: "instagram" | "youtube" | "tiktok";
  label: string;
  handle: string;
  href: string;
  variant?: "outline" | "solid";
}

const icons = {
  instagram: Instagram,
  youtube: Youtube,
  tiktok: Music2,
};

export function SocialButton({ platform, label, handle, href, variant = "outline" }: SocialButtonProps) {
  const Icon = icons[platform];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col gap-3 rounded-2xl border border-gold/30 p-5 transition-all duration-300 hover:border-gold hover:gold-glow ${
        variant === "solid" ? "bg-black-card" : "bg-black-card/60"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-black">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="font-heading text-lg tracking-wide text-gold">{label}</p>
          <p className="text-sm text-muted-foreground">{handle}</p>
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between rounded-xl bg-gold px-4 py-2.5 text-sm font-semibold text-black transition-colors group-hover:bg-gold-foreground">
        <span>VER NO {label.toUpperCase()}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </a>
  );
}
