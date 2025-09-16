/**
 * @file lib/registry.ts
 * @description Rejestr prostych podstron. Dodaj import nowej strony i dopisz do PAGES.
 */

import type { SimplePage } from "@/lib/types";
import { EXAMPLE_PAGE } from "@/content/pages/ExamplePage";

export const PAGES: SimplePage[] = [EXAMPLE_PAGE /*, KolejnePage */];

export function getPageBySlug(slug: string): SimplePage | undefined {
  return PAGES.find((p) => p.slug === slug);
}
