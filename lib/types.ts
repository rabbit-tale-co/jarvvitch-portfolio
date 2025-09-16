/**
 * @file lib/types.ts
 * @description Typy do danych z katalogu /content
 * (wszystkie z "?" są opcjonalne)
*/

export type SocialLink = {
  label: string;  // np. "Telegram", "Instagram", "Bsky"
  url: string;    // pełny URL
  icon?: string;  // (opcjonalne) nazwa ikony lucide lub niestandardowej
}

export type SiteConfig = {
  brand: {
    name: string;      // nazwa/alias marki
    tagline?: string;  // krótki opis pod logiem
    logo?: string;     // ścieżka do pliku w /public (np. "/logo.svg")
  };
  contact: {
    email: string;
    phone?: string;
    location?: string; // np. "Katowice, PL"
  };
  social: SocialLink[];
  seo: {
    title: string;         // domyślny tytuł SEO
    description?: string;  // domyślny opis SEO
    keywords?: string[];   // globalne słowa kluczowe
  }
}

export type HomeSectionId = "about" | "gallery" | "pricelist" | "contact" | "legal";

export type HomeSection = {
  id: HomeSectionId;
  title: string;       // nagłówek sekcji
  subtitle?: string;   // podtytuł (mniejszy, jasniejszy)
  enabled: boolean;    // łatwe włącz/wyłacz sekcji na głównej
}

export type AboutContent = {
  heroTitle: string;  // duży nagłówek
  heroText: string;   // opis (krótki lead)
  portrait?: string;  // ścieżka do portretu w /public
  bullets?: string[]; // wypunktowania (opcjonalnie)
};

export type GalleryItem = {
  id: string;           // unikalne ID
  title: string;        // tytuł pracy
  description?: string; // opis pracy
  image: string;        // ścieżka do obrazu w /public
  tags?: string[];      // tagi/techniki
  year?: number;        // rok pracy
};

export type PriceItem = {
  name: string;         // nazwa usługi (np. "Portret bust")
  description?: string; // krótki opis warunków/zakresu
  price: number;        // cena bazowa
  currency?: string;    // domyślnie "PLN"
  unit?: string;        // np. "/szt." "/strona" "/h"
};

export type PriceList = {
  note?: string; // dodatkowe informacje (np. czas realizacji, licencje)
  items: PriceItem[];
};

export type PriceTierData = {
  id: string;
  title: string;
  subtitle?: string;
  prices: string[];
  images: {
    id: string;
    image: string;
    alt: string;
  }[];
};

export type ContactContent = {
  title: string;
  intro?: string; // krótkie zaproszenie do kontaktu
  contacts?: ContactItem[]; // lista kontaktów z linkami
  company?: {
    name: string;
    address: string;
    nip: string;
    regon: string;
  };
  note?: string;  // dodatkowa informacja (np. terminy)
};

export type ContactItem = {
  platform: string; // np. "Telegram", "Email", "Bsky"
  username: string;  // np. "@jarvvitch", "jarvvitch@gmail.com"
  url: string;       // pełny URL
  icon?: string;     // opcjonalna ikona
};

export type LegalContent = {
  title?: string;     // tytuł dokumentu
  updatedAt?: string; // ISO data ostatniej aktualizacji
  html?: string;      // jeśli chcesz wkleić gotowy HTML
  text?: string;      // albo zwykły tekst (renderowany z podziałem na paragrafy)
};

export type SimplePage = {
  slug: string;     // adres /pages/[slug]
  title: string;    // tytuł strony
  content: string;  // prosta treść (markdown-lite albo zwykły tekst)
};
