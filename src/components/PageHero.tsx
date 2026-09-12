type PageHeroProps = {
  src: string;
  alt: string;
  eager?: boolean;
};

export function PageHero({ src, alt, eager = false }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-secondary" aria-label={alt}>
      <img
        src={src}
        alt={alt}
        width={1920}
        height={720}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="mx-auto h-auto w-full max-w-[1920px] object-contain"
      />
    </section>
  );
}