"use client";

import { useState, useMemo } from "react";
import { HexGrid, type HexGridItem, type HexGridProps } from "./HexGrid";
import { Carousel } from "@/components/ui/carousel";

export type HexCarouselProps = Omit<HexGridProps, "items"> & {
  items: HexGridItem[];
  itemsPerView?: number;
  showArrows?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  allImages?: Array<{ image: string; alt?: string; caption?: string }>; // all images for modal carousel
};

export function HexCarousel({
  items,
  itemsPerView = 1,
  showArrows = true,
  autoPlay = false,
  autoPlayInterval = 4000,
  className,
  allImages,
  ...hexGridProps
}: HexCarouselProps) {
  // Split items into chunks for carousel
  const itemChunks = useMemo(() => {
    const chunks: HexGridItem[][] = [];
    for (let i = 0; i < items.length; i += itemsPerView) {
      chunks.push(items.slice(i, i + itemsPerView));
    }
    return chunks;
  }, [items, itemsPerView]);

  if (items.length === 0) return null;

  // If we have fewer items than itemsPerView, just show the regular grid
  if (items.length <= itemsPerView) {
    return <HexGrid items={items} allImages={allImages} {...hexGridProps} className={className} />;
  }

  return (
    <Carousel
      itemsPerView={1}
      showArrows={showArrows}
      autoPlay={autoPlay}
      autoPlayInterval={autoPlayInterval}
      className={className}
    >
      {itemChunks.map((chunk, index) => (
        <HexGrid
          key={index}
          items={chunk}
          allImages={allImages}
          {...hexGridProps}
        />
      ))}
    </Carousel>
  );
}
