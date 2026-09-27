import { forwardRef, type AnchorHTMLAttributes, type MouseEvent } from "react";

import { site } from "@/lib/site-data";

type PhoneLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/**
 * Telefonszámos link, ami hívás előtt megerősítést kér a felhasználótól,
 * hogy elkerüljük a véletlen (pl. éjszakai) kihívásokat.
 */
export const PhoneLink = forwardRef<HTMLAnchorElement, PhoneLinkProps>(
  ({ onClick, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={`tel:${site.phone}`}
        onClick={(event: MouseEvent<HTMLAnchorElement>) => {
          const confirmed = window.confirm(
            `Biztosan felhívod az Erika Beauty Kozmetikát?\n${site.phoneDisplay}`,
          );
          if (!confirmed) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }}
        {...props}
      >
        {children}
      </a>
    );
  },
);
PhoneLink.displayName = "PhoneLink";
