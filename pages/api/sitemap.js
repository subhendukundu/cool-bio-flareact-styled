const getSitemap = (pages) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
    .map((page) => {
      return `
        <url>
            <loc>${`https://cool.bio/${page.name}`}</loc>
        </url>
    `
    })
    .join('')}
</urlset>
`

export default async (event) => {
  const files = await cool_bio_profiles.list({ limit: 200 })
  console.log(files)
  const sitemaps = getSitemap(files.keys)
  console.log(sitemaps)
  return new Response(sitemaps, {
    headers: { 'content-type': 'application/xml' }
  })
}
