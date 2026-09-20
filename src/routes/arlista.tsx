import { createFileRoute, Link } from "@tanstack/react-router";
import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { categories, standaloneTreatments, site, type Treatment } from "@/lib/site-data";
import { breadcrumbJsonLd, canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/arlista")({
  head: () => ({
    meta: pageMeta({
      title: "Árlista és kezelési idők | Erika Beauty Kozmetika",
      description:
        "Az Erika Beauty Kozmetika szolgáltatásai, kezelési idői és árai. Az árváltoztatás jogát fenntartom.",
      path: "/arlista",
      image: "/images/hero-arlista.png",
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

type PriceGroup = { name: string; treatments: (Treatment & { to?: string })[] };

const groups: PriceGroup[] = [
  ...categories.map((c) => ({
    name: c.name,
    treatments: c.treatments.map((t) => ({
      ...t,
      to: `/kozmetikai-kezelesek/${c.slug}/${t.slug}`,
    })),
  })),
  {
    name: "Egyéb kezelések",
    treatments: standaloneTreatments.map((t) => ({
      ...t,
      to: `/kozmetikai-kezelesek/${t.slug}`,
    })),
  },
  {
    name: "Microblading szemöldök tetoválás",
    treatments: [
      {
        slug: "microblading",
        name: "Microblading szemöldök tetoválás",
        duration: "2,5–3 óra",
        price: "90 000 Ft",
        description:
          "Természetes hatású, szálazott szemöldöktetoválás, amely a szemöldök formájának, sűrűségének és karakterének optikai javítására szolgál.",
        note: "A korrekció ingyenes, és fél év garancia.",
      },
    ],
  },
];

function PriceListPage() {
  return (
    <>
      <PageHero src="/images/hero-arlista.png" alt="Erika Beauty Kozmetika árlista" eager />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Breadcrumbs items={[{ label: "Kezdőlap", to: "/" }, { label: "Árlista" }]} />
      <h1 className="text-center font-display text-3xl font-semibold text-primary sm:text-4xl">
        Kozmetikai kezelések és árak
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
        Személyre szabott kozmetikai kezelések Budán, a XII. kerületben.
      </p>

      <div className="mx-auto mt-8 flex max-w-2xl gap-3 border-l-4 border-primary bg-secondary p-5 text-sm leading-relaxed text-muted-foreground">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        <p>Az árváltoztatás jogát fenntartom.</p>
      </div>

      {groups.map((group) => (
        <div key={group.name} className="mt-14">
          <div className="text-center">
            <h2 className="inline-block border-b border-primary pb-2 font-display text-2xl font-semibold text-primary">
              {group.name}
            </h2>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {group.treatments.map((t) => (
              <div
                key={t.slug}
                className="rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {t.to ? (
                    <Link to={t.to} className="hover:text-primary">
                      {t.name}
                    </Link>
                  ) : (
                    t.name
                  )}
                </h3>
                {t.description && (
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {t.description}
                  </p>
                )}
                <p className="mt-3 text-sm text-muted-foreground">
                  <strong className="font-semibold text-foreground">Időtartam:</strong>{" "}
                  {t.duration}
                </p>
                {t.price ? (
                  <p className="mt-2 text-lg font-bold text-primary">{t.price}</p>
                ) : (
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    Ár: telefonon vagy Messengeren egyeztetve
                  </p>
                )}
                {t.note && (
                  <p className="mb-2 text-xs italic leading-relaxed text-muted-foreground">
                    {t.note}
                  </p>
                )}
                <Button asChild size="sm" variant="outline" className="mt-1">
                  <Link to="/foglalas">Időpontfoglalás</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-14 border-t border-border pt-8 text-center">
        <p className="text-muted-foreground">
          <strong className="text-primary">Erika Beauty Kozmetika</strong>
          <br />
          Személyre szabott kozmetikai kezelések Budán, a XII. kerületben.
        </p>
        <p className="mt-5 text-sm text-muted-foreground">
          A pontos árakról személyesen, telefonon ({site.phoneDisplay}) vagy Messengeren is
          adok tájékoztatást.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/foglalas">Időpontfoglalás</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          </Button>
        </div>
      </div>
    </section>
    </>
  );
}
