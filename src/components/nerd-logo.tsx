// Asset logo
const logoAsset = { url: "/assets-v1/logo-nerd-em-cena.png" };

interface NerdLogoProps {
  className?: string;
  alt?: string;
  glow?: boolean;
  loading?: "eager" | "lazy";
}

export function NerdLogo({
  className = "h-28 w-28",
  alt = "Nerd em Cena",
  glow = true,
  loading = "eager",
}: NerdLogoProps) {
  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full ${className}`}
    >
      <img
        src={logoAsset.url}
        alt={alt}
        loading={loading}
        className={`h-full w-full rounded-full object-contain ${
          glow ? "drop-shadow-[0_0_30px_rgba(232,191,20,0.5)]" : ""
        }`}
      />
    </div>
  );
}
