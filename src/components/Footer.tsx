import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

import { site } from "@/lib/site-data";
import { navItems } from "@/components/Header";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex flex-col leading-none">
              <span className="text-lg font-semibold tracking-[0.2em] text-foreground">
                ERIKA
              </span>
              <span className="text-[0.68rem] font-medium tracking-[0.32em] text-primary">
                BEAUTY KOZMETIKA
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Nálam nincs tukmálás, csak valódi megoldások és szakértő segítség.
              Személyre szabott arckezelések a XII. kerületben.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 text-muted-foreground transition-colors hover:text-primary"
                aria-label="Instagram oldal"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 text-muted-foreground transition-colors hover:text-primary"
                aria-label="Facebook oldal"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Oldaltérkép">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Oldalak
            </h2>
            <ul className="mt-4 space-y-2">
              {[...navItems, { to: "/foglalas", label: "Időpontfoglalás" }].map(
                (item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Elérhetőség
            </h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {site.postalCode} {site.city}, {site.street}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${site.phone}`} className="hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {site.openingHours.map((o) => (
                    <span key={o.days} className="block">
                      {o.days}: {o.hours}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          Minden jog fenntartva © {site.domain} {new Date().getFullYear()} ·
          Webszerkesztő: {site.owner}
        </div>
      </div>
    </footer>
  );
}
