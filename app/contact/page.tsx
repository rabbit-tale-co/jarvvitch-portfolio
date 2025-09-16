import type { Metadata } from "next";
import { Shell } from "@/components/site/Shell";
import { Section } from "@/components/site/Section";
import { CONTACT } from "@/content/Contact";
import { ContactForm } from "@/components/contact/ContactForm";
import Link from "next/link";
import { SITE, HEADER_IMAGE } from "@/content/Site";

export const metadata: Metadata = {
  title: `${SITE.seo.title} – Contact`,
  description: "Contact and commission inquiries.",
  openGraph: {
    title: `${SITE.seo.title} – Contact`,
    description: "Contact and commission inquiries.",
    images: [{ url: HEADER_IMAGE.src }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.seo.title} – Contact`,
    description: "Contact and commission inquiries.",
    images: [HEADER_IMAGE.src],
  },
};

export default function ContactPage() {
  return (
    <Section id="contact" title="Contact" subtitle="Questions">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 px-10">
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-2xl font-witchcraft uppercase">{CONTACT.title}</h3>
            <p className="opacity-60">{CONTACT.intro}</p>
          </div>
          <div className="flex flex-col mt-3">
            {CONTACT.contacts?.map((contact) => (
              <div key={contact.platform}>
                <span className="opacity-60">{contact.platform}:</span> <Link href={contact.url} className="opacity-100">{contact.username}</Link>
              </div>
            ))}
          </div>
          <div className="flex flex-col mt-3">
            {CONTACT.company ? <p className="text-2xl font-witchcraft uppercase">{CONTACT.company.name}</p> : null}
            {CONTACT.company ? <p className="text-sm opacity-60">{CONTACT.company.address}</p> : null}
            {CONTACT.company ? <p className="text-sm mt-3 opacity-60">{CONTACT.company.nip}</p> : null}
            {CONTACT.company ? <p className="text-sm opacity-60">{CONTACT.company.regon}</p> : null}
          </div>
          {CONTACT.note ? <p className="mt-6 text-[11px] opacity-30">{CONTACT.note}</p> : null}
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
