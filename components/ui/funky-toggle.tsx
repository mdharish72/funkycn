"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const funkyToggleVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] data-[state=on]:translate-x-[2px] data-[state=on]:translate-y-[2px] data-[state=on]:shadow-none",
  {
    variants: {
      variant: {
        default: "bg-white data-[state=on]:bg-[#FFD700]",
        outline:
          "bg-transparent border-black hover:bg-accent hover:text-accent-foreground",
        primary: "bg-white data-[state=on]:bg-[#6EDCD9]",
      },
      size: {
        default: "h-12 px-4 min-w-[3rem]",
        sm: "h-10 px-3 min-w-[2.5rem]",
        lg: "h-14 px-6 min-w-[3.5rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const FunkyToggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof funkyToggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(funkyToggleVariants({ variant, size, className }))}
    {...props}
  />
))

FunkyToggle.displayName = TogglePrimitive.Root.displayName

export { FunkyToggle, funkyToggleVariants }

