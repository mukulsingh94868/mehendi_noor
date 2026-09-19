/**
 * Generates original, on-brand henna-art SVG placeholder imagery for Mehndi Noor.
 * These are abstract illustrations (not photographs) that live in public/images
 * and can be swapped for real photography later.
 *
 * Run: node scripts/generate-images.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

const C = {
  cream: "#F8F3E8",
  ivory: "#FFFDF7",
  mehndi: "#344C3A",
  mehndiLight: "#4A6350",
  deep: "#23352A",
  brown: "#4A3025",
  gold: "#B49A62",
  mutedGold: "#C8B78A",
};

const R = (n) => Math.round(n * 100) / 100;
const P = (a, r, cx = 0, cy = 0) => [cx + Math.cos(a) * r, cy + Math.sin(a) * r];

function petal(cx, cy, outer, a) {
  const [sx, sy] = P(a, outer * 0.16, cx, cy);
  const [ox, oy] = P(a, outer, cx, cy);
  const [mx, my] = P(a, outer * 0.6, cx, cy);
  const pa = a + Math.PI / 2;
  const w = outer * 0.1;
  const c1 = [mx + Math.cos(pa) * w, my + Math.sin(pa) * w];
  const c2 = [mx - Math.cos(pa) * w, my - Math.sin(pa) * w];
  return `<path d="M ${R(sx)} ${R(sy)} Q ${R(c1[0])} ${R(c1[1])} ${R(ox)} ${R(oy)} Q ${R(c2[0])} ${R(c2[1])} ${R(sx)} ${R(sy)} Z"/>`;
}

function mandala(cx, cy, r, o = {}) {
  const { petals = 12, inner = 8, stroke = C.gold, sw = 1.5, scallops = true } = o;
  const p = [];
  [1, 0.74, 0.46].forEach((f, i) =>
    p.push(`<circle cx="${cx}" cy="${cy}" r="${R(r * f)}"${i % 2 ? ' stroke-dasharray="2 6"' : ""}/>`)
  );
  for (let i = 0; i < petals; i++) p.push(petal(cx, cy, r * 0.96, (Math.PI * 2 * i) / petals));
  for (let i = 0; i < inner; i++) {
    const a = (Math.PI * 2 * i) / inner + Math.PI / inner;
    const [sx, sy] = P(a, r * 0.14, cx, cy);
    const [ox, oy] = P(a, r * 0.46, cx, cy);
    const pa = a + Math.PI / 2;
    const w = r * 0.05;
    p.push(
      `<path d="M ${R(sx)} ${R(sy)} Q ${R((sx + ox) / 2 + Math.cos(pa) * w)} ${R(
        (sy + oy) / 2 + Math.sin(pa) * w
      )} ${R(ox)} ${R(oy)} Q ${R((sx + ox) / 2 - Math.cos(pa) * w)} ${R(
        (sy + oy) / 2 - Math.sin(pa) * w
      )} ${R(sx)} ${R(sy)} Z"/>`
    );
  }
  if (scallops) {
    const n = petals * 2;
    for (let i = 0; i < n; i++) {
      const [x0, y0] = P((Math.PI * 2 * i) / n, r, cx, cy);
      const [x1, y1] = P((Math.PI * 2 * (i + 1)) / n, r, cx, cy);
      const am = (Math.PI * 2 * (i + 0.5)) / n;
      p.push(
        `<path d="M ${R(x0)} ${R(y0)} Q ${R(x0 + Math.cos(am) * r * 0.14)} ${R(
          y0 + Math.sin(am) * r * 0.14
        )} ${R(x1)} ${R(y1)}"/>`
      );
    }
  }
  p.push(`<circle cx="${cx}" cy="${cy}" r="${R(r * 0.045)}" fill="${stroke}" stroke="none"/>`);
  return `<g fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${p.join("")}</g>`;
}

function paisley(x, y, s, rot, stroke = C.gold, sw = 2) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" fill="none" stroke="${stroke}" stroke-width="${R(
    sw / s
  )}" stroke-linecap="round" stroke-linejoin="round">
    <path d="M0 0 C -22 -10 -34 -34 -22 -56 C -10 -78 24 -78 38 -54 C 50 -33 34 -6 0 0 Z"/>
    <path d="M4 -8 C -12 -18 -20 -34 -12 -50 C -4 -66 18 -66 28 -50 C 36 -36 24 -16 4 -8 Z"/>
    <circle cx="8" cy="-16" r="2.4"/><circle cx="8" cy="-16" r="7" stroke-dasharray="1 4"/>
    <path d="M -4 4 C -12 14 -16 26 -14 38"/><path d="M 8 2 C 4 14 0 26 0 38"/>
    <circle cx="-14" cy="41" r="1.6"/><circle cx="0" cy="41" r="1.6"/>
  </g>`;
}

function sprig(x, y, s, rot, stroke = C.mehndi, sw = 2) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" fill="none" stroke="${stroke}" stroke-width="${R(
    sw / s
  )}" stroke-linecap="round" stroke-linejoin="round">
    <path d="M0 0 C 4 -40 -4 -80 0 -120"/>
    <path d="M0 -26 C 18 -30 30 -42 34 -58 C 16 -56 4 -44 0 -26 Z"/>
    <path d="M0 -50 C -18 -54 -30 -66 -34 -82 C -16 -80 -4 -68 0 -50 Z"/>
    <path d="M0 -78 C 16 -82 28 -94 32 -110 C 14 -108 2 -96 0 -78 Z"/>
    <path d="M0 -100 C -14 -104 -24 -114 -28 -128 C -12 -126 -2 -116 0 -100 Z"/>
    <circle cx="0" cy="-124" r="3"/>
  </g>`;
}

function dots(cx, cy, n, r, stroke = C.gold) {
  const p = [];
  for (let i = 0; i < n; i++) {
    const [x, y] = P((Math.PI * 2 * i) / n, r, cx, cy);
    p.push(`<circle cx="${R(x)}" cy="${R(y)}" r="1.7"/>`);
  }
  return `<g fill="${stroke}" stroke="none">${p.join("")}</g>`;
}

function arch(cx, baseY, w, h, stroke = C.gold, sw = 2) {
  const h0 = w / 2;
  const top = baseY - h;
  return `<g fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round">
    <path d="M ${R(cx - h0)} ${baseY} L ${R(cx - h0)} ${R(baseY - h * 0.42)} Q ${R(cx - h0)} ${R(
    top + h * 0.12
  )} ${cx} ${R(top)} Q ${R(cx + h0)} ${R(top + h * 0.12)} ${R(cx + h0)} ${R(baseY - h * 0.42)} L ${R(
    cx + h0
  )} ${baseY}"/>
    <path d="M ${cx} ${R(top)} L ${cx} ${R(top - h * 0.07)}"/>
    <circle cx="${cx}" cy="${R(top - h * 0.09)}" r="2.4" fill="${stroke}" stroke="none"/>
  </g>`;
}

function diya(x, y, s, stroke = C.gold) {
  return `<g transform="translate(${x} ${y}) scale(${s})" fill="none" stroke="${stroke}" stroke-width="${R(
    2 / s
  )}" stroke-linecap="round" stroke-linejoin="round">
    <path d="M -26 0 Q 0 30 26 0 Z"/><path d="M -30 0 L 30 0"/>
    <path d="M 0 -8 C -7 -18 -3 -30 0 -38 C 3 -30 7 -18 0 -8 Z"/>
    <circle cx="0" cy="-15" r="3" fill="${stroke}" stroke="none"/>
  </g>`;
}

function toran(x0, x1, y, n, stroke = C.gold) {
  const p = [`<path d="M ${x0} ${y} C ${(x0 + x1) / 2} ${y + 26} ${(x0 + x1) / 2} ${y + 26} ${x1} ${y}"/>`];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = x0 + (x1 - x0) * t;
    const d = Math.sin(Math.PI * t) * 26;
    p.push(
      `<path d="M ${R(x)} ${R(y + d)} l -6 12 l 6 16 l 6 -16 Z"/>`,
      `<circle cx="${R(x)}" cy="${R(y + d + 34)}" r="1.6"/>`
    );
  }
  return `<g fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p.join("")}</g>`;
}

function hand(seed, tx, ty, s) {
  const shapes = [
    `<rect x="118" y="250" width="180" height="190" rx="48"/>`,
    `<rect x="118" y="92" width="40" height="215" rx="20"/>`,
    `<rect x="166" y="58" width="40" height="250" rx="20"/>`,
    `<rect x="214" y="78" width="40" height="230" rx="20"/>`,
    `<rect x="262" y="120" width="36" height="190" rx="18"/>`,
    `<rect x="70" y="266" width="40" height="150" rx="20" transform="rotate(-38 90 341)"/>`,
    `<rect x="146" y="410" width="126" height="120" rx="34"/>`,
  ].join("");
  const fingers = [138, 186, 234, 280]
    .map((x, i) => `<path d="M ${x} ${110 + i * 20} L ${x} 300" stroke-dasharray="2 7"/>`)
    .join("");
  return `<g transform="translate(${tx} ${ty}) scale(${s})">
    <g fill="${C.gold}" opacity="0.9" transform="translate(206 280) scale(1.05) translate(-206 -280)">${shapes}</g>
    <clipPath id="h${seed}">${shapes}</clipPath>
    <g clip-path="url(#h${seed})">
      <rect width="400" height="560" fill="${C.mehndi}"/>
      <g fill="none" stroke="${C.cream}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.92">
        ${fingers}${mandala(206, 330, 44, { petals: 8, inner: 8, sw: 2, scallops: false, stroke: C.cream })}
        <circle cx="206" cy="330" r="62" stroke-dasharray="2 8"/>
        <path d="M 150 432 Q 206 462 262 432"/><path d="M 150 452 Q 206 482 262 452"/>
        <circle cx="206" cy="300" r="4"/><circle cx="186" cy="360" r="3"/><circle cx="226" cy="360" r="3"/>
      </g>
    </g>
  </g>`;
}

function art({ w, h, motif, seed, tint = C.ivory }) {
  const id = `s${seed}`;
  const cx = w / 2;
  const cy = h * 0.44;
  const base = Math.min(w, h);
  const defs = `<radialGradient id="bg${id}" cx="50%" cy="34%" r="78%"><stop offset="0%" stop-color="${tint}"/><stop offset="100%" stop-color="${C.cream}"/></radialGradient>`;
  const p = [`<rect width="${w}" height="${h}" fill="url(#bg${id})"/>`];
  p.push(`<g opacity="0.45">${mandala(cx, cy, base * 0.36, { petals: 16, inner: 12, sw: 1.2 })}</g>`);

  switch (motif) {
    case "bridal":
      p.push(hand(seed, cx - base * 0.24, cy - base * 0.44, base / 820));
      p.push(paisley(w * 0.16, h * 0.26, base * 0.0017, -28));
      p.push(paisley(w * 0.86, h * 0.7, base * 0.0014, 152));
      break;
    case "arabic":
      p.push(sprig(w * 0.24, h * 0.74, base / 620, -32, C.mehndi, 2.2));
      p.push(paisley(w * 0.62, h * 0.42, base * 0.0024, 24, C.gold, 2.4));
      p.push(paisley(w * 0.4, h * 0.62, base * 0.0016, -42, C.mehndi, 2.2));
      p.push(dots(w * 0.3, h * 0.32, 8, base * 0.05));
      break;
    case "rajasthani":
      p.push(arch(cx, h * 0.8, w * 0.46, h * 0.5));
      p.push(`<g opacity="0.5">${arch(cx, h * 0.9, w * 0.68, h * 0.64)}</g>`);
      p.push(mandala(cx, h * 0.46, base * 0.18, { petals: 12, inner: 8, sw: 1.8 }));
      p.push(paisley(w * 0.17, h * 0.35, base * 0.0014, -20));
      p.push(paisley(w * 0.84, h * 0.35, base * 0.0014, 20));
      p.push(dots(cx, h * 0.46, 12, base * 0.24));
      break;
    case "minimal":
      p.push(mandala(cx, cy, base * 0.2, { petals: 8, inner: 6, sw: 1.4, scallops: false }));
      p.push(`<circle cx="${cx}" cy="${cy}" r="${R(base * 0.28)}" fill="none" stroke="${C.mutedGold}" stroke-width="1" stroke-dasharray="2 10"/>`);
      p.push(sprig(w * 0.24, h * 0.82, base / 760, 8, C.mehndi, 2));
      p.push(dots(w * 0.76, h * 0.24, 6, base * 0.04));
      break;
    case "festival":
      p.push(toran(w * 0.14, w * 0.86, h * 0.13, 9));
      p.push(mandala(w * 0.28, h * 0.52, base * 0.13, { petals: 10, inner: 6, sw: 1.6 }));
      p.push(diya(w * 0.72, h * 0.68, base / 760));
      p.push(diya(w * 0.72, h * 0.5, (base / 760) * 0.8));
      p.push(paisley(w * 0.55, h * 0.78, base * 0.0014, 8));
      break;
    case "engagement":
      p.push(mandala(w * 0.4, h * 0.42, base * 0.19, { petals: 12, inner: 8, sw: 1.8 }));
      p.push(mandala(w * 0.6, h * 0.6, base * 0.19, { petals: 12, inner: 8, sw: 1.8 }));
      p.push(sprig(w * 0.2, h * 0.84, base / 700, 6, C.mehndi, 2));
      p.push(sprig(w * 0.82, h * 0.26, base / 700, 186, C.mehndi, 2));
      break;
    case "groom":
      p.push(mandala(cx, cy, base * 0.24, { petals: 10, inner: 5, sw: 1.8 }));
      p.push(`<g opacity="0.5">${mandala(cx, cy, base * 0.34, { petals: 20, inner: 10, sw: 1.2 })}</g>`);
      p.push(paisley(w * 0.18, h * 0.76, base * 0.0014, 12, C.mehndi));
      p.push(paisley(w * 0.84, h * 0.3, base * 0.0014, 190, C.mehndi));
      break;
    default:
      p.push(mandala(cx, cy, base * 0.26, { petals: 14, inner: 10, sw: 1.8 }));
      p.push(paisley(w * 0.2, h * 0.3, base * 0.0016, -30, C.mehndi));
      p.push(paisley(w * 0.82, h * 0.72, base * 0.0016, 150, C.mehndi));
      break;
  }

  const frame = `<rect x="22" y="22" width="${w - 44}" height="${h - 44}" rx="20" fill="none" stroke="${C.mutedGold}" stroke-width="2"/>`;
  const mark = `<text x="${cx}" y="${h - 44}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16" letter-spacing="7" fill="${C.gold}" opacity="0.6">MEHNDI NOOR</text>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img">${defs}${p.join("")}${frame}${mark}</svg>`;
}

const SPECS = [
  { name: "hero-main", w: 1200, h: 1500, motif: "bridal", seed: 11 },
  { name: "hero-detail", w: 900, h: 900, motif: "minimal", seed: 12 },
  { name: "about-artist", w: 1000, h: 1250, motif: "arabic", seed: 13 },
  { name: "service-bridal", w: 900, h: 680, motif: "bridal", seed: 21 },
  { name: "service-arabic", w: 900, h: 680, motif: "arabic", seed: 22 },
  { name: "service-rajasthani", w: 900, h: 680, motif: "rajasthani", seed: 23 },
  { name: "service-engagement", w: 900, h: 680, motif: "engagement", seed: 24 },
  { name: "service-festival", w: 900, h: 680, motif: "festival", seed: 25 },
  { name: "service-guest", w: 900, h: 680, motif: "minimal", seed: 26 },
  { name: "service-groom", w: 900, h: 680, motif: "groom", seed: 27 },
  { name: "service-custom", w: 900, h: 680, motif: "custom", seed: 28 },
  { name: "gallery-01", w: 900, h: 1200, motif: "bridal", seed: 31 },
  { name: "gallery-02", w: 900, h: 900, motif: "bridal", seed: 32 },
  { name: "gallery-03", w: 900, h: 1150, motif: "arabic", seed: 33 },
  { name: "gallery-04", w: 900, h: 900, motif: "arabic", seed: 34 },
  { name: "gallery-05", w: 900, h: 1100, motif: "rajasthani", seed: 35 },
  { name: "gallery-06", w: 900, h: 900, motif: "rajasthani", seed: 36 },
  { name: "gallery-07", w: 900, h: 1200, motif: "minimal", seed: 37 },
  { name: "gallery-08", w: 900, h: 900, motif: "minimal", seed: 38 },
  { name: "gallery-09", w: 900, h: 1150, motif: "festival", seed: 39 },
  { name: "gallery-10", w: 900, h: 900, motif: "festival", seed: 40 },
  { name: "gallery-11", w: 900, h: 1050, motif: "bridal", seed: 41 },
  { name: "gallery-12", w: 900, h: 950, motif: "engagement", seed: 42 },
  { name: "gallery-13", w: 900, h: 1100, motif: "arabic", seed: 43 },
  { name: "gallery-14", w: 900, h: 900, motif: "minimal", seed: 44 },
];

mkdirSync(OUT, { recursive: true });
for (const s of SPECS) writeFileSync(join(OUT, `${s.name}.svg`), art(s), "utf8");
console.log(`Generated ${SPECS.length} images in ${OUT}`);
