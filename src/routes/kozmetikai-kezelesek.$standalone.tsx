import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { findStandalone } from "@/lib/site-data";
import { breadcrumbJsonLd, canonical, pageMeta, serviceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/kozmetikai-kezelesek/$standalone")({
  loader: ({ params }) => {
    const t = findStandalone(params.standalone);
    if (!t) throw notFound();
    return t;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Oldal nem található" }] };
    const path = `/kozmetikai-kezelesek/${params.standalone}`;
    const desc = loaderData.description || `${loaderData.name} az Erika Beauty Kozmetikában.`;
    return {
      meta: pageMeta({
        title: `${loaderData.name} | Erika Beauty Kozmetika`,
        description: desc,
        path,
        image: loaderData.image,
      }),
      links: canonical(path),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify([
            breadcrumbJsonLd([
              { name: "Kezdőlap", url: "/" },
              { name: "Kozmetikai kezelések", url: "/kozmetikai-kezelesek" },
              { name: loaderData.name, url: path },
            ]),
            serviceJsonLd(loaderData.name, desc, path),
          ]),
        },
      ],
    };
  },
  component: Page,
});

function Page() {
  const t = Route.useLoaderData();
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Kezdőlap", to: "/" },
          { label: "Kozmetikai kezelések", to: "/kozmetikai-kezelesek" },
          { label: t.name },
        ]}
      />
      {t.image && (
        <img
          src={t.image}
          alt={`${t.name} kozmetikai kezelés`}
          width="1200"
          height="700"
          className="mb-10 aspect-[12/7] w-full object-cover"
        />
      )}
      <h1 className="text-center font-display text-3xl font-semibold text-primary sm:text-4xl">
        {t.name}
      </h1>
      <SocialLinks className="mt-4 justify-center" />
      <p className="mt-5 text-center text-lg text-primary">Időtartam: {t.duration}</p>
      {t.description && (
        <p className="mx-auto mt-7 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
          {t.description}
        </p>
      )}

      {t.intro && (
        <div className="mt-10 grid gap-8 md:grid-cols-2">
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
          <div aria-hidden="true" />
        </div>
      )}

      <div className="text-center">
        <Button asChild className="mt-9">
          <Link to="/foglalas">Időpontfoglalás</Link>
        </Button>
      </div>
    </section>
  );
}
