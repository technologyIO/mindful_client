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
    { loc: '/clinicLocation/New-Delhi', lastmod: '2024-12-03' },
    { loc: '/clinicLocation/Bengaluru-Whitefield', lastmod: '2024-12-03' },
    { loc: '/clinicLocation/Bengaluru-Hebbal', lastmod: '2024-12-03' },
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
    { loc: '/assesment', lastmod: '2024-12-03' },
    { loc: '/assesment/phq9/selfAssesment', lastmod: '2024-12-03' },
    { loc: '/assesment/phq9/test', lastmod: '2024-12-03' },
    { loc: '/assesment/phq9/result', lastmod: '2024-12-03' },
    { loc: '/assesment/gad7/selfAssesment', lastmod: '2024-12-03' },
    { loc: '/assesment/gad7/test', lastmod: '2024-12-03' },
    { loc: '/assesment/gad7/result', lastmod: '2024-12-03' },
    { loc: '/assesment/pss10/selfAssesment', lastmod: '2024-12-03' },
    { loc: '/assesment/pss10/test', lastmod: '2024-12-03' },
    { loc: '/assesment/pss10/result', lastmod: '2024-12-03' },
    // { loc: '/doctor/66fbe61e7d61644c9bde4bd3', lastmod: '2024-12-03' },
    // { loc: '/doctor/66fe27b11941768d6b3e9fc3', lastmod: '2024-12-03' },
    // { loc: '/doctor/66ffa2e86a3f2ccdb194b632', lastmod: '2024-12-03' },
    // { loc: '/doctor/66fe2dffd3d7faee0fe9c1bf', lastmod: '2024-12-03' },
    // { loc: '/doctor/670e566cc8d65e9d976b745a', lastmod: '2024-12-03' },
    // { loc: '/doctor/66fe4d3a6a3f2ccdb194af4b', lastmod: '2024-12-03' },
    // { loc: '/doctor/66ffa1856a3f2ccdb194b61d', lastmod: '2024-12-03' },
    // { loc: '/doctor/66ffa28f6a3f2ccdb194b62a', lastmod: '2024-12-03' },
    // { loc: '/doctor/6720e7e38de82da2acfe7a98', lastmod: '2024-12-03' },
   
  ];

  const sitemap = generateSitemap(baseURL, dynamicRoutes);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
