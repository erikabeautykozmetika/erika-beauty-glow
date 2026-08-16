import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import facialImage from "../../public/images/gallery-facial.jpg";
import manicureImage from "../../public/images/gallery-manicure.jpg";
import makeupImage from "../../public/images/gallery-makeup.jpg";
import massageImage from "../../public/images/gallery-massage.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galéria és vélemények — ErikaBeautyKozmetika" },
      { name: "description", content: "Nézd meg szalonunk hangulatát és vendégeink véleményeit. Tekintsd meg képgalériánkat!" },
      { property: "og:title", content: "Galéria és vélemények — ErikaBeautyKozmetika" },
      { property: "og:description", content: "Nézd meg szalonunk hangulatát és vendégeink véleményeit." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const galleryImages = [
  { src: facialImage, alt: "Arckezelés az ErikaBeautyKozmetika szalonban", label: "Arckezelés" },
  { src: manicureImage, alt: "Manikűr az ErikaBeautyKozmetika szalonban", label: "Manikűr" },
  { src: makeupImage, alt: "Smink az ErikaBeautyKozmetika szalonban", label: "Smink" },
  { src: massageImage, alt: "Masszázs az ErikaBeautyKozmetika szalonban", label: "Masszázs" },
];

const testimonials = [
  {
    name: "Katalin",
    text: "Erika kezei varázslatosak! Az arckezelés után hetekig ragyogott a bőröm. Csak ajánlani tudom.",
    rating: 5,
  },
  {
    name: "Zsófi",
    text: "Végre találtam egy helyet, ahol tényleg odafigyelnek rám. A manikűröm tökéletes lett.",
    rating: 5,
  },
  {
    name: "Andrea",
    text: "Nyugodt, tiszta környezet és kedves személyzet. Az alkalmi sminkemért rengeteg dicséretet kaptam.",
    rating: 5,
  },
];

function GalleryPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Galéria"
          subtitle="Pillants be szalonunkba — ilyen hangulat vár minden kezelés alkalmával."
          centered
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.label}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="font-medium text-white">{image.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading
            title="Vendégeink mondták"
            subtitle="Számunkra a legnagyobb elismerés, ha visszajársz hozzánk."
            centered
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((review) => (
              <div
                key={review.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-4 text-foreground">"{review.text}"</p>
                <p className="mt-4 text-sm font-medium text-primary">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
