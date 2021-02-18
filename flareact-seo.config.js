const title = 'cool.bio'
const description = 'Be The Awesome Influencer You Are With cool.bio'
const SEO = {
  title,
  description,
  canonical: 'https://cool.bio',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://cool.bio',
    title,
    description,
    image: {
      url: 'https://cool.bio/og.png',
      alt: title,
      width: 1280,
      height: 720
    }
  }
}
export default SEO
