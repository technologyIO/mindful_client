import { generateSitemap } from '@/utils/sitemap';

export async function GET(request) {
  const baseURL = 'https://mindfultms.in'; // Replace with your domain

  // Fetch dynamic routes from a database or API
  const dynamicRoutes = [
    { loc: '/', lastmod: '2024-12-01' },
    { loc: '/pages/tms', lastmod: '2024-12-02' },
    { loc: '/services/therapy', lastmod: '2024-12-03' },
    { loc: '/services/psychiatry', lastmod: '2024-12-03' },
    { loc: '/clinicalAssessment', lastmod: '2024-12-03' },
    { loc: '/Bengaluru-Whitefield', lastmod: '2024-12-03' },
    { loc: '/Bengaluru-Hebbal', lastmod: '2024-12-03' },
    { loc: '/clinicLocation/New-Delhi', lastmod: '2024-12-03' },
    { loc: '/pages/ourExpert', lastmod: '2024-12-03' },
    { loc: '/ads/condition/depression/gk', lastmod: '2024-12-03' },
    { loc: '/ads/condition/depression/wf', lastmod: '2024-12-03' },
    { loc: '/ads/condition/depression/hb', lastmod: '2024-12-03' },
    { loc: '/ads/condition/ocd/gk', lastmod: '2024-12-03' },
    { loc: '/ads/condition/ocd/wf', lastmod: '2024-12-03' },
    { loc: '/ads/condition/ocd/hb', lastmod: '2024-12-03' },
    { loc: '/ads/condition/anxiety/gk', lastmod: '2024-12-03' },
    { loc: '/ads/condition/anxiety/wf', lastmod: '2024-12-03' },
    { loc: '/ads/condition/anxiety/hb', lastmod: '2024-12-03' },
    { loc: '/ads/psychologist/gk', lastmod: '2024-12-03' },
    { loc: '/ads/psychologist/wf', lastmod: '2024-12-03' },
    { loc: '/ads/psychologist/hb', lastmod: '2024-12-03' },
    { loc: '/ads/psychiatrist/gk', lastmod: '2024-12-03' },
    { loc: '/ads/psychiatrist/wf', lastmod: '2024-12-03' },
    { loc: '/ads/psychiatrist/hb', lastmod: '2024-12-03' },
  ];

  const sitemap = generateSitemap(baseURL, dynamicRoutes);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
