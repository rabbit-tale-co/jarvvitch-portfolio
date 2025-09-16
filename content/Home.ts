/**
 * @file content/Home.ts
 * @description Kolejność i widoczność sekcji na stronie głównej.
 * Wystarczy zmienić enabled albo kolejność w tablicy.
 */
import type { HomeSection } from "@/lib/types";

export const HOME_SECTIONS: HomeSection[] = [
  {
    id: "about",
    title: "O mnie",
    subtitle: "Kim jestem i jak pracuję",
    enabled: true,
  },
  {
    id: "gallery",
    title: "Galeria",
    subtitle: "Wybrane prace",
    enabled: true,
  },
  {
    id: "pricelist",
    title: "Cennik",
    subtitle: "Pakiety i orientacyjne stawki",
    enabled: true,
  },
  {
    id: "contact",
    title: "Kontakt",
    subtitle: "Zapytania i wyceny",
    enabled: true,
  },
  {
    id: "legal",
    title: "Regulamin i Prywatność",
    subtitle: "Najważniejsze informacje prawne",
    enabled: true,
  },
];
