import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  Droplets,
  Eye,
  Flower2,
  Palette,
  RotateCcw,
  Sparkles,
  User,
  Wind,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { findCategory, findStandalone } from "@/lib/site-data";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/kviz")({
  head: () => ({
    meta: pageMeta({
      title: "Melyik kezelés illik hozzád? | Erika Beauty Kozmetika",
      description:
        "Pár kattintás, és megmutatjuk, melyik kozmetikai kezelés illik hozzád az Erika Beauty Kozmetikában.",
      path: "/kviz",
    }),
    links: canonical("/kviz"),
  }),
  component: QuizPage,
});

type StepId = "start" | "arc-cel" | "szem-terulet";

type Option = {
  id: string;
  label: string;
  icon: typeof Sparkles;
  next?: StepId;
  resultSlug?: string;
};

type Step = {
  id: StepId;
  question: string;
  options: Option[];
};

const steps: Record<StepId, Step> = {
  start: {
    id: "start",
    question: "Mi izgat most a legjobban?",
    options: [
      { id: "arc", label: "Ápolt, feszes arcbőr", icon: Droplets, next: "arc-cel" },
      { id: "szem", label: "Kifejezőbb tekintet", icon: Eye, next: "szem-terulet" },
      { id: "smink", label: "Ünnepi vagy hétköznapi smink", icon: Palette, resultSlug: "smink" },
      { id: "szortelenites", label: "Sima, szőrtelen bőr", icon: Wind, resultSlug: "szortelenites-es-gyantazas" },
      { id: "ferfi", label: "Férfi bőrápolás", icon: User, resultSlug: "ferfi-kozmetikai-kezeles" },
      { id: "hat", label: "Test és hát ellazítása", icon: Flower2, resultSlug: "hatkezeles" },
    ],
  },
  "arc-cel": {
    id: "arc-cel",
    question: "Mi a fő célod az arcbőrödnél?",
    options: [
      { id: "rancok", label: "Ránctalanítás, feszesítés", icon: Sparkles, resultSlug: "ranctalanitas-es-bormegujito-kezelesek" },
      { id: "frissites", label: "Tisztítás, hidratálás, frissítés", icon: Droplets, resultSlug: "arckezelesek" },
    ],
  },
  "szem-terulet": {
    id: "szem-terulet",
    question: "Melyik területre koncentrálnál?",
    options: [
      { id: "szemoldok", label: "Szemöldök formázás, lifting", icon: Eye, resultSlug: "szemoldok-kezelesek" },
      { id: "szempilla", label: "Szempilla dúsítás, lifting", icon: Eye, resultSlug: "szempilla-kezelesek" },
      { id: "tartos", label: "Tartós, félig-állandó megoldás", icon: Sparkles, resultSlug: "microblading-szemoldok-tetovalas" },
    ],
  },
};

function getResult(slug: string) {
  const category = findCategory(slug);
  if (category) {
    return {
      name: category.name,
      blurb: category.lead,
      image: category.image,
      slug: category.slug,
    };
  }
  const standalone = findStandalone(slug);
  if (standalone) {
    return {
      name: standalone.name,
      blurb: standalone.description,
      image: standalone.image,
      slug: standalone.slug,
    };
  }
  return null;
}

function QuizPage() {
  const [history, setHistory] = useState<StepId[]>(["start"]);
  const [resultSlug, setResultSlug] = useState<string | null>(null);

  const currentStep = steps[history[history.length - 1] ?? "start"];
  const result = resultSlug ? getResult(resultSlug) : null;

  const handleSelect = (option: Option) => {
    if (option.resultSlug) {
      setResultSlug(option.resultSlug);
    } else if (option.next) {
      setHistory((h) => [...h, option.next!]);
    }
  };

  const handleBack = () => {
    setHistory((h) => (h.length > 1 ? h.slice(0, -1) : h));
  };

  const handleRestart = () => {
    setHistory(["start"]);
    setResultSlug(null);
  };

  return (
    <>
      <PageHero src="/images/hero-treatments.jpg" alt="Melyik kezelés illik hozzád?" eager />
      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
        <Breadcrumbs items={[{ label: "Kezdőlap", to: "/" }, { label: "Melyik kezelés illik hozzád?" }]} />
        <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">
          Melyik kezelés illik hozzád?
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Válaszolj pár rövid kérdésre, és megmutatjuk, melyik kezelésünkkel
          érdemes kezdened.
        </p>

        {!result && (
          <div className="mt-12">
            <div className="mb-8 flex items-center justify-center gap-2" aria-hidden="true">
              {[0, 1].map((i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i < history.length ? "w-8 bg-primary" : "w-4 bg-border"
                  }`}
                />
              ))}
            </div>

            <h2 className="font-display text-2xl font-semibold">{currentStep.question}</h2>

            <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
              {currentStep.options.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleSelect(option)}
                    className="group flex items-center gap-3 border border-border bg-card p-5 text-left shadow-sm transition-all hover:border-primary hover:shadow-md"
                  >
                    <Icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                    <span className="font-medium text-foreground">{option.label}</span>
                  </button>
                );
              })}
            </div>

            {history.length > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Vissza
              </button>
            )}
          </div>
        )}

        {result && (
          <div className="mx-auto mt-12 max-w-xl border border-border bg-card p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              A neked ajánlott kezelés
            </p>
            {result.image && (
              <img
                src={result.image}
                alt={result.name}
                loading="lazy"
                className="mx-auto mt-5 aspect-[16/9] w-full rounded-sm object-cover"
              />
            )}
            <h2 className="mt-5 font-display text-2xl font-semibold text-foreground">
              {result.name}
            </h2>
            {result.blurb && (
              <p className="mt-3 leading-relaxed text-muted-foreground">{result.blurb}</p>
            )}
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/kozmetikai-kezelesek/$category" params={{ category: result.slug }}>
                  Kezelés megtekintése
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/foglalas">Időpontfoglalás</Link>
              </Button>
            </div>
            <button
              type="button"
              onClick={handleRestart}
              className="mx-auto mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Újrakezdés
            </button>
          </div>
        )}
      </section>
    </>
  );
}
