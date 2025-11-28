"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Shadcn Funky Style",
    items: [
      { title: "Accordion", href: "/docs/accordion" },
      { title: "Alert", href: "/docs/alert" },
      { title: "Aspect Ratio", href: "/docs/aspect-ratio" },
      { title: "Avatar", href: "/docs/avatar" },
      { title: "Badge", href: "/docs/badge" },
      { title: "Breadcrumb", href: "/docs/breadcrumb" },
      { title: "Button", href: "/docs/button" },
      { title: "Carousel", href: "/docs/carousel" },
      { title: "Card", href: "/docs/card" },
      { title: "Checkbox", href: "/docs/checkbox" },
      { title: "Collapsible", href: "/docs/collapsible" },
      { title: "Command", href: "/docs/command" },
      { title: "Context Menu", href: "/docs/context-menu" },
      { title: "Dialog", href: "/docs/dialog" },
      { title: "Drawer", href: "/docs/drawer" },
      { title: "Dropdown Menu", href: "/docs/dropdown-menu" },
      { title: "Hover Card", href: "/docs/hover-card" },
      { title: "Input", href: "/docs/input" },
      { title: "Input OTP", href: "/docs/input-otp" },
      { title: "Label", href: "/docs/label" },
      { title: "Menubar", href: "/docs/menubar" },
      { title: "Navigation Menu", href: "/docs/navigation-menu" },
      { title: "Pagination", href: "/docs/pagination" },
      { title: "Popover", href: "/docs/popover" },
      { title: "Progress", href: "/docs/progress" },
      { title: "Radio Group", href: "/docs/radio-group" },
      { title: "Resizable", href: "/docs/resizable" },
      { title: "Separator", href: "/docs/separator" },
      { title: "Select", href: "/docs/select" },
      { title: "Sheet", href: "/docs/sheet" },
      { title: "Skeleton", href: "/docs/skeleton" },
      { title: "Slider", href: "/docs/slider" },
      { title: "Sonner", href: "/docs/sonner" },
      { title: "Switch", href: "/docs/switch" },
      { title: "Table", href: "/docs/table" },
      { title: "Tabs", href: "/docs/tabs" },
      { title: "Textarea", href: "/docs/textarea" },
      { title: "Toast", href: "/docs/toast" },
      { title: "Toggle", href: "/docs/toggle" },
      { title: "Toggle Group", href: "/docs/toggle-group" },
      { title: "Tooltip", href: "/docs/tooltip" },
    ],
  },
  {
    title: "Aceternity Funky Style",
    items: [
      { title: "3D Card", href: "/docs/3d-card" },
      { title: "Background Boxes", href: "/docs/background-boxes" },
      { title: "Bento Grid", href: "/docs/bento-grid" },
      { title: "Infinite Cards", href: "/docs/infinite-moving-cards" },
      { title: "Lamp Effect", href: "/docs/lamp" },
      { title: "Moving Border", href: "/docs/moving-border" },
      { title: "Spotlight", href: "/docs/spotlight" },
      { title: "Flip Words", href: "/docs/flip-words" },
      { title: "Text Generate", href: "/docs/text-generate" },
      { title: "Meteors", href: "/docs/meteors" },
      { title: "Aurora", href: "/docs/aurora" },
      { title: "Canvas Reveal", href: "/docs/canvas-reveal" },
      { title: "Evervault Card", href: "/docs/evervault-card" },
      { title: "Card Hover Effect", href: "/docs/card-hover" },
      { title: "Hover Border Gradient", href: "/docs/hover-border" },
      { title: "Tracing Beam", href: "/docs/tracing-beam" },
      { title: "Floating Navbar", href: "/docs/floating-navbar" },
      { title: "Sticky Scroll", href: "/docs/sticky-scroll" },
      { title: "Card Stack", href: "/docs/card-stack" },
      { title: "Container Scroll", href: "/docs/container-scroll" },
      { title: "Hero Parallax", href: "/docs/hero-parallax" },
      { title: "Tabs", href: "/docs/tabs" },
      { title: "Wobble Card", href: "/docs/wobble-card" },
      { title: "Text Reveal", href: "/docs/text-reveal" },
      { title: "Images Slider", href: "/docs/images-slider" },
      { title: "Layout Grid", href: "/docs/layout-grid" },
      { title: "Parallax Scroll", href: "/docs/parallax-scroll" },
      { title: "SVG Mask", href: "/docs/svg-mask" },
      { title: "3D Pin", href: "/docs/3d-pin" },
      { title: "Demo", href: "/docs/demo" },
    ],
  },
];

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
