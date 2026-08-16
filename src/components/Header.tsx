import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { site } from "@/lib/site-data";

export const navItems = [
  { to: "/", label: "Kezdőlap" },
  { to: "/szolgaltatasok", label: "Szolgáltatások" },
  { to: "/rolam", label: "Rólam" },
  { to: "/galeria", label: "Galéria" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

function Wordmark() {
  return (
    <span className="flex flex-col leading-none">
      <span className="text-lg font-semibold tracking-[0.2em] text-foreground">
        ERIKA
      </span>
      <span className="text-[0.68rem] font-medium tracking-[0.32em] text-primary">
        BEAUTY KOZMETIKA
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="hidden border-b border-border/60 bg-secondary md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <span>Kérdése van? Írjon, amint tudok, válaszolok.</span>
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label={`${site.name} — kezdőlap`}>
          <Wordmark />
        </Link>

        <nav aria-label="Főmenü" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link to="/foglalas">Időpontfoglalás</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menü megnyitása">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 pt-8">
              <Link to="/" onClick={() => setOpen(false)}>
                <Wordmark />
              </Link>
              <nav aria-label="Mobil menü" className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const active = pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`rounded-md px-3 py-2 text-base font-medium transition-colors ${
                        active
                          ? "bg-secondary text-primary"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <Button asChild className="mt-2 w-full">
                <Link to="/foglalas" onClick={() => setOpen(false)}>
                  Időpontfoglalás
                </Link>
              </Button>
              <a
                href={`tel:${site.phone}`}
                className="text-center text-sm text-muted-foreground"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
