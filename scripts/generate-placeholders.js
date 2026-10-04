const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function escapeXml(unsafe) {
  return String(unsafe).replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

const placeholders = [
  {
    name: 'paritosh-hero.webp',
    width: 1920,
    height: 1080,
    tag: 'HERO CINEMATIC',
    title: 'PARITOSH ANAND',
    subtitle: 'INTROVERT TO ICON — COURSE HERO',
    note: 'Replace with official hero asset / 16:9 4K',
  },
  {
    name: 'paritosh-portrait.webp',
    width: 1200,
    height: 1500,
    tag: 'FOUNDER PORTRAIT',
    title: 'PARITOSH ANAND',
    subtitle: 'STORYTELLER • TEDx SPEAKER • FOUNDER',
    note: 'Replace with official vertical studio portrait',
  },
  {
    name: 'paritosh-speaking.webp',
    width: 1600,
    height: 1000,
    tag: 'STAGE & KEYNOTE',
    title: 'PUBLIC SPEAKING',
    subtitle: 'TEDx & LIVE AUDIENCE PRESENCE',
    note: 'Replace with live stage / speaking photograph',
  },
  {
    name: 'introvert-to-icon-cover.webp',
    width: 1200,
    height: 1200,
    tag: 'OFFICIAL COURSE ARTWORK',
    title: 'INTROVERT TO ICON',
    subtitle: 'A System by Paritosh Anand',
    note: 'Replace with official high-res course badge / cover',
  },
  {
    name: 'testimonial-01.webp',
    width: 400,
    height: 400,
    tag: 'STUDENT AVATAR',
    title: 'STUDENT #1',
    subtitle: 'COMMUNICATION COHORT',
    note: 'Replace with verified student photo',
  },
  {
    name: 'testimonial-02.webp',
    width: 400,
    height: 400,
    tag: 'STUDENT AVATAR',
    title: 'STUDENT #2',
    subtitle: 'CREATOR COHORT',
    note: 'Replace with verified student photo',
  },
];

async function generate() {
  for (const item of placeholders) {
    const tag = escapeXml(item.tag);
    const title = escapeXml(item.title);
    const subtitle = escapeXml(item.subtitle);
    const note = escapeXml(item.note);

    const svg = `
    <svg width="${item.width}" height="${item.height}" viewBox="0 0 ${item.width} ${item.height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGlow_${item.name.replace(/[^a-z0-9]/gi, '_')}" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stop-color="#24211a" stop-opacity="0.8"/>
          <stop offset="60%" stop-color="#141518" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#0a0a0c" stop-opacity="1"/>
        </radialGradient>
        <pattern id="grid_${item.name.replace(/[^a-z0-9]/gi, '_')}" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#25272e" stroke-width="0.75" stroke-opacity="0.4"/>
        </pattern>
      </defs>
      
      <!-- Background -->
      <rect width="100%" height="100%" fill="url(#bgGlow_${item.name.replace(/[^a-z0-9]/gi, '_')})"/>
      <rect width="100%" height="100%" fill="url(#grid_${item.name.replace(/[^a-z0-9]/gi, '_')})"/>

      <!-- Accent framing border -->
      <rect x="24" y="24" width="${item.width - 48}" height="${item.height - 48}" rx="20" fill="none" stroke="#333742" stroke-width="1.5" stroke-dasharray="8 8" opacity="0.6"/>

      <!-- Center content -->
      <g transform="translate(${item.width / 2}, ${item.height / 2})">
        <!-- Center badge icon -->
        <circle cx="0" cy="-60" r="38" fill="#181a1f" stroke="#c69c2b" stroke-width="2"/>
        <path d="M -8 -70 L 12 -60 L -8 -50 Z" fill="#f5d47a" />

        <!-- Tag -->
        <rect x="-140" y="-8" width="280" height="26" rx="13" fill="#1b1c21" stroke="#3a3e4a" stroke-width="1"/>
        <text x="0" y="9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#c69c2b" text-anchor="middle" letter-spacing="3">${tag}</text>

        <!-- Main Title -->
        <text x="0" y="55" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="${Math.min(item.width * 0.045, 42)}" font-weight="800" fill="#f4f4f2" text-anchor="middle" letter-spacing="1">${title}</text>

        <!-- Subtitle -->
        <text x="0" y="92" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="500" fill="#9da1b0" text-anchor="middle" letter-spacing="0.5">${subtitle}</text>

        <!-- Note -->
        <text x="0" y="135" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="400" fill="#626675" text-anchor="middle" letter-spacing="0.5">[ ${note} ]</text>
      </g>
    </svg>
    `;

    const dest = path.join(outDir, item.name);
    await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(dest);
    console.log(`Generated ${item.name} (${item.width}x${item.height})`);
  }
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
