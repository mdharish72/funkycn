import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-foreground font-display">
        Build
        <FlipWords words={words} /> <br />
        websites with FunkyCN
      </div>
    </div>
  );
}

