import logoAsset from "@/assets/logo-nerd-em-cena.png.asset.json";

interface NerdLogoProps {
  className?: string;
  alt?: string;
}

export function NerdLogo({ className = "h-24 w-auto", alt = "Nerd em Cena" }: NerdLogoProps) {
  return (
    <img
      src={logoAsset.url}
      alt={alt}
      width={1024}
      height={1024}
      className={className}
    />
  );
}
