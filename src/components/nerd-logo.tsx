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
}: NerdLogoProps) {
  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full ${className}`}
      role="img"
      aria-label={alt}
    >
      <svg
        viewBox="0 0 200 200"
        className={`h-full w-full rounded-full select-none ${
          glow ? "drop-shadow-[0_0_30px_rgba(232,191,20,0.5)]" : ""
        }`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="nerd-emblem-clip">
            <circle cx="100" cy="100" r="86" />
          </clipPath>
        </defs>

        {/* Outer Base */}
        <circle cx="100" cy="100" r="98" fill="#090900" />

        {/* Outer Radiant Gold Border Ring */}
        <circle cx="100" cy="100" r="92" stroke="#E8BF14" strokeWidth="5" fill="#111100" />

        {/* Inner Dark Margin Ring */}
        <circle cx="100" cy="100" r="86" fill="#111111" />

        {/* Clipped Emblem (Yellow Top, Dark Bottom) */}
        <g clipPath="url(#nerd-emblem-clip)">
          {/* Top Half Yellow */}
          <rect x="0" y="0" width="200" height="112" fill="#E8BF14" />
          {/* Bottom Half Black */}
          <rect x="0" y="112" width="200" height="88" fill="#141414" />

          {/* 3D Black Drop Shadow Behind 'NERD' */}
          <text
            x="100"
            y="107"
            textAnchor="middle"
            fontFamily="'Anton', 'Bangers', 'Inter', sans-serif"
            fontStyle="italic"
            fontWeight="900"
            fontSize="52"
            letterSpacing="0.5px"
            fill="#000000"
            stroke="#000000"
            strokeWidth="11"
            strokeLinejoin="round"
            transform="skewX(-6) translate(3, 4)"
          >
            NERD
          </text>

          {/* 3D Black Drop Shadow Behind 'EM CENA' */}
          <text
            x="100"
            y="143"
            textAnchor="middle"
            fontFamily="'Anton', 'Bangers', 'Inter', sans-serif"
            fontStyle="italic"
            fontWeight="900"
            fontSize="28"
            letterSpacing="1.5px"
            fill="#000000"
            stroke="#000000"
            strokeWidth="9"
            strokeLinejoin="round"
            transform="skewX(-6) translate(2, 3)"
          >
            EM CENA
          </text>

          {/* Main White 'NERD' Text with Thick Outline */}
          <text
            x="100"
            y="107"
            textAnchor="middle"
            fontFamily="'Anton', 'Bangers', 'Inter', sans-serif"
            fontStyle="italic"
            fontWeight="900"
            fontSize="52"
            letterSpacing="0.5px"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="6"
            strokeLinejoin="round"
            paintOrder="stroke fill"
            transform="skewX(-6)"
          >
            NERD
          </text>

          {/* Main Gold 'EM CENA' Text with Thick Outline */}
          <text
            x="100"
            y="143"
            textAnchor="middle"
            fontFamily="'Anton', 'Bangers', 'Inter', sans-serif"
            fontStyle="italic"
            fontWeight="900"
            fontSize="28"
            letterSpacing="1.5px"
            fill="#E8BF14"
            stroke="#000000"
            strokeWidth="5"
            strokeLinejoin="round"
            paintOrder="stroke fill"
            transform="skewX(-6)"
          >
            EM CENA
          </text>
        </g>

        {/* Inner Outline Ring */}
        <circle
          cx="100"
          cy="100"
          r="86"
          stroke="#000000"
          strokeWidth="2.5"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
