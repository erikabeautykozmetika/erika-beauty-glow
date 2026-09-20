import { Facebook, Instagram } from "lucide-react";

const links = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/groups/792985834555647/",
    className: "bg-[#1877F2] hover:bg-[#1568d6]",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/erikabeautykozmetika/",
    className:
      "bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] hover:opacity-90",
    icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@erikakozmi?_r=1&_t=ZN-98xQKQRupQx",
    className: "bg-black hover:bg-neutral-800",
    icon: TikTokIcon,
  },
] as const;

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 5.82c-.96-.66-1.6-1.66-1.79-2.82h-3.02v13.1c0 1.4-1.14 2.54-2.55 2.54a2.55 2.55 0 0 1-2.55-2.55c0-1.4 1.14-2.54 2.55-2.54.28 0 .55.04.8.13V10.6a5.6 5.6 0 0 0-.8-.06 5.58 5.58 0 0 0-5.58 5.58A5.58 5.58 0 0 0 9.24 21.7a5.58 5.58 0 0 0 5.58-5.58V9.02a8.2 8.2 0 0 0 4.78 1.53V7.53a4.85 4.85 0 0 1-3-1.71Z" />
    </svg>
  );
}

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="Kövess minket">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Erika Beauty Kozmetika ${link.name}-on`}
          className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm transition-transform hover:scale-105 ${link.className}`}
        >
          <link.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
