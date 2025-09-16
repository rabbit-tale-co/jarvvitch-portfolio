import type { Metadata } from "next";
import { HexGrid } from "@/components/hex/HexGrid";
import { Section } from "@/components/site/Section";
import { Shell } from "@/components/site/Shell";
import { GALLERY } from "@/content/Gallery";
import { SITE, HEADER_IMAGE } from "@/content/Site";

export const metadata: Metadata = {
  title: `${SITE.seo.title} – Gallery`,
  description: "Selected works and commissions.",
  openGraph: {
    title: `${SITE.seo.title} – Gallery`,
    description: "Selected works and commissions.",
    images: [{ url: HEADER_IMAGE.src }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.seo.title} – Gallery`,
    description: "Selected works and commissions.",
    images: [HEADER_IMAGE.src],
  },
};

function FancyHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-4xl font-medium tracking-[0.18em] font-witchcraft uppercase">{children}</h2>
      <div className="mx-auto mt-3 w-[92%] max-w-3xl">
        <div className="h-[2px] w-full bg-foreground/50" />
        <div className="mt-2 h-[2px] w-full bg-foreground/30" />
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const personal = GALLERY.filter((g) => !g.tags?.includes("commission"));
  const commissions = GALLERY.filter((g) => g.tags?.includes("commission"));

  const mapToTiles = (arr: typeof GALLERY) =>
    arr.map((g) => ({
      id: g.id,
      image: g.image,
      alt: g.title,
      caption: g.title
    }));

  const allImages = GALLERY.map((g) => ({
    image: g.image,
    alt: g.title,
    caption: g.title
  }));

  return (
    <Shell className="bg-secondary py-16 gap-16 flex flex-col">
      <section>
        <FancyHeader>Personal Illustrations</FancyHeader>
        <HexGrid
          items={mapToTiles(personal)}
          enableModal={true}
          allImages={allImages}
        />
      </section>

      <section>
        <FancyHeader>Commissions</FancyHeader>
        <HexGrid
          items={mapToTiles(commissions)}
          enableModal={true}
          allImages={allImages}
        />
      </section>
    </Shell>
  );
}
