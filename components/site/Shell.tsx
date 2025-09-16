/**
 * @file components/site/Shell.tsx
 * @description Prosty layout kontenera z maksymalną szerokością i paddingiem.
 */

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";


export function Shell({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("mx-auto w-full max-w-5xl md:px-6 lg:px-8", className)}>{children}</div>;
}
