// Central asset resolver ensuring 100% of image assets work in both local development
// and production deployments (e.g. Vercel, Netlify, custom domain).

import ba1Image from '../assets/images/BA1.png';
import ba2Image from '../assets/images/BA2.png';
import ba3Image from '../assets/images/BA3.png';
import bay1Image from '../assets/images/BAY1.png';
import bay2Image from '../assets/images/BAY2.png';
import bay3Image from '../assets/images/BAY3.png';
import e1Image from '../assets/images/E1.png';
import e2Image from '../assets/images/E2.jpg';
import e3Image from '../assets/images/E3.png';
import e4Image from '../assets/images/E4.png';
import e5Image from '../assets/images/E5.png';
import e6Image from '../assets/images/E6.png';
import e7Image from '../assets/images/E7.png';
import ffImage from '../assets/images/FF.png';
import gs1Image from '../assets/images/GS1.png';
import gs2Image from '../assets/images/GS2.png';
import gs3Image from '../assets/images/GS3.png';
import gzImage from '../assets/images/GZ.png';
import h1Image from '../assets/images/H1.png';
import h2Image from '../assets/images/H2.png';
import h5Image from '../assets/images/H5.png';
import h7Image from '../assets/images/H7.png';
import h13Image from '../assets/images/H13.png';
import k1Image from '../assets/images/K1.png';
import k2Image from '../assets/images/K2.png';
import newImage from '../assets/images/New.png';
import new2Image from '../assets/images/New2.png';
import oriImage from '../assets/images/ORI.png';
import orrImage from '../assets/images/Orr.png';
import p1Image from '../assets/images/P1.png';
import p2Image from '../assets/images/P2.png';
import p3Image from '../assets/images/P3.png';
import r1Image from '../assets/images/R1.png';
import r2Image from '../assets/images/R2.png';
import r3Image from '../assets/images/R3.png';
import r4Image from '../assets/images/R4.png';
import r5Image from '../assets/images/R5.png';
import r7Image from '../assets/images/R7.png';
import r9Image from '../assets/images/R9.jpg';
import regeneratedPortraitImage from '../assets/images/regenerated_image_1790080455082.png';
import s1Image from '../assets/images/S1.png';
import s2Image from '../assets/images/S2.png';
import ty1Image from '../assets/images/TY1.png';
import ty2Image from '../assets/images/TY2.png';
import ty21Image from '../assets/images/TY2-1.png';
import ty3Image from '../assets/images/TY3.png';
import ty4Image from '../assets/images/TY4.jpeg';
import ty5Image from '../assets/images/TY5.png';
import ty6Image from '../assets/images/TY6.png';
import ty7Image from '../assets/images/Ty7.png';
import v1Image from '../assets/images/V1.jpg';
import v2Image from '../assets/images/V2.jpg';
import v3Image from '../assets/images/V3.jpg';
import v4Image from '../assets/images/V4.png';
import v5Image from '../assets/images/V5.jpg';
import v6Image from '../assets/images/V6.jpg';
import v7Image from '../assets/images/V7.jpg';
import v8Image from '../assets/images/V8.jpg';
import v9Image from '../assets/images/V9.jpg';
import v10Image from '../assets/images/V10.jpg';
import v11Image from '../assets/images/V11.jpg';
import v12Image from '../assets/images/V12.jpg';
import v13Image from '../assets/images/V13.jpg';
import v14Image from '../assets/images/V14.jpg';

const ASSET_MAP: Record<string, string> = {
  'ba1.png': ba1Image,
  'ba2.png': ba2Image,
  'ba3.png': ba3Image,
  'bay1.png': bay1Image,
  'bay2.png': bay2Image,
  'bay3.png': bay3Image,
  'e1.png': e1Image,
  'e2.jpg': e2Image,
  'e3.png': e3Image,
  'e4.png': e4Image,
  'e5.png': e5Image,
  'e6.png': e6Image,
  'e7.png': e7Image,
  'ff.png': ffImage,
  'gs1.png': gs1Image,
  'gs2.png': gs2Image,
  'gs3.png': gs3Image,
  'gz.png': gzImage,
  'h1.png': h1Image,
  'h2.png': h2Image,
  'h5.png': h5Image,
  'h7.png': h7Image,
  'h13.png': h13Image,
  'k1.png': k1Image,
  'k2.png': k2Image,
  'new.png': newImage,
  'new2.png': new2Image,
  'ori.png': oriImage,
  'orr.png': orrImage,
  'p1.png': p1Image,
  'p2.png': p2Image,
  'p3.png': p3Image,
  'r1.png': r1Image,
  'r2.png': r2Image,
  'r3.png': r3Image,
  'r4.png': r4Image,
  'r5.png': r5Image,
  'r7.png': r7Image,
  'r9.jpg': r9Image,
  'regenerated_image_1790080455082.png': regeneratedPortraitImage,
  's1.png': s1Image,
  's2.png': s2Image,
  'ty1.png': ty1Image,
  'ty2.png': ty2Image,
  'ty2-1.png': ty21Image,
  'ty3.png': ty3Image,
  'ty4.jpeg': ty4Image,
  'ty4.jpg': ty4Image,
  'ty5.png': ty5Image,
  'ty6.png': ty6Image,
  'ty7.png': ty7Image,
  'v1.jpg': v1Image,
  'v2.jpg': v2Image,
  'v3.jpg': v3Image,
  'v4.png': v4Image,
  'v5.jpg': v5Image,
  'v6.jpg': v6Image,
  'v7.jpg': v7Image,
  'v8.jpg': v8Image,
  'v9.jpg': v9Image,
  'v10.jpg': v10Image,
  'v11.jpg': v11Image,
  'v12.jpg': v12Image,
  'v13.jpg': v13Image,
  'v14.jpg': v14Image,
};

/**
 * Resolves any image URL or file path (including dev string paths like '/src/assets/images/BA1.png')
 * to the proper Vite-bundled production asset URL.
 */
export function resolveAssetUrl(src: string | undefined | null): string {
  if (!src || typeof src !== 'string') return '';
  const trimmed = src.trim();
  if (!trimmed) return '';

  // Data URLs and Blob URLs (user uploads in edit mode) are returned directly
  if (trimmed.startsWith('data:') || trimmed.startsWith('blob:')) {
    return trimmed;
  }

  // Clean query strings or hashes
  const clean = trimmed.split('?')[0].split('#')[0];
  const filename = clean.split('/').pop()?.toLowerCase();

  if (filename) {
    if (ASSET_MAP[filename]) {
      return ASSET_MAP[filename];
    }

    // Try without Vite hash suffix (e.g. "ba1-czowrodx.png" -> "ba1.png")
    const unhashed = filename.replace(/-[a-z0-9_-]{6,}\./i, '.');
    if (ASSET_MAP[unhashed]) {
      return ASSET_MAP[unhashed];
    }
  }

  // Already a valid production bundled URL or external URL
  if (trimmed.startsWith('/assets/') || trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }

  return trimmed;
}

export {
  ba1Image,
  ba2Image,
  ba3Image,
  bay1Image,
  bay2Image,
  bay3Image,
  e1Image,
  e2Image,
  e3Image,
  e4Image,
  e5Image,
  e6Image,
  e7Image,
  ffImage,
  gs1Image,
  gs2Image,
  gs3Image,
  gzImage,
  h1Image,
  h2Image,
  h5Image,
  h7Image,
  h13Image,
  k1Image,
  k2Image,
  newImage,
  new2Image,
  oriImage,
  orrImage,
  p1Image,
  p2Image,
  p3Image,
  r1Image,
  r2Image,
  r3Image,
  r4Image,
  r5Image,
  r7Image,
  r9Image,
  regeneratedPortraitImage,
  s1Image,
  s2Image,
  ty1Image,
  ty2Image,
  ty21Image,
  ty3Image,
  ty4Image,
  ty5Image,
  ty6Image,
  ty7Image,
  v1Image,
  v2Image,
  v3Image,
  v4Image,
  v5Image,
  v6Image,
  v7Image,
  v8Image,
  v9Image,
  v10Image,
  v11Image,
  v12Image,
  v13Image,
  v14Image,
};
