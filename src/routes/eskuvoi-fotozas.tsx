import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, Clock, Heart, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site-data";
import { breadcrumbJsonLd, canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/eskuvoi-fotozas")({
  head: () => ({
    meta: pageMeta({
      title: "Esküvői fotózás | Erika Beauty Kozmetika",
      description:
        "Esküvői fotózás, ami megőrzi életed legszebb pillanatait: természetes, őszinte képek, diszkrét jelenlét, gondos utómunka és gyors átadás.",
      path: "/eskuvoi-fotozas",
      image: "/images/hero-wedding.png",
    }),
    links: canonical("/eskuvoi-fotozas"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Kezdőlap", url: "/" },
            { name: "Esküvői fotózás", url: "/eskuvoi-fotozas" },
          ]),
        ),
      },
    ],
  }),
  component: WeddingPage,
});

const features = [
  { icon: Camera, title: "Természetes, őszinte pillanatok" },
  { icon: Heart, title: "Diszkrét jelenlét, őszinte képek" },
  { icon: Clock, title: "Teljes körű fotózás" },
  { icon: Sparkles, title: "Gondos utómunka, gyors átadás" },
];

function WeddingPage() {
  return (
    <>
      <PageHero
        src="/images/hero-wedding.png"
        alt="Esküvői fotózás — emlékek, amik örökké kísérnek"
        eager
      />
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <Breadcrumbs
          items={[{ label: "Kezdőlap", to: "/" }, { label: "Esküvői fotózás" }]}
        />
        <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">
          Emlékek, amik örökké kísérnek
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Esküvői fotózás, ami megőrzi életed legszebb pillanatait. Mert a
          legszebb történetek képekben élnek tovább.
        </p>
        <p className="mt-5 max-w-3xl italic leading-relaxed text-muted-foreground">
          Az anyaság után ❤️ első mindig a kozmetika marad, viszont mostantól a
          második szerelmemnek is ismét hódolok! Újra esküvői fotózok! ❤️
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="border-b-2 border-primary/40 bg-secondary p-6">
              <f.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <p className="mt-4 font-medium">{f.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl space-y-5 leading-relaxed text-muted-foreground">
          <p>
            Vannak pillanatok, amelyek egyszer történnek meg az életben – de az
            emlékük örökre velünk marad. Egy esküvő, egy mosoly, egy ölelés, egy
            könnycsepp vagy az a különleges pillantás, amit talán észre sem
            veszünk akkor. A fényképek segítenek megőrizni mindazt, amit az idő
            múlásával már csak az emlékeinkben őrizhetnénk.
          </p>
          <p>
            Mert egy napból emlék lesz, az emlékből pedig történet – amit jó
            újra és újra átélni.
          </p>
          <p>
            A fotózás számomra nem egyszerűen képek készítése. Egy történet
            megőrzése: a várakozásé, az örömé, a meghatottságé és azoké az
            apró, őszinte pillanatoké, amelyek talán csak egyszer történnek
            meg.
          </p>
          <p>Hogy évekkel később is elég legyen egyetlen képre nézni, és újra ott legyél.</p>
        </div>

        <div className="mt-12 bg-secondary p-8 text-center">
          <h2 className="font-display text-3xl font-semibold">
            Írjuk meg együtt a ti történeteteket!
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ingyenes konzultáció — kérj ajánlatot még ma!
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/kontakt">Kapcsolatfelvétel</Link>
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
