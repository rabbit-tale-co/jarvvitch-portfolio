/**
 * @file components/site/Section.tsx
 * @description Sekcja z id (do nawigacji po anchorach) + pionowe odstępy między ważnymi blokami.
 */
import { PropsWithChildren } from "react";
import { SectionHeader } from "./SectionHeader";


export function Section({ id, title, subtitle, children }: PropsWithChildren<{ id: string; title: string; subtitle?: string }>) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-secondary">
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="mt-8">{children}</div>
    </section>
  );
}
