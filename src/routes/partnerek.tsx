import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Handshake } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SocialLinks } from "@/components/SocialLinks";
import { PageHero } from "@/components/PageHero";
import { partners } from "@/lib/site-data";
import { breadcrumbJsonLd, canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/partnerek")({
  head: () => ({
    meta: pageMeta({
      title: "Partnereink | Erika Beauty Kozmetika",
      description:
        "Az Erika Beauty Kozmetika ajánlott partnerei és együttműködő vállalkozásai Budapesten.",
      path: "/partnerek",
      image: "/images/hero-partnerek.jpg",
    }),
    links: canonical("/partnerek"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Kezdőlap", url: "/" },
            { name: "Partnereink", url: "/partnerek" },
          ]),
        ),
      },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <>
      <PageHero src="/images/hero-partnerek.jpg" alt="Erika Beauty Kozmetika partnerei" eager />
      <section className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6">
      <Breadcrumbs items={[{ label: "Kezdőlap", to: "/" }, { label: "Partnereink" }]} />
      <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">
        Partnereink
      </h1>
      <SocialLinks className="mt-4 justify-center" />
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Szívesen ajánljuk azokat a vállalkozásokat, akikkel szívesen
        dolgozunk együtt, és akiknek a munkáját mi magunk is szeretjük.
      </p>

      <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-6">
        {partners.map((p) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full flex-col items-center overflow-hidden rounded-md border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md sm:w-[340px]"
          >
            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="mb-4 aspect-[16/9] w-full rounded-sm object-cover"
              />
            )}
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
              <Handshake className="h-3.5 w-3.5" aria-hidden="true" />
              {p.category}
            </span>
            <h2 className="mt-3 font-display text-xl font-semibold text-foreground">
              {p.name}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              Weboldal megtekintése
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        ))}
      </div>
      </section>
    </>
  );
}
