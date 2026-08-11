/**
 * Minimal, dependency-free PNG generation for Mod Generator assets.
 *
 * The generator ships a real programmatic poster (workshop preview) and a
 * placeholder item icon instead of the old 1×1 transparent placeholder.
 * Hand-rolled PNG encoder (IHDR/IDAT/IEND + CRC32) on top of node:zlib —
 * no canvas, no native deps, works on any machine.
 */

import zlib from "node:zlib";

type Rgb = [number, number, number];

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf: Buffer): number {
  let c = 0xffffffff;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type: string, data: Buffer): Buffer {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

/** Encode an RGB image (8-bit, truecolor, non-interlaced) as a PNG buffer. */
function encodePng(
  width: number,
  height: number,
  pixel: (x: number, y: number) => Rgb,
): Buffer {
  const raw = Buffer.alloc(height * (1 + width * 3));
  for (let y = 0; y < height; y++) {
    const rowStart = y * (1 + width * 3);
    raw[rowStart] = 0; // filter: none
    for (let x = 0; x < width; x++) {
      const [r, g, b] = pixel(x, y);
      const o = rowStart + 1 + x * 3;
      raw[o] = r;
      raw[o + 1] = g;
      raw[o + 2] = b;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: truecolor
  const idat = zlib.deflateSync(raw);
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function shade(c: Rgb, f: number): Rgb {
  return [
    Math.min(255, Math.round(c[0] * f)),
    Math.min(255, Math.round(c[1] * f)),
    Math.min(255, Math.round(c[2] * f)),
  ];
}

function mix(a: Rgb, b: Rgb, t: number): Rgb {
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  return [
    clamp(a[0] + (b[0] - a[0]) * t),
    clamp(a[1] + (b[1] - a[1]) * t),
    clamp(a[2] + (b[2] - a[2]) * t),
  ];
}

/**
 * Workshop poster (512×256): vertical gradient in the template colour with a
 * dark frame + inner highlight — real generated art derived from the mod's
 * metadata, not a transparent placeholder.
 */
export function makePosterPng(color: Rgb): Buffer {
  const W = 512;
  const H = 256;
  const top = shade(color, 1.25);
  const bottom = shade(color, 0.3);
  return encodePng(W, H, (x, y) => {
    // gradient
    const base = mix(top, bottom, y / H);
    // dark frame
    if (x < 6 || y < 6 || x >= W - 6 || y >= H - 6) return shade(base, 0.45);
    // inner highlight line
    if (x < 10 || y < 10 || x >= W - 10 || y >= H - 10)
      return shade(base, 1.15);
    return base;
  });
}

/**
 * Item icon placeholder (64×64): solid template colour with a lighter inner
 * panel and dark border. Written to 42/media/textures/<Icon>.png only when
 * the icon is a custom name that does not resolve to a vanilla texture.
 */
export function makeIconPng(color: Rgb): Buffer {
  const S = 64;
  return encodePng(S, S, (x, y) => {
    const base = mix(shade(color, 1.2), shade(color, 0.8), y / S);
    if (x < 3 || y < 3 || x >= S - 3 || y >= S - 3) return shade(base, 0.4);
    if (x < 8 || y < 8 || x >= S - 8 || y >= S - 8) return shade(base, 1.25);
    return base;
  });
}

