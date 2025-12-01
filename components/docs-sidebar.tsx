"use client";

import { sidebarItems } from "@/app/constants/constant";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-sidebar lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-6 lg:h-[60px]">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold font-display"
          >
            <h3 className="text-xl font-normal tracking-wide">FunkyCN</h3>
          </Link>
        </div>
        <ScrollArea className="flex-1 px-4 py-6">
          <div className="flex flex-col gap-6 pr-6">
            {sidebarItems.map((section, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h4 className="rounded-md px-2 py-1 text-sm font-bold font-display">
                  {section.title}
                </h4>
                {section.items.length > 0 && (
                  <div className="grid grid-flow-row auto-rows-max text-sm">
                    {section.items.map((item, j) => (
                      <Link
                        key={j}
                        href={item.href}
                        className={cn(
                          "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline font-body",
                          pathname === item.href
                            ? "font-medium text-foreground underline"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
