import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { site, services } from "@/lib/site-data";
import { localBusinessJsonLd, pageMeta } from "@/lib/seo";
import heroAsset from "@/assets/hero-cosmetics.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "Kozmetika Budapest XII. kerület | Erika Beauty Kozmetika",
      description:
        "Személyre szabott arckezelések Budapest XII. kerületében: mélytisztítás, hidratálás, anti-age kúra. 16 év tapasztalat, 5400+ kezelés. Foglalj időpontot online!",
      path: "/",
      image: heroAsset.url,
    }),
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    icon: HeartHandshake,
    title: "Nincs tukmálás",
    text: "Nem termékeket adok el, hanem megoldásokat kínálok. Csak azt javaslom, amire a bőrödnek tényleg szüksége van.",
  },
  {
    icon: Sparkles,
    title: "Személyre szabott kezelés",
    text: "Minden arcbőr egyedi történetet mesél, ezért nem sablonokkal, hanem bőrdiagnosztikára épülő tervvel dolgozom.",
  },
  {
    icon: ShieldCheck,
    title: "16 év szakmai tapasztalat",
    text: "Több mint 5400 kezelés és 27 gép áll mögötte, hogy biztosan a legjobb utat válasszuk együtt.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src="/images/hero-salon.jpg"
          alt="Az Erika Beauty Kozmetika világos, letisztult kezelőtere Budapesten"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-background/80 backdrop-blur-[2px]" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
              {site.postalCode} {site.city} · {site.district}
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Erika Beauty Kozmetika
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Te is úgy érzed, hogy elvesztél a kozmetikai termékek és ígéretek
              végtelen tengerében? A filozófiám egyszerű: nálam nincs tukmálás,
              csak valódi megoldások és szakértő segítség.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/foglalas">Időpontfoglalás</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/szolgaltatasok">Szolgáltatások megtekintése</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Számokban" className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {site.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-semibold text-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img
            src="/images/erika-portrait.jpg"
            alt="Bertus Erika kozmetikus a szalonjában"
            width={1024}
            height={1280}
            loading="lazy"
            className="mx-auto w-full max-w-md rounded-3xl object-cover shadow-sm"
          />
          <div>
            <SectionHeading
              title="Minden arcbőr egyedi történetet mesél"
              subtitle="Ezért nem sablonokat kínálok, hanem személyre szabott gondoskodást — legyen szó mélytisztításról, anti-age kúráról vagy a bőröd egészségének megőrzéséről."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Bőrdiagnosztikára épülő, egyénre szabott kezelési terv",
                "Üdvözlő szaktanácsadás online az első kezelés előtt",
                "Otthoni ápolási javaslat, amit tényleg használni fogsz",
                "Nyugodt, tiszta környezet a XII. kerület szívében",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-border bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            title="Miért az Erika Beauty Kozmetika?"
            subtitle="Szakmai tudás és őszinte törődés — ez a kettő találkozik nálam."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-sm"
              >
                <div className="inline-flex rounded-xl bg-secondary p-3 text-primary">
                  <pillar.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            title="Foglalható szolgáltatások"
            subtitle="Arckezelések és gépi kúrák, minden esetben a bőröd aktuális állapotához igazítva."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <article
                key={service.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {service.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Időtartam: <strong className="text-foreground">{service.duration}</strong>
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/szolgaltatasok">Összes szolgáltatás</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Találjuk ki együtt, mire van szüksége a bőrödnek!
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ne hagyd, hogy a bőröd bizonytalan legyen — kérj tanácsot, vagy foglalj
            időpontot néhány kattintással.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/foglalas">Időpontot foglalok</Link>
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
