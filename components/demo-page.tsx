"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Boxes } from "@/components/ui/background-boxes";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export const DemoPage = () => {
    const words = [
        {
          text: "Roast",
        },
        {
          text: "your",
        },
        {
          text: "friends",
        },
        {
          text: "with",
        },
        {
          text: "FunkyCN.",
          className: "text-primary",
        },
      ];
    return (
        <div className="flex flex-col gap-10">
             <div className="h-96 relative w-full overflow-hidden bg-card border-2 border-border comic-shadow-2 flex flex-col items-center justify-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-card z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                <Boxes />
                <h1 className={("md:text-4xl text-xl text-card-foreground font-display font-bold relative z-20")}>
                    Background Boxes
                </h1>
                <p className="text-center mt-2 text-muted-foreground relative z-20 font-body">
                    Framer motion is the best animation library ngl
                </p>
            </div>

            <div className="flex justify-center">
                 <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-card">
                    <p className="text-base sm:text-xl text-card-foreground font-display font-bold mt-4 mb-2">
                    Air Jordan 4 Retro Reimagined
                    </p>
            
                    <p className="text-sm text-muted-foreground font-body">
                    The Air Jordan 4 Retro Reimagined Bred will be released on Saturday,
                    February 17, 2024. Your best opportunity to get these right now is by
                    entering raffles and waiting for the official releases.
                    </p>
                    <button className="rounded-full pl-4 pr-1 py-1 text-primary-foreground flex items-center space-x-1 bg-primary mt-4 text-xs font-bold">
                    <span>Buy now </span>
                    <span className="bg-muted rounded-full text-[0.6rem] px-2 py-0 text-muted-foreground">
                        $100
                    </span>
                    </button>
                </BackgroundGradient>
            </div>

            <div className="flex flex-col items-center justify-center h-[40rem] ">
                <p className="text-muted-foreground text-xs sm:text-base  ">
                    The road to freedom starts from here
                </p>
                <TypewriterEffect words={words} />
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
                    <button className="w-40 h-10 rounded-xl bg-primary comic-border-2 text-primary-foreground text-sm font-bold comic-shadow-2 hover:translate-y-[-2px] hover:comic-shadow-4 transition-all">
                    Join now
                    </button>
                    <button className="w-40 h-10 rounded-xl bg-card text-card-foreground border-2 border-border text-sm font-bold comic-shadow-2 hover:translate-y-[-2px] hover:comic-shadow-4 transition-all">
                    Signup
                    </button>
                </div>
            </div>
        </div>
    )
}

