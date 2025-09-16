/**
 * @file content/Site.ts
 * @description Globalna konfiguracja witryny — to są pola, które zmieniasz najczęściej.
 */
import type { SiteConfig } from "@/lib/types";
import headerImage from "@/public/Header.avif";

export const SITE: SiteConfig = {
  brand: {
    name: "Imię Nazwisko",
    tagline: "Slogan",
    // logo: "/logo.svg",
  },
  contact: {
    email: "contact@artist-portfolio.com",
    phone: "+48 600 000 000",
    location: "Katowice, PL",
  },
  social: [
    { label: "ArtStation", url: "https://www.artstation.com/yourname" },
    { label: "Instagram", url: "https://instagram.com/yourname" },
    { label: "Bsky", url: "https://bsky.app/profile/yourname" },
  ],
  seo: {
    title: "Jarvvitch",
    description: "Nie wiem, jakiś fajny opis",
    keywords: [
      "jarvvitch",
      "artist",
      "illustration",
      "commission",
      "portfolio",
      "digital art",
    ],
  },
};

export const HEADER_IMAGE = headerImage;
