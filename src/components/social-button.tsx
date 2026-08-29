import { ArrowRight, Instagram, Youtube } from "lucide-react";

interface SocialButtonProps {
  platform: "instagram" | "youtube" | "tiktok" | "twitch";
  label: string;
  handle: string;
  href: string;
  variant?: "outline" | "solid";
}

function TwitchIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
    </svg>
  );
}

function TikTokIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

const icons = {
  instagram: Instagram,
  youtube: Youtube,
  tiktok: TikTokIcon,
  twitch: TwitchIcon,
};

export function SocialButton({
  platform,
  label,
  handle,
  href,
  variant = "outline",
}: SocialButtonProps) {
  const Icon = icons[platform];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col gap-3 rounded-2xl border border-gold/30 p-4 transition-all duration-300 hover:border-gold hover:gold-glow sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
        variant === "solid" ? "bg-black-card" : "bg-black-card/60"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-black shadow-[inset_-2px_-3px_0_#b38a00]">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="font-heading text-xl tracking-wide text-white">{label}</p>
          <p className="text-sm text-muted-foreground">{handle}</p>
        </div>
      </div>
      <div className="bg-gold transition-colors group-hover:bg-gold-muted flex shrink-0 items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs font-bold text-black">
        <span>VER N{['Instagram', 'YouTube', 'TikTok'].includes(label) ? 'O' : 'A'} {label.toUpperCase()}</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </a>
  );
}
