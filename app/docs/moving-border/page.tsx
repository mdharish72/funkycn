"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";

export default function MovingBorderDemo() {
  return (
    <div className="flex h-[40rem] w-full items-center justify-center bg-background">
      <Button
        borderRadius="1.75rem"
        className="bg-card text-card-foreground border-border font-display font-bold"
      >
        Click me
      </Button>
    </div>
  );
}

