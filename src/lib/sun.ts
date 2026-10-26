/** Mérida, Yucatán: 20.97° N, 89.62° O, UTC−6 todo el año. */
export const MERIDA = { lat: 20.967, lon: -89.623, utcOffset: -6 };

const RAD = Math.PI / 180;

/** Posición aproximada del sol (precisión de décimas de grado, suficiente para dibujar sombras). */
export function sunPosition(date: Date, lat = MERIDA.lat, lon = MERIDA.lon) {
  const d = date.getTime() / 86400000 + 2440587.5 - 2451545.0;
  const g = ((357.529 + 0.98560028 * d) % 360) * RAD;
  const q = (280.459 + 0.98564736 * d) % 360;
  const L = (q + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) * RAD;
  const e = (23.439 - 0.00000036 * d) * RAD;

  const ra = Math.atan2(Math.cos(e) * Math.sin(L), Math.cos(L));
  const dec = Math.asin(Math.sin(e) * Math.sin(L));

  const gmst = (18.697374558 + 24.06570982441908 * d) % 24;
  const ha = (gmst * 15 + lon) * RAD - ra;
  const phi = lat * RAD;

  const elevation = Math.asin(
    Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(ha),
  );
  const azimuth =
    Math.atan2(Math.sin(ha), Math.cos(ha) * Math.sin(phi) - Math.tan(dec) * Math.cos(phi)) + Math.PI;

  return { elevation: elevation / RAD, azimuth: ((azimuth / RAD) % 360 + 360) % 360 };
}

/** Minutos transcurridos del día en Mérida para una fecha dada. */
export function meridaMinutes(date: Date) {
  const utcMinutes = date.getUTCHours() * 60 + date.getUTCMinutes();
  return (((utcMinutes + MERIDA.utcOffset * 60) % 1440) + 1440) % 1440;
}

/** La fecha de hoy en Mérida, a los minutos indicados. */
export function meridaDateAt(minutes: number, now = new Date()) {
  const local = new Date(now.getTime() + MERIDA.utcOffset * 3600000);
  const midnightUtc = Date.UTC(local.getUTCFullYear(), local.getUTCMonth(), local.getUTCDate());
  return new Date(midnightUtc + (minutes - MERIDA.utcOffset * 60) * 60000);
}

export function formatMinutes(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = Math.round(minutes % 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

/**
 * Luz sobre el piso de un patio cuadrado de lado `side`, con muros de altura `height`.
 * La abertura del cielo se proyecta sobre el piso desplazada en dirección contraria al sol;
 * la parte iluminada es la intersección de ambos cuadrados. Coordenadas: x al este, y al sur.
 */
export function patioLight(elevation: number, azimuth: number, side = 10, height = 5.5) {
  const half = side / 2;
  if (elevation <= 0.5) {
    return { lit: null, shade: 1 };
  }
  const reach = height / Math.tan(elevation * RAD);
  const dx = -Math.sin(azimuth * RAD) * reach;
  const dy = Math.cos(azimuth * RAD) * reach;

  const x0 = Math.max(-half, -half + dx);
  const x1 = Math.min(half, half + dx);
  const y0 = Math.max(-half, -half + dy);
  const y1 = Math.min(half, half + dy);

  if (x1 <= x0 || y1 <= y0) {
    return { lit: null, shade: 1 };
  }
  const area = (x1 - x0) * (y1 - y0);
  return {
    lit: { x: x0, y: y0, w: x1 - x0, h: y1 - y0 },
    shade: 1 - area / (side * side),
  };
}

export function compassWord(azimuth: number) {
  const words = ["norte", "noreste", "este", "sureste", "sur", "suroeste", "oeste", "noroeste"];
  return words[Math.round(azimuth / 45) % 8];
}
