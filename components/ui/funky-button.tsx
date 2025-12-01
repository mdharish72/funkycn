import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const funkyButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-xl font-display tracking-wider transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
  {
    variants: {
      variant: {
        default: "bg-[#fb923c] text-black hover:bg-[#fb923c]/90", // Orange
        primary: "bg-[#6EDCD9] text-black hover:bg-[#6EDCD9]/90", // Cyan
        secondary: "bg-[#f2d5a3] text-black hover:bg-[#f2d5a3]/90", // Yellow/Cream
        destructive: "bg-[#f87171] text-black hover:bg-[#f87171]/90", // Red
        outline: "bg-white text-black hover:bg-accent",
        ghost: "border-transparent shadow-none hover:bg-accent hover:text-accent-foreground hover:shadow-none hover:translate-y-0 hover:translate-x-0",
        link: "text-primary underline-offset-4 hover:underline border-none shadow-none hover:shadow-none hover:translate-y-0",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 rounded-lg px-4 text-lg",
        lg: "h-14 rounded-xl px-10 text-2xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface FunkyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof funkyButtonVariants> {
  asChild?: boolean
}

const FunkyButton = React.forwardRef<HTMLButtonElement, FunkyButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = "button"
    return (
      <Comp
        className={cn(funkyButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
FunkyButton.displayName = "FunkyButton"

export { FunkyButton, funkyButtonVariants }

