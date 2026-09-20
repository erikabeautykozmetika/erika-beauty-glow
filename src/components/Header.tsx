import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { categories, site, standaloneTreatments } from "@/lib/site-data";

export const navItems = [
  { to: "/", label: "HOME" },
  { to: "/kozmetikai-kezelesek", label: "KOZMETIKAI KEZELÉSEK" },
  { to: "/arlista", label: "ÁRLISTA" },
  { to: "/foglalas", label: "FOGLALÁS" },
  { to: "/eskuvoi-fotozas", label: "ESKÜVŐI FOTÓZÁS" },
  { to: "/kontakt", label: "KONTAKT" },
] as const;

function Wordmark() {
  return <img src="/images/logo.png" alt="Erika Beauty Kozmetika" width="460" height="137" className="h-14 w-auto max-w-[230px] object-contain sm:h-16 sm:max-w-[290px]"/>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
    <div className="hidden border-b border-border bg-secondary lg:block"><div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs text-muted-foreground"><span>{site.contactPrompt}</span><a href={`tel:${site.phone}`} className="flex items-center gap-2 font-semibold text-foreground"><Phone className="h-3.5 w-3.5"/>{site.phoneDisplay}</a></div></div>
    <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6"><Link to="/" aria-label="Erika Beauty Kozmetika kezdőlap"><Wordmark/></Link>
      <nav aria-label="Főmenü" className="hidden items-center gap-0 xl:flex">{navItems.map(item => item.to === "/kozmetikai-kezelesek" ? <div className="group relative" key={item.to}><Link to={item.to} className="flex items-center gap-1 px-2 py-7 text-[0.82rem] font-semibold text-foreground hover:text-primary">{item.label}<ChevronDown className="h-3.5 w-3.5"/></Link><div className="invisible absolute left-0 top-full w-80 border border-border bg-background p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">{categories.map(c=><Link key={c.slug} to="/kozmetikai-kezelesek/$category" params={{category:c.slug}} className="block px-3 py-2 text-sm hover:bg-secondary hover:text-primary">{c.name}</Link>)}{standaloneTreatments.map(t=><Link key={t.slug} to="/kozmetikai-kezelesek/$standalone" params={{standalone:t.slug}} className="block px-3 py-2 text-sm hover:bg-secondary hover:text-primary">{t.name}</Link>)}</div></div> : <Link key={item.to} to={item.to} className={`px-2 py-7 text-[0.82rem] font-semibold hover:text-primary ${pathname===item.to?'text-primary':'text-foreground'}`}>{item.label}</Link>)}</nav>
      <Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild className="xl:hidden"><Button variant="ghost" size="icon" aria-label="Menü megnyitása"><Menu/></Button></SheetTrigger><SheetContent side="right" className="w-[min(90vw,24rem)] overflow-y-auto"><div className="pt-8"><Wordmark/><nav aria-label="Mobil menü" className="mt-8 flex flex-col">{navItems.map(item=><div key={item.to}><Link to={item.to} onClick={()=>setOpen(false)} className="block border-b border-border py-3 text-sm font-semibold">{item.label}</Link>{item.to==='/kozmetikai-kezelesek'&&<div className="ml-4 border-l border-border pl-4">{categories.map(c=><Link key={c.slug} to="/kozmetikai-kezelesek/$category" params={{category:c.slug}} onClick={()=>setOpen(false)} className="block py-2 text-sm text-muted-foreground">{c.name}</Link>)}{standaloneTreatments.map(t=><Link key={t.slug} to="/kozmetikai-kezelesek/$standalone" params={{standalone:t.slug}} onClick={()=>setOpen(false)} className="block py-2 text-sm text-muted-foreground">{t.name}</Link>)}</div>}</div>)}</nav></div></SheetContent></Sheet>
    </div></header>;
}