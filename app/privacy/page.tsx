import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { PRIVACY } from "@/content/Privacy";
import { SITE, HEADER_IMAGE } from "@/content/Site";

export const metadata: Metadata = {
  title: `${SITE.seo.title} – Privacy Policy`,
  description: "Privacy policy details.",
  openGraph: {
    title: `${SITE.seo.title} – Privacy Policy`,
    description: "Privacy policy details.",
    images: [{ url: HEADER_IMAGE.src }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.seo.title} – Privacy Policy`,
    description: "Privacy policy details.",
    images: [HEADER_IMAGE.src],
  },
};

export default function PrivacyPage() {
  return (
    <Section id="privacy" title="Privacy Policy">
      <article className="prose prose-neutral w-full max-w-none dark:prose-invert mx-auto">
        {PRIVACY.html ? (
          <div dangerouslySetInnerHTML={{ __html: PRIVACY.html }} />
        ) : (
          PRIVACY.text?.split("\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))
        )}
      </article>
    </Section>
  );
}
