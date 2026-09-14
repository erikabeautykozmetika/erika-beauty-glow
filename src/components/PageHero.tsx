type PageHeroProps = {
  src: string;
  alt: string;
  eager?: boolean;
};

import { ChevronDown } from "lucide-react";

export function PageHero({ src, alt, eager = false }: PageHeroProps) {
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
        className="mx-auto h-auto w-full max-w-[1920px] object-contain"
      />
      <button
        type="button"
        onClick={scrollBelow}
        aria-label="Tovább az oldal tartalmához"
        className="absolute bottom-3 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-md backdrop-blur transition-transform hover:translate-y-1"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
}