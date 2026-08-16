import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Szolgáltatások — ErikaBeautyKozmetika" },
      { name: "description", content: "Arckezelések, manikűr, smink és masszázs szolgáltatások Budapesten. Nézd meg árainkat, és foglalj időpontot!" },
      { property: "og:title", content: "Szolgáltatások — ErikaBeautyKozmetika" },
      { property: "og:description", content: "Arckezelések, manikűr, smink és masszázs szolgáltatások Budapesten." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    category: "Arckezelések",
    items: [
      { name: "Klasszikus arckezelés", duration: "60 perc", price: "12 000 Ft" },
      { name: "Hidratáló kezelés", duration: "75 perc", price: "15 000 Ft" },
      { name: "Tisztító kezelés", duration: "90 perc", price: "17 000 Ft" },
      { name: "Anti-aging arckezelés", duration: "90 perc", price: "22 000 Ft" },
    ],
  },
  {
    category: "Kéz- és lábápolás",
    items: [
      { name: "Klasszikus manikűr", duration: "45 perc", price: "5 500 Ft" },
      { name: "Géllakkozás", duration: "75 perc", price: "9 000 Ft" },
      { name: "Pedikűr", duration: "60 perc", price: "8 000 Ft" },
      { name: "Japán manikűr", duration: "60 perc", price: "10 000 Ft" },
    ],
  },
  {
    category: "Smink és szempilla",
    items: [
      { name: "Nappali smink", duration: "45 perc", price: "8 000 Ft" },
      { name: "Alkalmi smink", duration: "75 perc", price: "15 000 Ft" },
      { name: "Szempilla lifting", duration: "60 perc", price: "12 000 Ft" },
      { name: "Szemöldök laminálás", duration: "45 perc", price: "9 000 Ft" },
    ],
  },
  {
    category: "Masszázs és testkezelés",
    items: [
      { name: "Arcmasszázs", duration: "30 perc", price: "6 000 Ft" },
      { name: "Relaxáló hátmasszázs", duration: "45 perc", price: "9 000 Ft" },
      { name: "Teljes testmasszázs", duration: "60 perc", price: "13 000 Ft" },
      { name: "Aromaterápiás masszázs", duration: "75 perc", price: "16 000 Ft" },
    ],
  },
];

function ServicesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Szolgáltatásaink"
          subtitle="Széles kínálatunkban mindenki megtalálja a számára legmegfelelőbb kezelést — professzionális eszközökkel, gondos odafigyeléssel."
          centered
          className="mb-12"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-card-foreground">
                {group.category}
              </h2>
              <ul className="mt-6 space-y-4">
                {group.items.map((service) => (
                  <li
                    key={service.name}
                    className="flex items-center justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium text-foreground">{service.name}</p>
                      <p className="text-sm text-muted-foreground">{service.duration}</p>
                    </div>
                    <span className="whitespace-nowrap font-semibold text-primary">
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-secondary p-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground">
            Nem találod, amit keresel?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Vedd fel velünk a kapcsolatot, és segítünk kiválasztani a megfelelő kezelést.
          </p>
          <Button asChild className="mt-6">
            <Link to="/contact">
              Kapcsolatfelvétel
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
