import React from "react";
import { Spotlight } from "@/components/ui/spotlight";

export default function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-card antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="var(--primary)"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground bg-opacity-50 font-display">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-muted-foreground max-w-lg text-center mx-auto font-body">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. It is a great way to make your website look more
          interactive and modern.
        </p>
      </div>
    </div>
  );
}

