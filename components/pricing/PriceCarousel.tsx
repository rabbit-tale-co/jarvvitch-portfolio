"use client";

import { useMemo } from "react";
import { PriceTier, type PriceTierProps } from "./PriceTier";
import { Carousel } from "@/components/ui/carousel";

export type PriceCarouselProps = {
  tiers: PriceTierProps[];
  itemsPerView?: number;
  showArrows?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
};

export function PriceCarousel({
  tiers,
  itemsPerView = 1,
  showArrows = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  className,
}: PriceCarouselProps) {
  if (tiers.length === 0) return null;

  // If we have fewer tiers than itemsPerView, just show them normally
  if (tiers.length <= itemsPerView) {
    return (
      <div className={className}>
        {tiers.map((tier, index) => (
          <PriceTier key={tier.title || index} {...tier} />
        ))}
      </div>
    );
  }

  return (
    <Carousel
      itemsPerView={itemsPerView}
      showArrows={showArrows}
      autoPlay={autoPlay}
      autoPlayInterval={autoPlayInterval}
      className={className}
    >
      {tiers.map((tier, index) => (
        <PriceTier key={tier.title || index} {...tier} />
      ))}
    </Carousel>
  );
}
