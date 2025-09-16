import { Separator } from "@/components/ui/separator";


export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold tracking-tight md:text-5xl font-witchcraft uppercase">{title}</h2>
      {subtitle ? <p className="mt-2 text-3xl opacity-60 font-witchcraft uppercase">{subtitle}</p> : null}
      <div className="mx-auto mt-6 w-24"><Separator /></div>
    </div>
  );
}
