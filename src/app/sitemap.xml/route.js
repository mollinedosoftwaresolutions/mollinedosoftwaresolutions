export async function GET() {
  const baseUrl = "https://mollinedosoftwaresolutions.vercel.app";

  const urls = [
    { loc: `${baseUrl}/`, priority: 1.0 },
    { loc: `${baseUrl}/#services`, priority: 0.8 },
    { loc: `${baseUrl}/#contact`, priority: 0.8 },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
