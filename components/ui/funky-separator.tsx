"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const FunkySeparator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-black",
        orientation === "horizontal" ? "h-[3px] w-full rounded-full" : "h-full w-[3px] rounded-full",
        className
      )}
      {...props}
    />
  )
)
FunkySeparator.displayName = SeparatorPrimitive.Root.displayName

export { FunkySeparator }

