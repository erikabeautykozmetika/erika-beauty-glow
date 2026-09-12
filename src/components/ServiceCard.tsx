import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock3 } from "lucide-react";

import type { Treatment } from "@/lib/site-data";

export function ServiceCard({ treatment, to }: { treatment: Treatment; to: string }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      {treatment.image && (
        <img
          src={treatment.image}
          alt={`${treatment.name} az Erika Beauty Kozmetikában`}
          width={720}
          height={440}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-display text-2xl font-semibold text-foreground">{treatment.name}</h2>
        <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
          Időtartam: {treatment.duration}
        </p>
        {treatment.description && (
          <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{treatment.description}</p>
        )}
        <Link to={to} className="mt-6 inline-flex items-center gap-2 font-medium text-primary">
          Részletek <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}