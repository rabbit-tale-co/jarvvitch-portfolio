import Image from "next/image";
import { GALLERY } from "@/content/Gallery";

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {GALLERY.map((item) => (
        <figure key={item.id} className="group overflow-hidden rounded-xl border">
          <Image src={item.image} width={500} height={500} alt={item.title} className="h-64 w-full object-cover transition-transform group-hover:scale-[1.02]" />
          <figcaption className="p-3">
            <div className="font-medium">{item.title}</div>
            {item.description ? <p className="text-sm text-muted-foreground">{item.description}</p> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
