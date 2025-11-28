"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-foreground text-center  text-4xl font-bold font-display">
            The first rule of FunkyCN Club is you do not talk about FunkyCN Club.
          </p>
        }
        className="h-[40rem] border rounded-md"
      >
        The first rule of <span className="text-primary">FunkyCN Club</span> is
        you do not talk about <span className="text-primary">FunkyCN Club</span>.
      </MaskContainer>
    </div>
  );
}

