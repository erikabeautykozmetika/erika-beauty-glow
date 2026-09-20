import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { overviewItems, findTreatmentImageByPath } from "@/lib/site-data";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/kozmetikai-kezelesek/")({
  head: () => ({
    meta: pageMeta({
      title: "Kozmetikai kezelések | Erika Beauty Kozmetika",
      description:
        "Az Erika Beauty Kozmetika kezelései Budapesten, a XII. kerületben.",
      path: "/kozmetikai-kezelesek",
      image: "/images/hero-treatments.png",
    }),
    links: canonical("/kozmetikai-kezelesek"),
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero src="/images/hero-treatments.png" alt="Erika Beauty kozmetikai kezelések" eager />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h1 className="text-center font-display text-3xl font-semibold text-primary sm:text-4xl">
          Kozmetikai kezelések
        </h1>
        <SocialLinks className="mt-4 justify-center" />

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {overviewItems.map((item) => {
            const image = item.to ? findTreatmentImageByPath(item.to) : undefined;
            const content = (
              <>
                {image && (
                  <img
                    src={image}
                    alt={item.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-sm object-cover shadow-sm"
                  />
                )}
                <div className="mt-3 text-center">
                  <h2 className="font-display text-base font-semibold text-primary">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Időtartam: {item.duration}
                  </p>
                  {item.note && (
                    <p className="mt-1 text-xs italic text-muted-foreground">
                      {item.note}
                    </p>
                  )}
                </div>
              </>
            );

            return item.to ? (
              <Link key={item.name} to={item.to} className="group block">
                {content}
              </Link>
            ) : (
              <div key={item.name}>{content}</div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Button asChild size="lg">
            <Link to="/foglalas">Időpontfoglalás</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
