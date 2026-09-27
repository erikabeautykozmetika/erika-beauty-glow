import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Ékezet- és kis/nagybetű-független szöveg normalizálás kereséshez. */
export function normalizeForSearch(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

/** Igaz, ha `query` szövegrészletként megtalálható `text`-ben (ékezetfüggetlenül). */
export function matchesSearch(text: string, query: string): boolean {
  if (!query.trim()) return true;
  return normalizeForSearch(text).includes(normalizeForSearch(query));
}
