import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { TOS } from "@/content/Tos";
import { SITE, HEADER_IMAGE } from "@/content/Site";

export const metadata: Metadata = {
  title: `${SITE.seo.title} – Terms of Service`,
  description: "Terms and conditions for commissions and site usage.",
  openGraph: {
    title: `${SITE.seo.title} – Terms of Service`,
    description: "Terms and conditions for commissions and site usage.",
    images: [{ url: HEADER_IMAGE.src }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.seo.title} – Terms of Service`,
    description: "Terms and conditions for commissions and site usage.",
    images: [HEADER_IMAGE.src],
  },
};

export default function TosPage() {
  return (
    <Section id="tos" title="Terms of Service">
      <article className="prose prose-neutral w-full max-w-none dark:prose-invert mx-auto">
        {TOS.html ? (
          <div dangerouslySetInnerHTML={{ __html: TOS.html }} />
        ) : (
          TOS.text?.split("\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))
        )}
      </article>
    </Section>
  );
}
