"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageModal } from "@/components/ui/ImageModal";

type Cx = string | false | null | undefined;
const cx = (...a: Cx[]) => a.filter(Boolean).join(" ");

export type HexTileProps = {
  image: string;
  alt?: string;
  href?: string;
  caption?: string;
  width?: number;                 // px – z grida
  height?: number;                // px – z grida
  style?: React.CSSProperties;    // left/top/zIndex od grida
  captionBottom?: number;         // px – bezpieczny odstęp od krawędzi
  className?: string;
  enableModal?: boolean;          // enable closeup modal
  allImages?: Array<{ image: string; alt?: string; caption?: string }>; // all images for modal carousel
  imageIndex?: number;            // current image index in allImages
};

export function HexTile({
  image,
  alt = "",
  href,
  caption,
  width = 200,
  // POINTY-TOP: H ≈ 2/√3 * W
  height = Math.round((2 / Math.sqrt(3)) * 200),
  style,
  className,
  enableModal = false,
  allImages,
  imageIndex = 0,
}: HexTileProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (enableModal && !href) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const Figure = (
    <figure
      style={{
        width,
        height,
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        ...style,
      }}
      className={cx(
        "m-0 block relative overflow-hidden select-none rounded-none",
        "bg-muted transition-transform hover:scale-[1.01]",
        enableModal && !href && "cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover"
      />
      {/* {caption ? (
        <figcaption
          title={caption}
          className={cx(
            "absolute left-0 right-0 bottom-0",
            "bg-black/55 text-white text-xs text-center py-1",
            "whitespace-nowrap overflow-hidden text-ellipsis",
            "pointer-events-none"
          )}
        >
          {caption}
        </figcaption>
      ) : null} */}
    </figure>
  );

  return (
    <>
      {href ? <Link href={href}>{Figure}</Link> : Figure}
      {enableModal && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          images={allImages || [{ image, alt, caption }]}
          initialIndex={(() => {
            const imgs = allImages || [{ image, alt, caption }]
            // Prefer locating current tile's image within provided images
            const found = imgs.findIndex((it) => it.image === image)
            if (found >= 0) return found
            // Fallback to provided imageIndex (clamped)
            return Math.max(0, Math.min(imgs.length - 1, imageIndex))
          })()}
        />
      )}
    </>
  );
}
