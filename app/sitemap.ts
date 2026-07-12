import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.hamdtradingexports.com';
  const routes = ['', '#about', '#products', '#why-us', '#global-markets', '#quality', '#gallery', '#contact'];
  return routes.map((route) => ({
    url: `${base}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));
}
