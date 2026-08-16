import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Car, TramFront } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site-data";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: pageMeta({
      title: "Kapcsolat és megközelítés | Erika Beauty Kozmetika",
      description:
        "Erika Beauty Kozmetika elérhetőségei: 1123 Budapest, Táltos utca 15/b. Telefon, nyitvatartás, parkolás és tömegközlekedés egy helyen.",
      path: "/kontakt",
    }),
    links: [{ rel: "canonical", href: "/kontakt" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Kezdőlap", url: "/" },
            { name: "Kontakt", url: "/kontakt" },
          ]),
        ),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.mapsQuery,
  )}&output=embed`;

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          centered
          className="mb-12"
          title="Elérhetőségeim"
          subtitle="Kérdésed van? Írj vagy hívj — amint tudok, válaszolok."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="inline-flex rounded-xl bg-secondary p-2.5 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-medium text-foreground">Cím</h2>
                  <p className="text-muted-foreground">
                    {site.postalCode} {site.city}, {site.street}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex rounded-xl bg-secondary p-2.5 text-primary">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-medium text-foreground">Mobil</h2>
                  <a
                    href={`tel:${site.phone}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {site.phoneDisplay}
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Ha nem érsz el, hagyj üzenetet és visszahívlak.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex rounded-xl bg-secondary p-2.5 text-primary">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-medium text-foreground">E-mail</h2>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex rounded-xl bg-secondary p-2.5 text-primary">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-medium text-foreground">Nyitvatartás</h2>
                  {site.openingHours.map((o) => (
                    <p key={o.days} className="text-muted-foreground">
                      {o.days}: {o.hours}
                    </p>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex rounded-xl bg-secondary p-2.5 text-primary">
                  <Car className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-medium text-foreground">Parkolás</h2>
                  <p className="text-muted-foreground">
                    Az utcában fizetős parkolás; parkolóház a MOM irodaházaknál,
                    bejárat a Táltos utca felől.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex rounded-xl bg-secondary p-2.5 text-primary">
                  <TramFront className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-medium text-foreground">Tömegközlekedés</h2>
                  <p className="text-muted-foreground">
                    61-es villamos, valamint az 5-ös és 105-ös BKK buszok.
                  </p>
                </div>
              </li>
            </ul>

            <Button asChild size="lg">
              <Link to="/foglalas">Időpontfoglalás</Link>
            </Button>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <iframe
              title={`${site.name} térkép — ${site.mapsQuery}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full lg:h-full lg:min-h-[560px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
