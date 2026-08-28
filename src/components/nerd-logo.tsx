import { useState } from "react";
import logoAsset from "@/assets/logo-nerd-em-cena.png.asset.json";

interface NerdLogoProps {
  className?: string;
  alt?: string;
  loading?: "eager" | "lazy";
}

export function NerdLogo({
  className = "h-24 w-auto",
  alt = "Nerd em Cena",
  loading = "eager",
}: NerdLogoProps) {
  const [src, setSrc] = useState(logoAsset.url);

  return (
    <img
      src={src}
      alt={alt}
      width={128}
      height={128}
      loading={loading}
      decoding="async"
      onError={() => {
        if (src !== "/favicon.png") {
          setSrc("/favicon.png");
        }
      }}
      className={className}
    />
  );
}
