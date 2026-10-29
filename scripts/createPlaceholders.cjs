const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'carrossel');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

for (let i = 1; i <= 9; i++) {
  const filename = String(i).padStart(2, '0') + '.jpeg';
  const filepath = path.join(dir, filename);
  if (!fs.existsSync(filepath)) {
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
  <defs>
    <linearGradient id="grad${i}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fdfbfd"/>
      <stop offset="50%" stop-color="#f4ebfa"/>
      <stop offset="100%" stop-color="#ebd8f5"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad${i})"/>
  <rect x="30" y="30" width="1140" height="840" rx="32" fill="none" stroke="#d7c0ee" stroke-width="3" stroke-dasharray="14 10"/>
  <circle cx="600" cy="380" r="90" fill="#ffffff" filter="drop-shadow(0 8px 16px rgba(124, 58, 237, 0.15))"/>
  <path d="M600 410 C565 375 510 345 510 300 C510 265 540 235 575 235 C590 235 600 245 600 245 C600 245 610 235 625 235 C660 235 690 265 690 300 C690 345 635 375 600 410 Z" fill="#7c3aed" transform="scale(0.85) translate(105, 55)"/>
  <text x="600" y="530" font-family="'Playfair Display', Georgia, serif" font-size="44" font-weight="bold" fill="#4e2f6b" text-anchor="middle">Momento Especial ${i}</text>
  <text x="600" y="580" font-family="sans-serif" font-size="20" fill="#7242a0" text-anchor="middle">public/carrossel/${filename}</text>
  <text x="600" y="630" font-family="'Dancing Script', cursive, sans-serif" font-size="28" fill="#a374d3" text-anchor="middle">Giovanna &amp; Você ❤️</text>
</svg>`;
    fs.writeFileSync(filepath, svg);
  }
}
console.log('9 placeholder files successfully created in public/carrossel/');
