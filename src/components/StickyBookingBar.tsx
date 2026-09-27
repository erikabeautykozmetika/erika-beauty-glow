import { Link, useRouterState } from "@tanstack/react-router";
import { CalendarCheck } from "lucide-react";

export function StickyBookingBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  if (pathname === "/foglalas") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/20 bg-primary shadow-[0_-4px_12px_rgba(0,0,0,0.12)] lg:hidden">
      <Link
        to="/foglalas"
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-primary-foreground"
      >
        <CalendarCheck className="h-4.5 w-4.5" aria-hidden="true" />
        Időpontfoglalás
      </Link>
    </div>
  );
}
