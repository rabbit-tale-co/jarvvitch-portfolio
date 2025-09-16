"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type ImageModalItem = {
  image: string;
  alt?: string;
  caption?: string;
};

export type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: ImageModalItem[];
  initialIndex?: number;
};

export function ImageModal({ isOpen, onClose, images, initialIndex = 0 }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentImage = images[currentIndex];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, images.length]);

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= images.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Dark backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Modal content */}
      <div
        className="relative z-10 max-w-7xl max-h-[90vh] w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-20 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/70 hover:bg-black/90 text-white rounded-full transition-colors shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={goToNext}
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/70 hover:bg-black/90 text-white rounded-full transition-colors shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}

        {/* Image container */}
        <div className="relative">
          <Image
            key={currentIndex}
            src={currentImage.image}
            alt={currentImage.alt || ""}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[80vh] object-contain"
            priority
          />
        </div>

        {/* Caption - matches image width */}
        {currentImage.caption && (
          <div className="mt-4 bg-black/70 text-white p-4 text-center rounded-lg">
            <p className="text-sm font-medium">{currentImage.caption}</p>
          </div>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="mt-4 text-center text-white/70 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}
