import { ArrowRight, Instagram, Youtube, Music2 } from "lucide-react";

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

const icons = {
  instagram: Instagram,
  youtube: Youtube,
  tiktok: Music2,
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
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-black">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="font-heading text-xl tracking-wide text-gold">{label}</p>
          <p className="text-sm text-muted-foreground">{handle}</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center justify-between gap-3 rounded-xl bg-gold px-4 py-2.5 text-sm font-semibold text-black transition-colors group-hover:bg-gold-muted">
        <span>VER NA {label.toUpperCase()}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </a>
  );
}
