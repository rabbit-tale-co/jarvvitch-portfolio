/**
 * @file content/pages/ExamplePage.ts
 * @description PRZYKŁAD: własna prosta podstrona bez tworzenia dedykowanego route.
 * Wystarczy dopisać do rejestru w src/lib/registry.ts
 */
import type { SimplePage } from "@/lib/types";


export const EXAMPLE_PAGE: SimplePage = {
  slug: "commission-info",
  title: "Commission – dodatkowe informacje",
  content: `
  Tutaj możesz umieścić dłuższy opis procesu, przykłady briefów, FAQ itp.
  Nagłówki możesz zrobić poprzez pustą linię i użycie CAPS, albo dodać <br/> w razie potrzeby.
  `,
};
