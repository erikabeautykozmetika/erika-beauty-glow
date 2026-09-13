import { categories, site, standaloneTreatments } from "@/lib/site-data";

export const BASE_URL = "https://www.erikabeautykozmetika.hu";

const absolute = (path: string) => `${BASE_URL}${path}`;

const allTreatments = [
  ...categories.flatMap((c) => c.treatments),
  ...standaloneTreatments,
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["BeautySalon", "LocalBusiness"],
  "@id": `${BASE_URL}/#kozmetika`,
  name: site.name,
  url: BASE_URL,
  telephone: site.phone,
  image: absolute("/images/hero-home.png"),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    postalCode: site.postalCode,
    addressCountry: "HU",
  },
  areaServed: { "@type": "AdministrativeArea", name: site.district },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Kozmetikai kezelések",
    itemListElement: allTreatments.map((t) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: t.name,
        description: t.description ?? t.name,
      },
    })),
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: BASE_URL,
  inLanguage: "hu-HU",
};

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.url),
    })),
  };
}

export function serviceJsonLd(
  name: string,
  description: string,
  path: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absolute(path),
    provider: { "@id": `${BASE_URL}/#kozmetika` },
    areaServed: site.district,
  };
}

type MetaArgs = {
  title: string;
  description: string;
  path: string;
  image?: string | undefined;
};

export function pageMeta({ title, description, path, image }: MetaArgs) {
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : absolute(image)
    : undefined;

  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: absolute(path) },
    { property: "og:locale", content: "hu_HU" },
    { property: "og:site_name", content: site.name },
    {
      name: "twitter:card",
      content: imageUrl ? "summary_large_image" : "summary",
    },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    ...(imageUrl
      ? [
          { property: "og:image", content: imageUrl },
          { name: "twitter:image", content: imageUrl },
        ]
      : []),
  ];
}

export const canonical = (path: string) => [
  { rel: "canonical", href: absolute(path) },
];
