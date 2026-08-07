import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { work } from './src/data/work';

const SITE_URL = 'https://yussuf.lenzro.com';

/** Builds sitemap.xml from the work data so new projects are listed automatically. */
function sitemap(): Plugin {
  let root = process.cwd();
  let outDir = 'dist';

  return {
    name: 'generate-sitemap',
    apply: 'build',
    configResolved(config) {
      root = config.root;
      outDir = config.build.outDir;
    },
    closeBundle() {
      const lastmod = new Date().toISOString().slice(0, 10);
      const urls = [
        { loc: `${SITE_URL}/`, priority: '1.0' },
        ...work.map((w) => ({
          loc: `${SITE_URL}/work/${w.slug}`,
          priority: '0.8',
        })),
      ];

      const body = urls
        .map(
          (u) =>
            `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
        )
        .join('\n');

      writeFileSync(
        resolve(root, outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
      );
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sitemap()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
