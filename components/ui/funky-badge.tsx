import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const funkyBadgeVariants = cva(
  "inline-flex items-center rounded-md border-2 border-black px-3 py-1 text-base font-display font-bold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
  {
    variants: {
      variant: {
        default:
          "bg-[#fb923c] text-black hover:bg-[#fb923c]/80",
        secondary:
          "bg-[#6EDCD9] text-black hover:bg-[#6EDCD9]/80",
        destructive:
          "bg-[#f87171] text-black hover:bg-[#f87171]/80",
        outline: "text-foreground",
        yellow: "bg-[#FFD700] text-black hover:bg-[#FFD700]/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface FunkyBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof funkyBadgeVariants> {}

function FunkyBadge({ className, variant, ...props }: FunkyBadgeProps) {
  return (
    <div className={cn(funkyBadgeVariants({ variant }), className)} {...props} />
  )
}

export { FunkyBadge, funkyBadgeVariants }

