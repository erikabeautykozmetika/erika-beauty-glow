import { Star } from "lucide-react";

import { site } from "@/lib/site-data";

export function ReviewCTA() {
  return (
    <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-6 border-t border-border pt-12 text-center sm:flex-row sm:gap-8 sm:text-left">
      <img
        src="/images/qr-google-review.png"
        alt="QR kód: Erika Beauty Kozmetika értékelése Google-n"
        width={160}
        height={160}
        loading="lazy"
        className="h-32 w-32 shrink-0 border border-border p-1 sm:h-36 sm:w-36"
      />
      <div>
        <h2 className="flex items-center justify-center gap-2 font-display text-xl font-semibold sm:justify-start">
          <Star className="h-5 w-5 text-primary" aria-hidden="true" />
          Elégedett voltál? Értékelj minket a Google-n!
        </h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Olvasd be a QR kódot a telefonoddal, vagy kattints a gombra — egy
          őszinte értékeléssel sokat segítesz mások döntésében is.
        </p>
        <a
          href={site.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center border-b-2 border-primary font-medium text-primary transition-colors hover:border-primary/60"
        >
          Értékelés írása
        </a>
      </div>
    </div>
  );
}
