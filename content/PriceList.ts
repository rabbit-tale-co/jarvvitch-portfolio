import type { PriceList, PriceTierData } from "@/lib/types";

// Pricelist - sketch
import sketch_1 from "@/public/pricelist - sketch/IMG_1174.webp";
import sketch_2 from "@/public/pricelist - sketch/IMG_1243.webp";
import sketch_3 from "@/public/pricelist - sketch/IMG_1402.webp";
import sketch_4 from "@/public/pricelist - sketch/IMG_2155.webp";
import sketch_5 from "@/public/pricelist - sketch/IMG_2170.webp";

// Pricelist - rough painting
import rough_1 from "@/public/pricelist - rough painting/IMG_0484.webp";
import rough_2 from "@/public/pricelist - rough painting/IMG_0860.webp";
import rough_3 from "@/public/pricelist - rough painting/IMG_1618.webp";
import rough_4 from "@/public/pricelist - rough painting/IMG_1673.webp";
import rough_5 from "@/public/pricelist - rough painting/IMG_2014.webp";

// Pricelist - grayscale
import grayscale_1 from "@/public/pricelist - grayscale illustration/IMG_1205.webp";
import grayscale_2 from "@/public/pricelist - grayscale illustration/IMG_1378.webp";
import grayscale_3 from "@/public/pricelist - grayscale illustration/IMG_1439.webp";
import grayscale_4 from "@/public/pricelist - grayscale illustration/January_2024_Howlitzer.webp";
import grayscale_5 from "@/public/pricelist - grayscale illustration/Untitled_Artwork 46.webp";

// Pricelist - colour
import colour_1 from "@/public/pricelist coloured illustration/IMG_1334.webp";
import colour_2 from "@/public/pricelist coloured illustration/IMG_1419.webp";
import colour_3 from "@/public/pricelist coloured illustration/IMG_1428.webp";
import colour_4 from "@/public/pricelist coloured illustration/IMG_2095-1.webp";
import colour_5 from "@/public/pricelist coloured illustration/IMG_6012.webp";

// Pricelist - custom character
import custom_1 from "@/public/pricelist - custom character/IMG_0011.webp";
import custom_2 from "@/public/pricelist - custom character/IMG_0181.webp";
import custom_3 from "@/public/pricelist - custom character/IMG_0809.webp";
import custom_4 from "@/public/pricelist - custom character/IMG_1616.webp";
import custom_5 from "@/public/pricelist - custom character/IMG_1766.webp";
import custom_6 from "@/public/pricelist - custom character/IMG_2003.webp";

const RAW_PRICE_TIERS = [
  {
    id: "sketch",
    title: "Sketch",
    subtitle: "with an option to add flat colours for an extra price",
    prices: [
      "portrait: 30€",
      "waist-up: 50€",
      "fullbody: 80€",
      "sketch page (base – 2x fullbody and a waist-up sketch): starts at 210€",
    ],
    images: [
      { image: sketch_1.src, alt: "Sketch example 1" },
      { image: sketch_2.src, alt: "Sketch example 2" },
      { image: sketch_3.src, alt: "Sketch example 3" },
      { image: sketch_4.src, alt: "Sketch example 4" },
      { image: sketch_5.src, alt: "Sketch example 5" },
    ],
  },
  {
    id: "rough-painting",
    title: "Rough painting",
    subtitle: "quick color study with loose brushwork",
    prices: [
      "portrait: 50€",
      "waist-up: 80€",
      "fullbody: 120€",
      "additional characters: +50%",
    ],
    images: [
      { image: rough_1.src, alt: "Rough painting example 1" },
      { image: rough_2.src, alt: "Rough painting example 2" },
      { image: rough_3.src, alt: "Rough painting example 3" },
      { image: rough_4.src, alt: "Rough painting example 4" },
      { image: rough_5.src, alt: "Rough painting example 5" },
    ],
  },
  {
    id: "grayscale",
    title: "Grayscale",
    subtitle: "detailed monochrome illustration",
    prices: [
      "portrait: 80€",
      "waist-up: 120€",
      "fullbody: 180€",
      "complex backgrounds: +100€",
    ],
    images: [
      { image: grayscale_1.src, alt: "Grayscale example 1" },
      { image: grayscale_2.src, alt: "Grayscale example 2" },
      { image: grayscale_3.src, alt: "Grayscale example 3" },
      { image: grayscale_4.src, alt: "Grayscale example 4" },
      { image: grayscale_5.src, alt: "Grayscale example 5" },
    ],
  },
  {
    id: "colour",
    title: "Colour",
    subtitle: "full color illustration with detailed rendering",
    prices: [
      "portrait: 120€",
      "waist-up: 180€",
      "fullbody: 250€",
      "detailed backgrounds: +150€",
      "rush order (1 week): +50%",
    ],
    images: [
      { image: colour_1.src, alt: "Colour example 1" },
      { image: colour_2.src, alt: "Colour example 2" },
      { image: colour_3.src, alt: "Colour example 3" },
      { image: colour_4.src, alt: "Colour example 4" },
      { image: colour_5.src, alt: "Colour example 5" },
    ],
  },
  {
    id: "custom-character",
    title: "Custom character",
    subtitle: "original character design and illustration",
    prices: [
      "character sheet (3 views): 200€",
      "additional poses: 80€ each",
      "turnaround: 150€",
      "expression sheet: 100€",
    ],
    images: [
      { image: custom_1.src, alt: "Custom character example 1" },
      { image: custom_2.src, alt: "Custom character example 2" },
      { image: custom_3.src, alt: "Custom character example 3" },
      { image: custom_4.src, alt: "Custom character example 4" },
      { image: custom_5.src, alt: "Custom character example 5" },
      { image: custom_6.src, alt: "Custom character example 6" },
    ],
  },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const PRICE_TIERS: PriceTierData[] = (() => {
  const seenTier = new Map<string, number>();

  return RAW_PRICE_TIERS.map((tier: any) => {
    const base = slugify(tier.title ?? tier.id ?? "tier");
    const count = (seenTier.get(base) ?? 0) + 1;
    seenTier.set(base, count);
    const tierId = count > 1 ? `${base}-${count - 1}` : base;

    // Generate image ids per tier for stability
    const seenImg = new Map<string, number>();
    const images = (tier.images ?? []).map((img: any, idx: number) => {
      const imgBase = slugify(img.alt ?? `image-${idx + 1}`) || `image-${idx + 1}`;
      const imgCount = (seenImg.get(imgBase) ?? 0) + 1;
      seenImg.set(imgBase, imgCount);
      const imageId = imgCount > 1 ? `${imgBase}-${imgCount - 1}` : imgBase;
      const { id: _ignored, ...rest } = img;
      return { id: `${tierId}-${imageId}`, ...rest };
    });

    const { id: _ignoredTier, images: _imgs, ...restTier } = tier;
    return { id: tierId, images, ...restTier } as PriceTierData;
  });
})();
