"use client";
// -------------------------------------------------------------
// Lewe "plaster" dla cennika: pattern 2/1/2/... (max 2 w rzędzie, potem 1)
// Heksy POINTY-TOP, pozycjonowane absolutnie z przerwami gapX/gapY.
// -------------------------------------------------------------
import React, { useEffect, useRef, useState } from "react";
import { HexTile } from "@/components/hex/HexTile";

export type PriceHexItem = {
  id?: string | number;
  image: string;
  alt?: string;
  caption?: string;
  href?: string;
};

export type PriceHexClusterProps = {
  items: PriceHexItem[]; // obrazy do pokazania (np. 3–5 szt.)
  hexWidth?: number;     // szerokość heksa (px)
  gapX?: number;         // dodatkowa przerwa pozioma (px)
  gapY?: number;         // dodatkowa przerwa pionowa (px)
  rowStepFactor?: number;// "zgryz" pionowy: Sy = factor * H (0.75 ≈ styka boki)
  captionBottomPct?: number; // jak wyżej unieść podpis (część H, domyślnie 0.06)
  className?: string;
  enableModal?: boolean; // enable closeup modal for tiles
  allImages?: Array<{ image: string; alt?: string; caption?: string }>; // all images for modal carousel
  imageMapping?: number[]; // mapping from local image index to global gallery index

  /** Gdy rząd ma pojemność 2, ale jest tylko 1 obraz – gdzie go położyć? */
  singleModeCap2?: "left" | "right" | "center";
};

export function PriceHexCluster({
  items,
  hexWidth = 220,
  gapX = 10,
  gapY = 10,
  rowStepFactor = 0.75,
  captionBottomPct = 0.06,
  className,
  enableModal = false,
  allImages,
  imageMapping,
  singleModeCap2 = "left", // domyślnie LEWY slot (jak w referencji)
}: PriceHexClusterProps) {
  // Responsive container width
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [wrapW, setWrapW] = useState<number>(0);
  const [viewportW, setViewportW] = useState<number>(0);

  useEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) {
        setWrapW(Math.floor(e.contentRect.width));
      }
    });
    ro.observe(el);
    setWrapW(Math.floor(el.getBoundingClientRect().width));
    return () => ro.disconnect();
  }, []);

  // Track viewport for breakpoints similar to HexGrid
  useEffect(() => {
    const update = () => setViewportW(window.innerWidth || 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Geometria POINTY-TOP z responsywnym W
  // Dla waskich ekranow zmniejszamy W proporcjonalnie do szerokosci kontenera
  const responsiveW = (() => {
    // Desktop ≥1024: nie zmniejszaj, trzymaj dokładnie hexWidth
    if (viewportW >= 1024) return hexWidth;
    // Tablet 768–1023: zmniejsz nieco heksy, by nie dominowały obok tekstu
    if (viewportW >= 768) {
      const estimated = Math.floor(wrapW / 2.6);
      const tabletCap = Math.min(hexWidth, 180); // górny limit dla tabletu
      return Math.max(128, Math.min(estimated, tabletCap));
    }
    // Mobile: skaluj w dół w zależności od dostępnej szerokości
    if (wrapW <= 0) return Math.min(hexWidth, 160);
    const estimated = Math.floor(wrapW / 2.4);
    return Math.max(112, Math.min(estimated, hexWidth));
  })();

  const W = responsiveW;
  const H = (2 / Math.sqrt(3)) * W;      // ≈ 1.1547 * W
  const Sx = W + gapX;                    // poziomy krok slotów
  const Sy = rowStepFactor * H + gapY;    // pionowy "zgryz" + luz

  // 1) Budujemy rzędy w patternie 2/1/2/... (greedy)
  type Row = { cap: 2 | 1; items: PriceHexItem[] };
  const rows: Row[] = [];
  {
    let i = 0, r = 0;
    while (i < items.length) {
      const cap: 2 | 1 = (r % 2 === 0 ? 2 : 1); // rząd 0: max 2, rząd 1: max 1, itd.
      const take = Math.min(cap, items.length - i);
      rows.push({ cap, items: items.slice(i, i + take) });
      i += take; r += 1;
    }
  }

  // 2) Offset X między rzędami wg POJEMNOŚCI (2 ↔ 1)
  const rowOffsetX: number[] = [];
  for (let r = 0; r < rows.length; r++) {
    if (r === 0) { rowOffsetX[r] = 0; continue; }
    const prevCap = rows[r - 1].cap;
    const currCap = rows[r].cap;
    let delta = 0;
    if (prevCap === 2 && currCap === 1) delta = +Sx / 2; // 1 wpada między 2
    else if (prevCap === 1 && currCap === 2) delta = -Sx / 2; // powrót na sloty 2
    rowOffsetX[r] = rowOffsetX[r - 1] + delta;
  }

  // 3) Sloty w wierszu – z obsługą singleModeCap2
  const placed = rows.flatMap((row, r) => {
    const baseX = rowOffsetX[r];
    const y = r * Sy;

    let slots: number[] = [];
    if (row.cap === 2) {
      if (row.items.length === 2) {
        slots = [0, 1]; // dwa – na skrajach
      } else {
        // jeden – wybór miejsca:
        if (singleModeCap2 === "left") slots = [0];
        else if (singleModeCap2 === "right") slots = [1];
        else slots = [0.5]; // center
      }
    } else {
      // cap === 1
      slots = [0];
    }

    return row.items.map((it, i) => ({
      ...it,
      x: baseX + slots[i] * Sx,
      y,
      z: rows.length - r,
    }));
  });

  // 4) Bounding box + centrowanie
  const minX = Math.min(0, ...placed.map(p => p.x));
  const maxX = Math.max(W, ...placed.map(p => p.x + W));
  const totalW = Math.ceil(maxX - minX);
  const totalH = Math.ceil((rows.length - 1) * Sy + H);
  const shiftX = -minX;
  const captionBottom = Math.round(H * captionBottomPct);

  return (
    <div className={className}>
      <div
        ref={wrapRef}
        className="relative mx-auto"
        style={{
          width: Math.min(
            totalW,
            viewportW >= 1024 ? 600 : viewportW >= 768 ? 480 : 560
          ),
          height: totalH,
        }}
      >
        {placed.map((it, idx) => {
          // Use imageMapping to get the correct global index, fallback to local index
          const globalIndex = imageMapping?.[idx] ?? idx;
          return (
            <HexTile
              key={it.id ?? idx}
              image={it.image}
              alt={it.alt}
              caption={it.caption}
              width={W}
              height={H}
              captionBottom={captionBottom}
              enableModal={enableModal}
              allImages={allImages}
              imageIndex={globalIndex}
              style={{ position: "absolute", left: it.x + shiftX, top: it.y, zIndex: it.z }}
            />
          );
        })}
      </div>
    </div>
  );
}
