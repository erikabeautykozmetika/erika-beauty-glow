import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import footerImage from "@/assets/footer-cherry-blossoms.png.asset.json";
import { site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative isolate min-h-[360px] overflow-hidden border-t border-border bg-secondary sm:min-h-[320px]">
      <img
        src={footerImage.url}
        alt=""
        width={1920}
        height={720}
        loading="lazy"
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-background/28" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 md:py-12">
        <div>
          <Link to="/" className="font-display text-2xl font-semibold">
            Erika Beauty Kozmetika
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/75">
            {site.contactPrompt}
          </p>
        </div>
        <nav aria-label="Lábléc navigáció">
          <h2 className="font-display text-xl font-semibold">Oldalak</h2>
          <div className="mt-3 grid gap-2 text-sm text-foreground/75">
            <Link to="/kozmetikai-kezelesek">Kozmetikai kezelések</Link>
            <Link to="/arlista">Árlista</Link>
            <Link to="/foglalas">Foglalás</Link>
            <Link to="/eskuvoi-fotozas">Esküvői fotózás</Link>
            <Link to="/kontakt">Kontakt</Link>
          </div>
        </nav>
        <div>
          <h2 className="font-display text-xl font-semibold">Kapcsolat</h2>
          <div className="mt-3 space-y-3 text-sm text-foreground/75">
            <p className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              {site.addressLine}
              <br />
              {site.addressExtra}
            </p>
            <a href={`tel:${site.phone}`} className="flex gap-2">
              <Phone className="h-4 w-4 text-primary" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              Messenger
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-foreground/15 px-4 py-5 text-center text-xs text-foreground/75">
        {site.copyright}
      </div>
    </footer>
  );
}
