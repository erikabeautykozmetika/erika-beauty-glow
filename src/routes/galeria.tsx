import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryCases } from "@/lib/site-data";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: pageMeta({
      title: "Galéria és referenciamunkák | Erika Beauty Kozmetika",
      description:
        "Nézd meg néhány referenciamunkámat: mélytisztító, hidratáló és anti-age arckezelések valódi eredményei az Erika Beauty Kozmetikából.",
      path: "/galeria",
      image: "/images/gallery-skin.jpg",
    }),
    links: [{ rel: "canonical", href: "/galeria" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Kezdőlap", url: "/" },
            { name: "Galéria", url: "/galeria" },
          ]),
        ),
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          centered
          title="Referenciamunkáimból néhány"
          subtitle="Valódi kezelések, valódi vendégek, valódi eredmények — minden esetben személyre szabott kezelési tervvel."
        />

        <div className="mt-14 space-y-16">
          {galleryCases.map((item, index) => (
            <article
              key={item.title}
              className="grid items-center gap-8 lg:grid-cols-2"
            >
              <img
                src={item.image}
                alt={item.alt}
                width={1200}
                height={1200}
                loading="lazy"
                className={`aspect-[4/3] w-full rounded-3xl object-cover shadow-sm ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              />
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      #{tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-border bg-secondary p-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Szeretnél hasonló eredményt?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Foglalj időpontot, és az első alkalommal közösen felmérjük, mire van
            szüksége a bőrödnek.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link to="/foglalas">Időpontfoglalás</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
