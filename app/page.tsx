import type { Metadata } from "next";
import { Shell } from "@/components/site/Shell";
import { Section } from "@/components/site/Section";
import { ABOUT } from "@/content/About";
import { SITE, HEADER_IMAGE } from "@/content/Site";
import Image from "next/image";

export const metadata: Metadata = {
  title: `${SITE.seo.title} – About`,
  description: SITE.seo.description,
  openGraph: {
    title: `${SITE.seo.title} – About`,
    description: SITE.seo.description,
    images: [{ url: HEADER_IMAGE.src }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.seo.title} – About`,
    description: SITE.seo.description,
    images: [HEADER_IMAGE.src],
  },
};

export default function HomePage() {
  return (
    <Section id="about" title="About" subtitle="Who I am and how I work">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        {ABOUT.portrait ? <Image src={ABOUT.portrait} alt="portret" className="mx-auto size-64 object-cover" width={256} height={256} /> : null}
        <div>
          <h3 className="text-3xl font-semibold font-witchcraft uppercase">{ABOUT.heroTitle}</h3>
          <p className="mt-2 text-lg opacity-60">{ABOUT.heroText}</p>
          {ABOUT.bullets?.length ? (
            <ul className="mt-4 list-disc space-y-1 pl-5">
              {ABOUT.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
