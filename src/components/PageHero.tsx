type PageHeroProps = {
  src: string;
  alt: string;
  eager?: boolean;
  compact?: boolean;
  /** Extra Tailwind max-height osztály (pl. "max-h-[420px]") olyan képekhez,
   * amik nem panoráma arányúak, és object-contain mellett irreálisan
   * magasra nőnének teljes szélességben. Nem vág, csak korlátozza a magasságot. */
  maxHeightClass?: string;
};

import { ChevronDown } from "lucide-react";

export function PageHero({
  src,
  alt,
  eager = false,
  compact = false,
  maxHeightClass,
}: PageHeroProps) {
  const scrollBelow = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight * 0.72,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative border-b border-border bg-secondary" aria-label={alt}>
      <img
        src={src}
        alt={alt}
        width={1920}
        height={720}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className={
          compact
            ? "mx-auto h-52 w-full max-w-[1920px] object-cover object-[50%_62%] sm:h-64 md:h-72"
            : `mx-auto h-auto w-full max-w-[1920px] object-contain${maxHeightClass ? ` ${maxHeightClass}` : ""}`
        }
      />
      <button
        type="button"
        onClick={scrollBelow}
        aria-label="Tovább az oldal tartalmához"
        className="absolute bottom-3 left-1/2 flex h-11 w-11 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-background/85 text-foreground shadow-md backdrop-blur transition-transform hover:translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
}
