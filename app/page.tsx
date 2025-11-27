import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroCards } from "@/components/hero-cards";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header / Hero Text */}
      <section className="space-y-6 pb-8 pt-16 md:pb-12 md:pt-24 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto px-4">
          <Link
            href="/docs"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium comic-border-2 transition-transform hover:-translate-y-0.5 font-body"
          >
            Follow along on Twitter
          </Link>
          <h1
            className={cn(
              "text-4xl font-normal sm:text-5xl md:text-6xl lg:text-7xl tracking-wide font-display text-[#F2D5A3]"
            )}
            style={{
              WebkitTextStroke: "2px #2c2c2c",
              textShadow: "4px 4px 0 #2a7e84",
            }}
          >
            The Foundation for your<br className="hidden sm:inline" />
            Funky System
          </h1>
          <p className={cn("max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 font-body")}>
            A UI library that combines the structural excellence of Shadcn/UI with the 
            playful, comic-style energy of Roastume. Beautifully designed components 
            that you can copy and paste into your apps.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="h-12 px-8 text-lg comic-shadow-4 hover:comic-shadow-6 font-display">
              <Link href="/docs">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg comic-shadow-4 hover:comic-shadow-6 bg-white font-display">
              <Link href="https://github.com/shadcn-ui/ui" target="_blank">GitHub</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard / Components Preview */}
      <section className="container mx-auto pb-8 md:pb-12 lg:pb-24 px-4">
        <div className="rounded-xl comic-border-4 bg-muted/50 p-4 md:p-8 comic-shadow-6">
           <HeroCards />
        </div>
      </section>
    </div>
  );
}
