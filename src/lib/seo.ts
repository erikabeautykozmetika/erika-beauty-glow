import { site, services } from "@/lib/site-data";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": "/#kozmetika",
  name: site.name,
  description:
    "Személyre szabott arckezelések, mélytisztítás, anti-age és hidratáló kúrák Budapest XII. kerületében, 16 év szakmai tapasztalattal.",
  image: "/images/hero-salon.jpg",
  url: "/",
  telephone: site.phone,
  email: site.email,
  priceRange: "$$",
  currenciesAccepted: "HUF",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    postalCode: site.postalCode,
    addressCountry: "HU",
  },
  areaServed: [
    { "@type": "City", name: "Budapest" },
    { "@type": "AdministrativeArea", name: "Budapest XII. kerület" },
  ],
  founder: { "@type": "Person", name: site.owner },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.name,
      description: s.summary,
      serviceType: s.category,
    },
  })),
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "/foglalas",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: { "@type": "Reservation", name: "Kozmetikai időpontfoglalás" },
  },
};

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

type MetaArgs = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMeta({ title, description, path, image }: MetaArgs) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: path },
    { property: "og:locale", content: "hu_HU" },
    { property: "og:site_name", content: site.name },
    { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}
