export const SvgTexture = ({ className }: { className?: string }) => (
  <svg id="texture" className={className}>
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency=".8"
        numOctaves="4"
        stitchTiles="stitch"
      ></feTurbulence>
      <feColorMatrix type="saturate" values="0"></feColorMatrix>
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)"></rect>
  </svg>
);
