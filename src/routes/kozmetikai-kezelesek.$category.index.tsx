import { createFileRoute, notFound } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { findCategory } from "@/lib/site-data";
import { breadcrumbJsonLd, canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/kozmetikai-kezelesek/$category/")({
  loader: ({ params }) => {
    const category = findCategory(params.category);
    if (!category) throw notFound();
    return category;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Oldal nem található" }] };
    const path = `/kozmetikai-kezelesek/${params.category}`;
    return {
      meta: pageMeta({
        title: `${loaderData.name} | Erika Beauty Kozmetika`,
        description: loaderData.lead || loaderData.intro[0] || loaderData.name,
        path,
        image: params.category === "arckezelesek" ? "/images/hero-facials.png" : loaderData.image,
      }),
      links: canonical(path),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Kezdőlap", url: "/" },
              { name: "Kozmetikai kezelések", url: "/kozmetikai-kezelesek" },
              { name: loaderData.name, url: path },
            ]),
          ),
        },
      ],
    };
  },
  component: Page,
});

// Bekezdés-részletek, amiket egy sorban kell tartani nagyobb képernyőn.
const NOWRAP_MARKERS = [
  "tisztításról, regenerálásról vagy a bőr frissebb, üdébb megjelenésének támogatásáról, a kezelés mindig rólad és a bőrödről szól.",
  "A szempillaliftingtől a festésen át a műszempilláig olyan megoldásokat kínálok, amelyekkel a tekinteted lehet az egyik legszebb ékszered.",
];

function IntroParagraph({ text }: { text: string }) {
  const marker = NOWRAP_MARKERS.find((m) => text.includes(m));
  if (!marker) return <p>{text}</p>;
  const idx = text.indexOf(marker);
  return (
    <p>
      {text.slice(0, idx)}
      <span className="sm:whitespace-nowrap">{marker}</span>
    </p>
  );
}

// Azon kategóriák, ahol a bevezető szöveg mellett egy egyiptomi témájú kép
// jelenik meg két hasábban, a kép magassága a szöveg magasságához igazítva.
const SIDE_IMAGES: Record<string, { src: string; alt: string }> = {
  "szemoldok-kezelesek": {
    src: "/images/gallery-szemoldok-tortenete.jpg",
    alt: "Szemöldökformázás az ókori Egyiptomban — a szépségápolás évezredes hagyománya",
  },
  "szempilla-kezelesek": {
    src: "/images/gallery-szempilla-tortenete.jpg",
    alt: "Szempilla- és szemsmink-formázás az ókori Egyiptomban — a hangsúlyos tekintet évezredes szépségtitka",
  },
};

function Page() {
  const c = Route.useLoaderData();
  const isSzemoldok = c.slug === "szemoldok-kezelesek";
  const sideImage = SIDE_IMAGES[c.slug];

  return (
    <>
      <PageHero src={c.slug === "arckezelesek" ? "/images/hero-facials.png" : c.image} alt={c.name} eager />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Kezdőlap", to: "/" },
            { label: "Kozmetikai kezelések", to: "/kozmetikai-kezelesek" },
            { label: c.name },
          ]}
        />
        <h1 className="text-center font-display text-3xl font-semibold text-primary sm:text-4xl">
          {c.name}
        </h1>
        <SocialLinks className="mt-4 justify-center" />
        {c.lead && (
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-primary">{c.lead}</p>
        )}

        {sideImage ? (
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-stretch">
            <img
              src={sideImage.src}
              alt={sideImage.alt}
              loading="lazy"
              className="h-full min-h-[280px] w-full rounded-sm object-cover shadow-md"
            />
            <div className="space-y-5 text-center leading-relaxed text-muted-foreground">
              {c.intro.map((p) => (
                <IntroParagraph key={p} text={p} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center leading-relaxed text-muted-foreground">
            {c.intro.map((p) => (
              <IntroParagraph key={p} text={p} />
            ))}
          </div>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.treatments.map((t) => (
            <ServiceCard key={t.slug} treatment={t} to={`/kozmetikai-kezelesek/${c.slug}/${t.slug}`} />
          ))}
          {isSzemoldok && (
            <article className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/Mx7bwX1rExU"
                  title="The History of Eyebrows | Browsing the Archives | British Vogue"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  A szemöldök története
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  The History of Eyebrows — British Vogue (angol nyelvű, YouTube-on fordítható)
                </p>
              </div>
            </article>
          )}
        </div>
      </section>
    </>
  );
}
