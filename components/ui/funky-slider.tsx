"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const FunkySlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-4 w-full grow overflow-hidden rounded-full border-3 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
      <SliderPrimitive.Range className="absolute h-full bg-[#fb923c] border-r-2 border-black" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-7 w-7 rounded-full border-3 border-black bg-[#FFD700] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform" />
  </SliderPrimitive.Root>
))
FunkySlider.displayName = SliderPrimitive.Root.displayName

export { FunkySlider }

