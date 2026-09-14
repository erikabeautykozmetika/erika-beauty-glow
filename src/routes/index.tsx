import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { categories, site, standaloneTreatments } from "@/lib/site-data";
import {
  canonical,
  localBusinessJsonLd,
  pageMeta,
  websiteJsonLd,
} from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "Erika Beauty Kozmetika | Kozmetika Budapest XII. kerület",
      description:
        "Személyre szabott kozmetikai kezelések Budapest XII. kerületében: arckezelések, ránctalanítás, smink, szemöldök- és szempilla kezelések. 16 év tapasztalat.",
      path: "/",
      image: "/images/hero-home.png",
    }),
    links: canonical("/"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([localBusinessJsonLd, websiteJsonLd]),
      },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    icon: HeartHandshake,
    title: "Nálam nincs tukmálás",
    text: "Nem termékeket adok el, hanem valódi megoldásokat és szakértő segítséget.",
  },
  {
    icon: Sparkles,
    title: "Személyre szabott kezelés",
    text: "Minden bőr más, ezért a kezelés mindig a bőröd aktuális állapotához igazodik.",
  },
  {
    icon: ShieldCheck,
    title: "16 év tapasztalat",
    text: "Szakmai tudás és őszinte törődés, a XII. kerület szívében.",
  },
];

function HomePage() {
  return (
    <>
      <PageHero
        src="/images/hero-home.png"
        alt="Erika Beauty Kozmetika — ápoló olajok és szérum"
        eager
      />

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          {site.postalCode} {site.city} · {site.district}
        </p>
        <h1 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
          {site.name}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Te is úgy érzed, hogy elvesztél a kozmetikai termékek és ígéretek
          végtelen tengerében? A filozófiám egyszerű: nálam nincs tukmálás, csak
          valódi megoldások és szakértő segítség.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/foglalas">Időpontfoglalás</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/kozmetikai-kezelesek">Kozmetikai kezelések</Link>
          </Button>
        </div>
      </section>

      <section
        aria-label="Számokban"
        className="border-y border-border bg-secondary"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-semibold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">
          Miért az Erika Beauty Kozmetika?
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="border-b-2 border-primary/40 bg-secondary p-7"
            >
              <pillar.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl font-semibold">
                {pillar.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">
            Kezeléseim
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/kozmetikai-kezelesek/$category"
                params={{ category: c.slug }}
                className="border-b-2 border-primary/40 bg-background p-6 transition-colors hover:border-primary"
              >
                <h3 className="font-display text-xl font-semibold">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {c.treatments.length} kezelés
                </p>
              </Link>
            ))}
            {standaloneTreatments.map((t) => (
              <Link
                key={t.slug}
                to="/kozmetikai-kezelesek/$standalone"
                params={{ standalone: t.slug }}
                className="border-b-2 border-primary/40 bg-background p-6 transition-colors hover:border-primary"
              >
                <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Időtartam: {t.duration}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Találjuk ki együtt, mire van szüksége a bőrödnek!
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {site.contactPrompt}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/foglalas">Időpontot foglalok</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          </Button>
        </div>
      </section>
    </>
  );
}
