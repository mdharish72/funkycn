"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/docs/accordion" },
      { title: "Alert", href: "/docs/alert" },
      { title: "Avatar", href: "/docs/avatar" },
      { title: "Badge", href: "/docs/badge" },
      { title: "Button", href: "/docs/button" },
      { title: "Card", href: "/docs/card" },
      { title: "Checkbox", href: "/docs/checkbox" },
      { title: "Dialog", href: "/docs/dialog" },
      { title: "Dropdown Menu", href: "/docs/dropdown-menu" },
      { title: "Input", href: "/docs/input" },
      { title: "Label", href: "/docs/label" },
      { title: "Popover", href: "/docs/popover" },
      { title: "Progress", href: "/docs/progress" },
      { title: "Radio Group", href: "/docs/radio-group" },
      { title: "Separator", href: "/docs/separator" },
      { title: "Select", href: "/docs/select" },
      { title: "Skeleton", href: "/docs/skeleton" },
      { title: "Slider", href: "/docs/slider" },
      { title: "Switch", href: "/docs/switch" },
      { title: "Table", href: "/docs/table" },
      { title: "Tabs", href: "/docs/tabs" },
      { title: "Textarea", href: "/docs/textarea" },
      { title: "Tooltip", href: "/docs/tooltip" },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-sidebar lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-6">
          <Link href="/" className="flex items-center gap-2 font-bold font-display">
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
  )
}
