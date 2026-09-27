import { marqueeKeywords } from "@/lib/site-data";

function MarqueeItems() {
  return (
    <>
      {marqueeKeywords.map((word, i) => (
        <span key={i} className="inline-flex items-center whitespace-nowrap">
          {word}
          <span
            className="mx-2.5 text-[22px] leading-none text-[#C00000]"
            aria-hidden="true"
          >
            ∞
          </span>
        </span>
      ))}
    </>
  );
}

export function KeywordMarquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-white py-3">
      <div className="marquee-track flex w-max whitespace-nowrap font-display text-base font-normal text-black">
        <MarqueeItems />
        <MarqueeItems />
      </div>
    </div>
  );
}
