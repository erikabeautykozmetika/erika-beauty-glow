import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, Footprints, MapPin, MessageCircle, Phone, TramFront } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site-data";
import { breadcrumbJsonLd, canonical, localBusinessJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: pageMeta({
      title: "Kontakt és megközelítés | Erika Beauty Kozmetika",
      description:
        "Erika Beauty Kozmetika: 1124 Budapest, Jagelló út 1–3. Telefon, Messenger, parkolás és tömegközlekedés egy helyen.",
      path: "/kontakt",
      image: "/images/hero-contact.png",
    }),
    links: canonical("/kontakt"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          localBusinessJsonLd,
          breadcrumbJsonLd([
            { name: "Kezdőlap", url: "/" },
            { name: "Kontakt", url: "/kontakt" },
          ]),
        ]),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

  return (
    <>
      <PageHero src="/images/hero-contact.png" alt="Erika Beauty Kozmetika kapcsolat" eager />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <Breadcrumbs items={[{ label: "Kezdőlap", to: "/" }, { label: "Kontakt" }]} />
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">Kontakt</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {site.contactPrompt}
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <ul className="space-y-6">
            <li className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="font-display text-xl font-semibold">Cím</h2>
                <p className="text-muted-foreground">{site.addressLine}</p>
                <p className="text-muted-foreground">{site.addressExtra}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="font-display text-xl font-semibold">Telefon</h2>
                <a href={`tel:${site.phone}`} className="text-muted-foreground hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="font-display text-xl font-semibold">Messenger</h2>
                <a
                  href={site.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Írj üzenetet Messengeren
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Car className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="font-display text-xl font-semibold">Parkolás</h2>
                <p className="text-muted-foreground">{site.parking}</p>
                <p className="text-muted-foreground">{site.parkingLots}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Footprints className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="font-display text-xl font-semibold">Gyalogos megközelítés</h2>
                <p className="text-muted-foreground">{site.pedestrianAccess}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <TramFront className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="font-display text-xl font-semibold">Tömegközlekedés</h2>
                <p className="text-muted-foreground">{site.transit}</p>
              </div>
            </li>
          </ul>

          <div className="space-y-6">
            <iframe
              title={`${site.name} térkép — ${site.mapsQuery}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border border-border"
            />
            <img
              src="/images/parking-map.png"
              alt="Parkolási térkép a kozmetika környékén"
              width={1536}
              height={1024}
              loading="lazy"
              className="w-full border border-border object-contain"
            />
          </div>
        </div>

        <Button asChild size="lg" className="mt-12">
          <Link to="/foglalas">Időpontfoglalás</Link>
        </Button>
      </section>
    </>
  );
}
