"use client";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function BackgroundBoxesPage() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-card border-2 border-border comic-shadow-2 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-card z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-card-foreground font-display font-bold relative z-20")}>
        Background Boxes
      </h1>
      <p className="text-center mt-2 text-muted-foreground relative z-20 font-body">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
}

