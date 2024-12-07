import { format } from 'date-fns';

export const generateSitemap = (baseURL, routes) => {
  const urls = routes
    .map(({ loc, lastmod }) => `
      <url>
        <loc>${baseURL}${loc}</loc>
        <lastmod>${format(new Date(lastmod), 'yyyy-MM-dd')}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;
};
