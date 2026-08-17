import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/site-data";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import servicesHeroAsset from "@/assets/hero-cosmetics.jpg.asset.json";

export const Route = createFileRoute("/szolgaltatasok")({
  head: () => ({
    meta: pageMeta({
      title: "Arckezelések és szolgáltatások | Erika Beauty Kozmetika",
      description:
        "Mélytisztító, hidratáló, anti-age és problémás bőrre szabott arckezelések Budapesten. Nézd meg a foglalható szolgáltatásokat és időtartamukat.",
      path: "/szolgaltatasok",
    }),
    links: [{ rel: "canonical", href: "/szolgaltatasok" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Foglalható kozmetikai szolgáltatások",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.name,
              description: s.summary,
              serviceType: s.category,
              provider: { "@type": "BeautySalon", name: "Erika Beauty Kozmetika" },
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Kezdőlap", url: "/" },
            { name: "Szolgáltatások", url: "/szolgaltatasok" },
          ]),
        ),
      },
    ],
  }),
  component: ServicesPage,
});

const categories = ["Arckezelés", "Gépi kezelés", "Kiegészítő kezelés"] as const;

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={servicesHeroAsset.url}
          alt="Professzionális kozmetikai ampullák és virágok a szolgáltatásokhoz"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-background/50" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-2xl text-center sm:mx-auto">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
              Erika Beauty Kozmetika
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Szolgáltatások
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Minden kezelés bőrdiagnosztikával indul, így a végleges kezelési terv
              és annak időtartama a bőröd aktuális állapotához igazodik.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            className="mb-4"
            title="Foglalható szolgáltatások"
            subtitle="Válaszd ki a bőrödnek legmegfelelőbb kezelést, és foglalj időpontot néhány kattintással."
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
            Az árakról az időpontfoglalás visszaigazolásakor, illetve telefonon adok
            pontos tájékoztatást.
          </p>

        {categories.map((category) => {
          const items = services.filter((s) => s.category === category);
          if (items.length === 0) return null;
          return (
            <section key={category} className="mt-16">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {category}
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {items.map((service) => (
                  <article
                    key={service.slug}
                    className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.name}
                    </h3>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                      Időtartam: {service.duration}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.summary}
                    </p>
                    <ul className="mt-4 flex-1 space-y-2">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-6 w-full">
                      <Link to="/foglalas">
                        Időpont foglalása
                      </Link>
                    </Button>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
    </>
  );
}
