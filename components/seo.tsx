import siteConfig from "@/data/site-config.json"

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: "website" | "article" | "event"
  noIndex?: boolean
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

export function generateSEO({
  title,
  description = siteConfig.description,
  canonical,
  ogImage = "/og-image.png",
  ogType = "website",
  noIndex = false,
  keywords = siteConfig.keywords,
  author = siteConfig.author,
  publishedTime,
  modifiedTime,
}: SEOProps = {}) {
  const fullTitle = title
    ? `${title} | ${siteConfig.siteName}`
    : `${siteConfig.siteName} | Quality Engineering Conference`
  const fullCanonical = canonical ? `${siteConfig.siteUrl}${canonical}` : siteConfig.siteUrl
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${siteConfig.siteUrl}${ogImage}`

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: author }],
    creator: author,
    publisher: siteConfig.siteName,
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: {
      canonical: fullCanonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullCanonical,
      siteName: siteConfig.siteName,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_US",
      type: ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullOgImage],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: siteConfig.googleSiteVerification,
    },
  }
}
