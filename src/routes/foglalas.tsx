import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, Info, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site-data";
import { breadcrumbJsonLd, canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/foglalas")({
  head: () => ({
    meta: pageMeta({
      title: "Foglalás | Erika Beauty Kozmetika",
      description:
        "Foglalj időpontot az Erika Beauty Kozmetikába telefonon vagy Messengeren. Itt találod a foglalás és a lemondás feltételeit is.",
      path: "/foglalas",
      image: "/images/hero-foglalas.png",
    }),
    links: canonical("/foglalas"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Kezdőlap", url: "/" },
            { name: "Foglalás", url: "/foglalas" },
          ]),
        ),
      },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <>
      <PageHero src="/images/hero-foglalas.png" alt="Erika Beauty Kozmetika időpontfoglalás" eager />
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <Breadcrumbs items={[{ label: "Kezdőlap", to: "/" }, { label: "Foglalás" }]} />
      <h1 className="text-center font-display text-3xl font-semibold text-primary sm:text-4xl">Foglalás</h1>
      <SocialLinks className="mt-4 justify-center" />
      <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
        {site.contactPrompt}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <a
          href={`tel:${site.phone}`}
          className="flex items-start gap-4 border-b-2 border-primary/40 bg-secondary p-6 transition-colors hover:border-primary"
        >
          <Phone className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
          <span>
            <span className="block font-display text-xl font-semibold">
              Telefonos foglalás
            </span>
            <span className="mt-2 block text-muted-foreground">
              {site.phoneDisplay}
            </span>
          </span>
        </a>
        <a
          href={site.messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 border-b-2 border-primary/40 bg-secondary p-6 transition-colors hover:border-primary"
        >
          <MessageCircle className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
          <span>
            <span className="block font-display text-xl font-semibold">
              Foglalás Messengeren
            </span>
            <span className="mt-2 block text-muted-foreground">
              Írj üzenetet, és a lehető leghamarabb válaszolok.
            </span>
          </span>
        </a>
      </div>

      <div className="mt-12 border-l-4 border-primary bg-secondary p-7">
        <h2 className="flex items-center gap-2 font-display text-2xl font-semibold">
          <Info className="h-5 w-5 text-primary" aria-hidden="true" />
          Lemondási feltételek
        </h2>
        <ul className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
          <li>
            24 órán belüli lemondás esetén (betegség és rendkívüli ok
            kivételével) a kieső idő miatt a lefoglalt szolgáltatás 50%-a
            fizetendő átutalással.
          </li>
          <li>
            Visszatérő vendég esetén a lemondási díj a következő igénybe vett
            szolgáltatás árához adódik hozzá. Köszönöm a megértésed!
          </li>
        </ul>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-3">
        <CalendarCheck className="h-5 w-5 text-primary" aria-hidden="true" />
        <span className="text-muted-foreground">
          Nem tudod, melyik kezelés való neked?
        </span>
        <Button asChild variant="outline">
          <Link to="/kozmetikai-kezelesek">Kezelések megtekintése</Link>
        </Button>
      </div>
    </section>
    </>
  );
}
