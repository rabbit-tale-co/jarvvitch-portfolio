'use client'

import React, { useEffect, useRef, useState } from "react";
import { HexTile } from "./HexTile";

export type HexGridItem = {
  id?: string | number;
  image: string;
  alt?: string;
  caption?: string;
  href?: string;
};

export type HexGridProps = {
  items: HexGridItem[];
  hexWidth?: number;          // W (px)
  rowStepFactor?: number;     // Sy = factor * H (0.75 styka boki)
  gapX?: number;              // luz poziomy
  gapY?: number;              // luz pionowy
  captionBottomPct?: number;  // odsunięcie podpisu (część H)
  className?: string;
  enableModal?: boolean;      // enable closeup modal for tiles
  allImages?: Array<{ image: string; alt?: string; caption?: string }>; // all images for modal carousel

  /** Jak układać PARĘ w rzędzie o pojemności 3 (cap=3, take=2) */
  pairModeCap3?: "center" | "edges"; // "edges" ustawia sloty [0, 2], "center" -> [0.5, 1.5]
  /** Gdzie postawić singla w rzędzie o pojemności 2 (cap=2, take=1) */
  singleModeCap2?: "center" | "left" | "right"; // "center" -> [0.5], "left" -> [0], "right" -> [1]
};

export function HexGrid({
  items,
  hexWidth = 200,
  rowStepFactor = 0.75,
  gapX = 3,
  gapY = 3,
  captionBottomPct = 0.06,
  className,
  enableModal = false,
  allImages,
  pairModeCap3 = "edges",
  singleModeCap2 = "left",
}: HexGridProps) {
  // Responsive container width
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [wrapW, setWrapW] = useState<number>(0);
  const [viewportW, setViewportW] = useState<number>(0);

  useEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) setWrapW(Math.floor(e.contentRect.width));
    });
    ro.observe(el);
    setWrapW(Math.floor(el.getBoundingClientRect().width));
    return () => ro.disconnect();
  }, []);

  // Track viewport width to decide breakpoints independent of grid intrinsic width
  useEffect(() => {
    const update = () => setViewportW(window.innerWidth || 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const responsiveW = (() => {
    // On desktop/tablet, keep provided hexWidth exactly (no downscale)
    if (viewportW >= 768) return hexWidth;
    // Mobile: scale to available container width
    if (wrapW <= 0) return Math.min(hexWidth, 140);
    const estimated = Math.floor(wrapW / 3.2);
    return Math.max(110, Math.min(estimated, hexWidth));
  })();

  const W = responsiveW;
  const H = (2 / Math.sqrt(3)) * W;     // ≈ 1.1547 * W
  const Sx = W + gapX;                  // slot
  const Sy = rowStepFactor * H + gapY;  // zgryz + luz

  if (!items.length) return null;

  type Row = { cap: 3 | 2; items: HexGridItem[] };
  const rows: Row[] = [];
  {
    let i = 0, r = 0;
    while (i < items.length) {
      const cap: 3 | 2 = (r % 2 === 0 ? 3 : 2);
      const take = Math.min(cap, items.length - i);
      rows.push({ cap, items: items.slice(i, i + take) });
      i += take; r += 1;
    }
  }

  // 2) Offset X między rzędami wg POJEMNOŚCI
  const rowOffsetX: number[] = [];
  for (let r = 0; r < rows.length; r++) {
    if (r === 0) { rowOffsetX[r] = 0; continue; }
    const prevCap = rows[r - 1].cap;
    const currCap = rows[r].cap;
    let delta = 0;
    if (prevCap === 3 && currCap === 2) delta = +Sx / 2;
    else if (prevCap === 2 && currCap === 3) delta = -Sx / 2;
    rowOffsetX[r] = rowOffsetX[r - 1] + delta;
  }

  // 3) Sloty w wierszu – z przełącznikiem dla cap=3, take=2
  const placed = rows.flatMap((row, r) => {
    const { cap, items: rowItems } = row;
    const baseX = rowOffsetX[r];
    const y = r * Sy;

    let slots: number[] = [];
    if (cap === 3) {
      if (rowItems.length === 3) slots = [0, 1, 2];
      else if (rowItems.length === 2)
        slots = pairModeCap3 === "center" ? [0.5, 1.5] : [0, 2]; // ⬅️ tu magia
      else slots = [1]; // 1 w środku
    } else {
      // cap === 2
      if (rowItems.length === 2) {
        slots = [0, 1];
      } else {
        // ⬅️ tu decydujemy gdzie ma być singiel w rzędzie 2-slotowym
        if (singleModeCap2 === "left") slots = [0];
        else if (singleModeCap2 === "right") slots = [1];
        else slots = [0.5]; // "center"
      }
    }

    return rowItems.map((it, i) => ({
      ...it,
      x: baseX + slots[i] * Sx,
      y,
      z: rows.length - r, // górne rzędy nad dolnymi
    }));
  });

  // 4) Bounding box i centrowanie
  const minX = Math.min(0, ...placed.map((p) => p.x));
  const maxX = Math.max(W, ...placed.map((p) => p.x + W));
  const totalW = Math.ceil(maxX - minX);
  const totalH = Math.ceil((rows.length - 1) * Sy + H);
  const shiftX = -minX;
  const captionBottom = Math.round(H * captionBottomPct);

  return (
    <div className={className}>
      <div ref={wrapRef} className="relative mx-auto" style={{ width: totalW, height: totalH }}>
        {placed.map((it, idx) => (
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
            imageIndex={idx}
            style={{ position: "absolute", left: it.x + shiftX, top: it.y, zIndex: it.z }}
          />
        ))}
      </div>
    </div>
  );
}
