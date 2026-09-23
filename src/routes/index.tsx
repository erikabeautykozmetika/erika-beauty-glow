import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
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
    title: "Nálam nincs tukmálás",
    text: "Nem termékeket adok el, hanem valódi megoldásokat és szakértő segítséget.",
  },
  {
    title: "Személyre szabott kezelés",
    text: "Minden bőr más, ezért a kezelés mindig a bőröd aktuális állapotához igazodik.",
  },
  {
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

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {site.postalCode} {site.city} · {site.district}
          </p>
          <h1 className="mt-5 font-display text-3xl font-semibold text-primary sm:text-4xl">
            {site.name}
          </h1>
          <SocialLinks className="mt-4 justify-center" />
        </div>

        <div className="mt-10 grid items-start gap-8 md:grid-cols-[minmax(260px,0.78fr)_minmax(0,1.22fr)] lg:gap-12">
          <img
            src="/images/erika-portrait.jpg"
            alt="Erika, az Erika Beauty Kozmetika tulajdonosa"
            width={1200}
            height={800}
            loading="lazy"
            className="mx-auto w-full max-w-lg rounded-sm object-cover shadow-md md:mx-0"
          />
          <div>
            <div className="space-y-4 text-left text-lg leading-relaxed text-muted-foreground">
              <p>
                Te is úgy érzed, hogy elvesztél a kozmetikai termékek és
                ígéretek végtelen tengerében? Eleged van a felesleges
                termékekből és a nyomulós értékesítésből?
              </p>
              <p>
                Az Erika Beauty Kozmetika filozófiája egyszerű: nálam nincs
                tukmálás, csak őszinte szakmai segítség, személyre szabott
                kozmetikai kezelések és valódi megoldások. Hiszek abban, hogy
                nem az a cél, hogy minél több terméket vásárolj, hanem hogy a
                bőröd valódi igényeinek megfelelő ápolást kapja.
              </p>
              <p>
                Minden arcbőr egyedi történetet mesél, ezért nem sablonokban
                gondolkodom. A bőr aktuális állapotát és egyéni igényeit
                figyelembe véve keresem meg azt a kezelést és bőrápolási
                megoldást, amely számodra valóban megfelelő lehet.
              </p>
              <p>
                Legyen szó mélytisztító arckezelésről, hidratálásról,
                bőrmegújításról, anti-aging kezelésről vagy a bőr egészségének
                megőrzéséről, az a célom, hogy bőröd az év minden időszakában
                megkapja a számára szükséges törődést.
              </p>
              <p>
                Az Erika Beauty Kozmetikában Budán, a XII. kerületben nyugodt,
                személyes környezetben várlak, ahol a figyelem rólad és a
                bőrödről szól.
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Button asChild size="lg">
                <Link to="/foglalas">Időpontfoglalás</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/kozmetikai-kezelesek">Kozmetikai kezelések</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Számokban"
        className="border-y border-border bg-secondary"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:gap-8">
          {site.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <img
                src={stat.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="mx-auto mb-4 aspect-[3/2] w-full rounded-md object-cover shadow-sm"
              />
              <div className="flex items-center justify-center gap-2">
                <CheckSquare
                  className="h-5 w-5 shrink-0 fill-emerald-500 text-white"
                  aria-hidden="true"
                />
                <p className="font-display text-2xl font-semibold sm:text-3xl">
                  {stat.value}
                </p>
              </div>
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
              <CheckSquare
                className="h-7 w-7 fill-primary text-primary-foreground"
                aria-hidden="true"
              />
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
                className="group relative overflow-hidden border-b-2 border-primary/40 bg-background p-6 transition-colors hover:border-primary"
              >
                <img
                  src={c.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10 transition-opacity duration-300 group-hover:opacity-15"
                />
                <div className="relative">
                  <h3 className="font-display text-xl font-semibold">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {c.treatments.length} kezelés
                  </p>
                </div>
              </Link>
            ))}
            {standaloneTreatments.map((t) => (
              <Link
                key={t.slug}
                to="/kozmetikai-kezelesek/$category"
                params={{ category: t.slug }}
                className="group relative overflow-hidden border-b-2 border-primary/40 bg-background p-6 transition-colors hover:border-primary"
              >
                {t.image && (
                  <img
                    src={t.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10 transition-opacity duration-300 group-hover:opacity-15"
                  />
                )}
                <div className="relative">
                  <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Időtartam: {t.duration}
                  </p>
                </div>
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
