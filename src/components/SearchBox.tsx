import { Search } from "lucide-react";

type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  /** Kisegítő szöveg felolvasóprogramoknak (pl. "Kezelések keresése"). */
  label: string;
};

export function SearchBox({
  value,
  onChange,
  placeholder = "Keresés",
  className = "",
  label,
}: SearchBoxProps) {
  return (
    <div className={`relative mx-auto w-full max-w-md ${className}`}>
      <label htmlFor="search-box" className="sr-only">
        {label}
      </label>
      <input
        id="search-box"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-border bg-background py-2.5 pl-5 pr-12 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
      />
      <Search
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
    </div>
  );
}
