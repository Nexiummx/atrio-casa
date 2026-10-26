import { useId } from "react";

const SIDE = 10;
const HOUSE = 22;
const GALLERY = 2.6;
const RING = 14.2;

/** Columnas de la galería alrededor del patio, cuatro por lado. */
const columns = (() => {
  const r = SIDE / 2 + 0.55;
  const pts: [number, number][] = [];
  for (let i = 0; i < 4; i++) {
    const t = -r + (i * (2 * r)) / 3;
    pts.push([t, -r], [t, r], [-r, t], [r, t]);
  }
  return pts.filter(
    ([x, y], i, all) => all.findIndex(([a, b]) => Math.abs(a - x) < 0.01 && Math.abs(b - y) < 0.01) === i,
  );
})();

type Lit = { x: number; y: number; w: number; h: number } | null;

/** Planta de una casa con patio central y la luz que entra a una hora dada. */
export function PatioPlan({ lit, azimuth, up, label }: { lit: Lit; azimuth: number; up: boolean; label: string }) {
  const titleId = useId();
  const sunX = Math.sin((azimuth * Math.PI) / 180) * RING;
  const sunY = -Math.cos((azimuth * Math.PI) / 180) * RING;

  return (
    <svg viewBox="-16 -16 32 32" role="img" aria-labelledby={titleId}>
      <title id={titleId}>{label}</title>
      <rect x={-HOUSE / 2} y={-HOUSE / 2} width={HOUSE} height={HOUSE} rx={0.4} fill="#3b2c21" />
      <rect
        x={-SIDE / 2 - GALLERY}
        y={-SIDE / 2 - GALLERY}
        width={SIDE + GALLERY * 2}
        height={SIDE + GALLERY * 2}
        fill="#d6c7ad"
      />
      <rect x={-SIDE / 2} y={-SIDE / 2} width={SIDE} height={SIDE} fill="#0a0908" />
      {lit ? <rect x={lit.x} y={lit.y} width={lit.w} height={lit.h} fill="#f6dfa8" /> : null}
      {columns.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={0.38} fill="#11100e" />
      ))}
      <rect x={-1.1} y={HOUSE / 2 - 0.6} width={2.2} height={0.6} fill="#161617" />
      {up ? <circle cx={sunX} cy={sunY} r={1.1} fill="#e8b25a" /> : null}
      <text x={0} y={-HOUSE / 2 - 1.4} textAnchor="middle" fontSize={1.3} fill="#a1a1a6">
        N
      </text>
    </svg>
  );
}
