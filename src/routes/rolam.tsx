import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site-data";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/rolam")({
  head: () => ({
    meta: pageMeta({
      title: "Rólam — Bertus Erika kozmetikus | Erika Beauty Kozmetika",
      description:
        "16 év szakmai tapasztalat, több mint 5400 kezelés. Ismerd meg Bertus Erika kozmetikust és a szemléletet, ami mögötte áll.",
      path: "/rolam",
    }),
    links: [{ rel: "canonical", href: "/rolam" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.owner,
          jobTitle: "Kozmetikus",
          worksFor: { "@type": "BeautySalon", name: site.name },
          address: {
            "@type": "PostalAddress",
            addressLocality: site.city,
            addressCountry: "HU",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Kezdőlap", url: "/" },
            { name: "Rólam", url: "/rolam" },
          ]),
        ),
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Őszinteség",
    text: "Ha valamire nincs szükséged, azt megmondom. A bizalom nálam fontosabb, mint egy plusz termék eladása.",
  },
  {
    title: "Szakmaiság",
    text: "Folyamatosan képzem magam, hogy a legkorszerűbb technológiák és hatóanyagok közül a neked valót válasszam.",
  },
  {
    title: "Törődés",
    text: "A kezelés nálad kezdődik és nálad ér véget: otthoni ápolási tervvel segítem, hogy az eredmény megmaradjon.",
  },
];

function AboutPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src="/images/erika-portrait.jpg"
            alt="Bertus Erika kozmetikus portréja"
            width={1024}
            height={1280}
            loading="lazy"
            className="mx-auto w-full max-w-md rounded-3xl object-cover shadow-sm"
          />
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Szia, {site.owner} vagyok
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Több mint 16 éve dolgozom kozmetikusként, és ez idő alatt több mint
                5400 kezelést végeztem el. Ez a tapasztalat abban segít, hogy a
                termékek és ígéretek tengerében megtaláljuk azt, ami a te bőrödnek
                valóban jót tesz.
              </p>
              <p>
                Hiszek abban, hogy minden arcbőr egyedi történetet mesél. Ezért
                minden kezelés bőrdiagnosztikával indul, és onnantól közösen
                haladunk: te elmondod, mit tapasztalsz, én pedig megmutatom, mit
                látok — és mit tehetünk ellene.
              </p>
              <p>
                Az első kezelés előtt online üdvözlő szaktanácsadást is kapsz,
                amennyiben kitöltöd az állapotfelmérő kérdőívet. Így az első
                találkozásunkon már célzottan tudunk dolgozni.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/foglalas">Időpontot foglalok</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/galeria">Referenciamunkák</Link>
              </Button>
            </div>
          </div>
        </div>

        <section className="mt-24">
          <SectionHeading
            centered
            title="Amiben hiszek"
            subtitle="Három egyszerű elv, ami minden kezelést meghatároz."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
