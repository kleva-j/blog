export const SvgTexture = ({ className }: { className?: string }) => (
  <svg id="texture" className={className}>
    <title>Texture Background</title>
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency=".8"
        numOctaves="4"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
);
