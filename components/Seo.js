import { useRouter } from "flareact/router";
import Head from "flareact/head";

function absoluteUrl(url) {
  return url.startsWith("https") ? url : "https://cool.bio" + url;
}

export default function Seo({ title, description, image }) {
  const router = useRouter();

  return (
    <>
      {title && (
        <Head>
          <title>{title}</title>
          <meta name="og:title" content={title} />
        </Head>
      )}
      {description && (
        <Head>
          <meta name="description" content={description} />
          <meta name="og:description" content={description} />
        </Head>
      )}
      {image && (
        <Head>
          <meta name="image" property="og:image" content={image} />
          <meta name="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </Head>
      )}
      <Head>
        <meta name="googlebot" content="index,follow"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thecoolbio" />
        <meta name="twitter:creator" content="@thecoolbio" />
        <meta property="og:url" content={`https://cool.bio${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="cool.bio" />
      </Head>
    </>
  );
}
