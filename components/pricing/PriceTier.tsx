// -------------------------------------------------------------
// Jeden "blok" cennika (jak na referencji):
//  • z lewej kolumna z heksami (pattern 2/1/2/...)
//  • z prawej tekst: tytuł, podtytuł, lista cen
// -------------------------------------------------------------
import React from "react";
import { PriceHexCluster, type PriceHexItem } from "./PriceHexCluster";

export type PriceTierProps = {
  title: string;               // np. "Sketch"
  subtitle?: string;           // np. "with an option to add flat colours..."
  prices: string[];            // linie cen (renderowane jako <li>)
  images: PriceHexItem[];      // obrazy do heksów (np. 3–5)
  hexWidth?: number;
  enableModal?: boolean;       // enable closeup modal for hex tiles
  allImages?: Array<{ image: string; alt?: string; caption?: string }>; // all images for modal carousel
  imageMapping?: number[];     // mapping from local image index to global gallery index
};

export function PriceTier({
  title,
  subtitle,
  prices,
  images,
  hexWidth = 220,
  enableModal = false,
  allImages,
  imageMapping,
}: PriceTierProps) {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12">
      {/* dwu-kolumnowy layout na md+; na mobile: stack */}
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between px-3 sm:px-4">
        {/* LEWA – hexy */}
        <div className="flex justify-center md:justify-end md:shrink-0 md:basis-[360px] lg:basis-[560px]">
          <PriceHexCluster
            items={images}
            hexWidth={Math.max(140, Math.min(hexWidth, 260))}
            gapX={3}
            gapY={3}
            rowStepFactor={0.75}
            enableModal={enableModal}
            allImages={allImages}
            imageMapping={imageMapping}
          />
        </div>

        {/* PRAWA – tekst */}
        <div className="md:flex-1">
          <h3 className="text-2xl sm:text-3xl md:text-4xl tracking-[0.08em] md:tracking-[0.12em] font-witchcraft uppercase">{title}</h3>

          {subtitle ? (
            <>
              <p className="mt-2 text-lg sm:text-xl md:text-2xl opacity-80 font-witchcraft uppercase">{subtitle}</p>
              {/* podwójna linia jak w refce */}
              <div className="mt-3 w-40 sm:w-56 md:w-64 max-w-full">
                <div className="h-[2px] w-full bg-foreground/60" />
                <div className="mt-[6px] h-[2px] w-full bg-foreground/40" />
              </div>
            </>
          ) : null}

          <ul className="mt-4 sm:mt-5 md:mt-6 space-y-2 text-sm sm:text-base leading-7">
            {prices.map((line, i) => (
              <li key={i} className="list-none">{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
