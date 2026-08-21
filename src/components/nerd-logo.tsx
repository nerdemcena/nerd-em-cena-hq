import logo from "@/assets/logo-nerd-em-cena.png";

interface NerdLogoProps {
  className?: string;
  alt?: string;
}

export function NerdLogo({ className = "h-24 w-auto", alt = "Nerd em Cena" }: NerdLogoProps) {
  return (
    <img
      src={logo}
      alt={alt}
      width={512}
      height={512}
      className={className}
    />
  );
}
