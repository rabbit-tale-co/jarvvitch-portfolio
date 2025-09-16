import Link from "next/link";
import { SITE } from "@/content/Site";
import { Shell } from "./Shell";
import { SolidLogo } from "../icons/Icons";


export function Footer() {
  return (
    <footer className="py-10 text-sm text-foreground">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-4">
          <SolidLogo size={40} />
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
              <Link className="hover:underline" href="https://kris.rabbittale.co">Rabbit Tale & Company</Link>
            </h3>
            <p className="text-sm opacity-75">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://tiktok.com/@jarvvitch">TikTok</Link>
          <Link href="https://bsky.app/profile/jarvvitch.bsky.social">BSky</Link>
          <Link href="https://telegram.com/jarvvitch">Telegram</Link>
          <Link href="https://ko-fi.com/jarvvitch">Ko-fi</Link>
        </div>
      </div>
    </footer>
  );
}
