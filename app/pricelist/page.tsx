import type { Metadata } from "next";
import { PriceTier } from "@/components/pricing/PriceTier";
import { Section } from "@/components/site/Section";
import { PRICE_TIERS } from "@/content/PriceList";
import { SITE, HEADER_IMAGE } from "@/content/Site";

export const metadata: Metadata = {
  title: `${SITE.seo.title} – Pricelist`,
  description: "Commission pricing and options.",
  openGraph: {
    title: `${SITE.seo.title} – Pricelist`,
    description: "Commission pricing and options.",
    images: [{ url: HEADER_IMAGE.src }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.seo.title} – Pricelist`,
    description: "Commission pricing and options.",
    images: [HEADER_IMAGE.src],
  },
};

export default function PriceListPage() {
  // Create allImages array for modal carousel - use PRICE_TIERS data
  const allImages = PRICE_TIERS.flatMap((tier) =>
    tier.images.map((img) => ({
      image: img.image,
      alt: img.alt || img.id,
      caption: img.alt || img.id
    }))
  );

  // Create a mapping of pricelist images to their global indices
  let globalIndex = 0;
  const createImageMapping = (tierImages: typeof PRICE_TIERS[0]['images']) => {
    const mapping = tierImages.map(() => globalIndex++);
    return mapping;
  };

  return (
    <Section id="pricelist" title="Pricelist">
      <div className="space-y-16">
        {PRICE_TIERS.map((tier, tierIndex) => {
          const imageMapping = createImageMapping(tier.images);
          return (
            <PriceTier
              key={tierIndex}
              title={tier.title}
              subtitle={tier.subtitle}
              prices={tier.prices}
              images={tier.images}
              hexWidth={220}
              enableModal={true}
              allImages={allImages}
              imageMapping={imageMapping}
            />
          );
        })}
      </div>
    </Section>
  );
}
