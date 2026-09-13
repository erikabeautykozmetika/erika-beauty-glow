import { createFileRoute, Link } from "@tanstack/react-router";
import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { overviewItems, site } from "@/lib/site-data";
import { breadcrumbJsonLd, canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/arlista")({
  head: () => ({
    meta: pageMeta({
      title: "Árlista és kezelési idők | Erika Beauty Kozmetika",
      description:
        "Az Erika Beauty Kozmetika szolgáltatásai és kezelési idői. Az aktuális árakról telefonon és Messengeren adok pontos tájékoztatást.",
      path: "/arlista",
    }),
    links: canonical("/arlista"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Kezdőlap", url: "/" },
            { name: "Árlista", url: "/arlista" },
          ]),
        ),
      },
    ],
  }),
  component: PriceListPage,
});

function PriceListPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <Breadcrumbs items={[{ label: "Kezdőlap", to: "/" }, { label: "Árlista" }]} />
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">Árlista</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        Az alábbi listában minden szolgáltatás és annak időtartama szerepel, a
        jelenlegi weboldal szerint.
      </p>

      <div className="mt-8 flex gap-3 border-l-4 border-primary bg-secondary p-5 text-sm leading-relaxed text-muted-foreground">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        <p>
          A kezelések ára a bőr állapotától és a választott hatóanyagoktól függ,
          ezért a pontos árakról személyesen, telefonon ({site.phoneDisplay})
          vagy Messengeren adok tájékoztatást.
        </p>
      </div>

      <div className="mt-10 divide-y divide-border border-y border-border">
        {overviewItems.map((item) => (
          <div key={item.name} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:gap-6">
            {item.to ? (
              <Link to={item.to} className="font-medium hover:text-primary">
                {item.name}
              </Link>
            ) : (
              <span className="font-medium">{item.name}</span>
            )}
            <span className="text-muted-foreground">{item.duration}</span>
            {item.note && (
              <p className="text-sm text-primary sm:col-span-2">{item.note}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link to="/foglalas">Időpontfoglalás</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        </Button>
      </div>
    </section>
  );
}
