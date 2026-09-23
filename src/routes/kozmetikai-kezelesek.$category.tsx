import { Outlet, Link, createFileRoute, notFound } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { findCategory, findStandalone } from "@/lib/site-data";
import { breadcrumbJsonLd, canonical, pageMeta, serviceJsonLd } from "@/lib/seo";

// A "/kozmetikai-kezelesek/:slug" cím kétféle dolgot jelenthet: egy kategória
// gyűjtőoldalát (pl. "szemoldok-kezelesek", aminek vannak gyerek-útvonalai:
// .../$category/ és .../$category/$treatment), vagy egy önálló kezelés saját
// oldalát (pl. "ferfi-kozmetikai-kezeles", aminek nincs alárendelt oldala).
// A kettő ugyanazon az útvonal-mintán osztozna, ezért EGY route dönti el itt,
// melyikről van szó — így nincs ütközés a router két külön route-ja között.
export const Route = createFileRoute("/kozmetikai-kezelesek/$category")({
  loader: ({ params }) => {
    const category = findCategory(params.category);
    if (category) return { kind: "category" as const, data: category };

    const standalone = findStandalone(params.category);
    if (standalone) return { kind: "standalone" as const, data: standalone };

    throw notFound();
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Oldal nem található" }] };
    const path = `/kozmetikai-kezelesek/${params.category}`;

    if (loaderData.kind === "standalone") {
      const t = loaderData.data;
      const desc = t.description || `${t.name} az Erika Beauty Kozmetikában.`;
      return {
        meta: pageMeta({
          title: `${t.name} | Erika Beauty Kozmetika`,
          description: desc,
          path,
          image: t.image,
        }),
        links: canonical(path),
        scripts: [
          {
            type: "application/ld+json",
            children: JSON.stringify([
              breadcrumbJsonLd([
                { name: "Kezdőlap", url: "/" },
                { name: "Kozmetikai kezelések", url: "/kozmetikai-kezelesek" },
                { name: t.name, url: path },
              ]),
              serviceJsonLd(t.name, desc, path),
            ]),
          },
        ],
      };
    }

    // A kategória-oldalak saját head()-je a gyerek route-ban (.index.tsx) fut le.
    return {};
  },
  component: RouteComponent,
});

function RouteComponent() {
  const loaderData = Route.useLoaderData();
  if (loaderData.kind === "category") return <Outlet />;
  return <StandaloneTreatmentPage treatment={loaderData.data} />;
}

function StandaloneTreatmentPage({
  treatment: t,
}: {
  treatment: NonNullable<ReturnType<typeof findStandalone>>;
}) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Kezdőlap", to: "/" },
          { label: "Kozmetikai kezelések", to: "/kozmetikai-kezelesek" },
          { label: t.name },
        ]}
      />
      <h1 className="text-center font-display text-3xl font-semibold text-primary sm:text-4xl">
        {t.name}
      </h1>
      <SocialLinks className="mt-4 justify-center" />

      {t.image ? (
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <img
            src={t.image}
            alt={`${t.name} kozmetikai kezelés`}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover shadow-md"
          />
          <div>
            <h2 className="font-display text-2xl font-semibold">{t.name}</h2>
            {t.description && (
              <p className="mt-4 leading-relaxed text-muted-foreground">{t.description}</p>
            )}
            <p className="mt-4 text-lg text-primary">Időtartam: {t.duration}</p>
          </div>
        </div>
      ) : (
        <>
          <p className="mt-5 text-center text-lg text-primary">Időtartam: {t.duration}</p>
          {t.description && (
            <p className="mx-auto mt-7 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
              {t.description}
            </p>
          )}
        </>
      )}

      {t.intro && (
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <h2 className="font-display text-3xl font-semibold italic text-primary">
              {t.intro.heading}
            </h2>
            {t.intro.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          {t.introImage ? (
            <img
              src={t.introImage}
              alt={t.intro.heading || t.name}
              loading="lazy"
              className="aspect-[4/3] w-full self-start rounded-sm object-cover shadow-md"
            />
          ) : (
            <div aria-hidden="true" />
          )}
        </div>
      )}

      <div className="mt-9 text-center">
        <Button asChild>
          <Link to="/foglalas">Időpontfoglalás</Link>
        </Button>
      </div>
    </section>
  );
}
