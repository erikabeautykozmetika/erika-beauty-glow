import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Heart, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import heroImage from "../../public/images/hero-salon.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ErikaBeautyKozmetika — Szépségápolás Budapesten" },
      { name: "description", content: "Professzionális kozmetikai kezelések Budapesten. Arckezelések, manikűr, smink és masszázs. Foglalj időpontot online!" },
      { property: "og:title", content: "ErikaBeautyKozmetika — Szépségápolás Budapesten" },
      { property: "og:description", content: "Professzionális kozmetikai kezelések Budapesten. Arckezelések, manikűr, smink és masszázs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://id-preview--63e1da8b-4788-4a04-9c9d-5aad1f58f715.lovable.app/images/hero-salon.jpg" },
      { name: "twitter:image", content: "https://id-preview--63e1da8b-4788-4a04-9c9d-5aad1f58f715.lovable.app/images/hero-salon.jpg" },
    ],
  }),
  component: HomePage,
});

const highlights = [
  {
    icon: Sparkles,
    title: "Professzionális kezelések",
    description: "Modern technológiák és prémium kozmetikumok a legjobb eredményekért.",
  },
  {
    icon: Heart,
    title: "Egyénre szabott figyelem",
    description: "Minden vendég bőréhez és igényeihez igazítjuk a kezelést.",
  },
  {
    icon: Clock,
    title: "Egyszerű időpontfoglalás",
    description: "Foglalj online pár kattintással, a neked megfelelő időpontban.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-xl">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Szépségápolás, amiben{" "}
                <span className="text-primary">te vagy a középpontban</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Fedezd fel a professzionális kozmetikai kezelések világát egy barátságos,
                nyugodt környezetben. ErikaBeautyKozmetika — ahol a szépség és a kényelem
                találkozik.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Időpontfoglalás
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">Szolgáltatások</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-xl">
                <img
                  src={heroImage}
                  alt="ErikaBeautyKozmetika kezelőszoba"
                  width={1344}
                  height={896}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Miért válassz minket?"
            subtitle="Több mint szolgáltatás — élmény, amitől ragyogóbbnak érzed magad."
            centered
            className="mb-12"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="inline-flex rounded-xl bg-secondary p-3 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Készen állsz a kényeztetésre?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Foglalj időpontot még ma, és engedd meg magadnak azt a feltöltődést, amit megérdemelsz.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Foglalj időpontot
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
