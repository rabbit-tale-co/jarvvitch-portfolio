import { notFound } from "next/navigation";
import { Shell } from "@/components/site/Shell";
import { getPageBySlug } from "@/lib/registry";


export default function SimplePage({ params }: { params: { slug: string } }) {
  const page = getPageBySlug(params.slug);
  if (!page) return notFound();


  return (
    <Shell>
      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <h1 className="mb-2 text-3xl font-semibold">{page.title}</h1>
        {page.content.split("\n\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>
    </Shell>
  );
}
