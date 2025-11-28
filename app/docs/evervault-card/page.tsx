import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export default function EvervaultCardDemo() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] bg-card border-2 border-border comic-shadow-2 rounded-2xl">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-foreground" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-foreground" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-foreground" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-foreground" />

      <EvervaultCard text="hover" />

      <h2 className="text-foreground mt-4 text-sm font-light font-body">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>
      <p className="text-sm border font-light border-border rounded-full mt-4 text-foreground px-2 py-0.5 font-mono">
        Watch me hover
      </p>
    </div>
  );
}

