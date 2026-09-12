import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Morzsamenü" className="mb-8 flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="inline-flex items-center gap-1">
          {index > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
          {item.to ? (
            <Link to={item.to} className="transition-colors hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="text-foreground">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}