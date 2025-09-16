import type { GalleryItem } from "@/lib/types";
import commission_1 from "@/public/gallery - commissions/IMG_1334.webp";
import commission_2 from "@/public/gallery - commissions/IMG_1378.webp";
import commission_3 from "@/public/gallery - commissions/IMG_1400.webp";
import commission_4 from "@/public/gallery - commissions/IMG_1419.webp";
import commission_5 from "@/public/gallery - commissions/IMG_1439.webp";
import commission_6 from "@/public/gallery - commissions/IMG_2020.webp";
import commission_7 from "@/public/gallery - commissions/IMG_2095.webp";
import commission_8 from "@/public/gallery - commissions/IMG_2286.webp";
import commission_9 from "@/public/gallery - commissions/IMG_5509.webp";
import commission_10 from "@/public/gallery - commissions/IMG_6012.webp";

import personal_1 from "@/public/Gallery - personal illustrations/IMG_0621.webp";
import personal_2 from "@/public/Gallery - personal illustrations/IMG_0779.webp";
import personal_3 from "@/public/Gallery - personal illustrations/IMG_0785.webp";
import personal_4 from "@/public/Gallery - personal illustrations/IMG_0800.webp";
import personal_5 from "@/public/Gallery - personal illustrations/IMG_1273.webp";
import personal_6 from "@/public/Gallery - personal illustrations/IMG_2098.webp";
import personal_7 from "@/public/Gallery - personal illustrations/IMG_3868.webp";
import personal_8 from "@/public/Gallery - personal illustrations/IMG_4006.webp";
import personal_9 from "@/public/Gallery - personal illustrations/IMG_4086.webp";
import personal_10 from "@/public/Gallery - personal illustrations/IMG_6047.webp";
import personal_11 from "@/public/Gallery - personal illustrations/Untitled_Artwork 46.webp";

const GALLERY_ITEMS = [
  {
    title: "Sunset Rider",
    description: "Opis",
    image: personal_1.src,
    tags: ["character", "warm"],
    year: 2024,
  },
  {
    title: "Forest Spirit",
    description: "Opis",
    image: personal_2.src,
    tags: ["creature", "concept"],
    year: 2025,
  },
  {
    title: "Forest Spirit 2",
    description: "Opis",
    image: personal_3.src,
    tags: ["creature", "concept"],
    year: 2025,
  },
  {
    title: "Forest Spirit 3",
    description: "Opis",
    image: personal_4.src,
    tags: ["creature", "concept"],
    year: 2025,
  },
  {
    title: "Forest Spirit 4",
    description: "Opis",
    image: personal_5.src,
    tags: ["creature", "concept"],
    year: 2025,
  },
  {
    title: "Forest Spirit 5",
    description: "Opis",
    image: personal_6.src,
    tags: ["creature", "concept"],
    year: 2025,
  },
  {
    title: "Forest Spirit 6",
    description: "Opis",
    image: personal_7.src,
    tags: ["creature", "concept"],
    year: 2025,
  },
  {
    title: "Forest Spirit 7",
    description: "Opis",
    image: personal_8.src,
    tags: ["creature", "concept"],
    year: 2025,
  },
  {
    title: "Forest Spirit 8",
    description: "Opis",
    image: personal_9.src,
    tags: ["creature", "concept"],
    year: 2025,
  },
  {
    title: "Forest Spirit 9",
    description: "Opis",
    image: personal_10.src,
    tags: ["creature", "concept"],
    year: 2025,
  },
  {
    title: "Forest Spirit 10",
    description: "Opis",
    image: personal_11.src,
    tags: ["creature", "concept"],
    year: 2025,
  },
  {
    title: "Forest Spirit 11",
    description: "Opis",
    image: commission_1.src,
    tags: ["creature", "concept", "commission"],
    year: 2025,
  },
  {
    title: "Forest Spirit 12",
    description: "Opis",
    image: commission_2.src,
    tags: ["creature", "concept", "commission"],
    year: 2025,
  },
  {
    title: "Forest Spirit 13",
    description: "Opis",
    image: commission_3.src,
    tags: ["creature", "concept", "commission"],
    year: 2025,
  },
  {
    title: "Forest Spirit 14",
    description: "Opis",
    image: commission_4.src,
    tags: ["creature", "concept", "commission"],
    year: 2025,
  },
  {
    title: "Forest Spirit 15",
    description: "Opis",
    image: commission_5.src,
    tags: ["creature", "concept", "commission"],
    year: 2025,
  },
  {
    title: "Forest Spirit 14",
    description: "Opis",
    image: commission_6.src,
    tags: ["creature", "concept", "commission"],
    year: 2025,
  },
  {
    title: "Forest Spirit 15",
    description: "Opis",
    image: commission_7.src,
    tags: ["creature", "concept", "commission"],
    year: 2025,
  },
  {
    title: "Forest Spirit 16",
    description: "Opis",
      image: commission_8.src,
    tags: ["creature", "concept", "commission"],
    year: 2025,
  },
  {
    title: "Forest Spirit 17",
    description: "Opis",
    image: commission_9.src,
    tags: ["creature", "concept", "commission"],
    year: 2025,
  },
  {
    title: "Forest Spirit 18",
    description: "Opis",
    image: commission_10.src,
    tags: ["creature", "concept", "commission"],
    year: 2025,
  },
];

// Auto-generate stable, unique ids from titles (with de-duplication)
function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const GALLERY: GalleryItem[] = (() => {
  const seen = new Map<string, number>();

  return GALLERY_ITEMS.map((item: any) => {
    const base = slugifyTitle(item.title ?? "item");
    const count = (seen.get(base) ?? 0) + 1;
    seen.set(base, count);
    const id = count > 1 ? `${base}-${count - 1}` : base;

    // Ignore any pre-defined id on items; always use generated id
    const { id: _ignored, ...rest } = item;
    return { id, ...rest } as GalleryItem;
  });
})();
