import Image from "next/image";
import { HEADER_IMAGE } from "@/content/Site";
import { Shell } from "./Shell";
import { TopNav } from "./TopNav";


export function HeaderBanner() {
  return (
    <header className="w-full">
      <Image
        src={HEADER_IMAGE}
        alt="Header artwork"
        width={1152}
        className="w-full object-cover"
      />
      <TopNav />
    </header>
  );
}
