import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const funkyAlertVariants = cva(
  "relative w-full rounded-xl border-3 border-black p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
  {
    variants: {
      variant: {
        default: "bg-[#6EDCD9] text-black",
        destructive:
          "bg-[#f87171] text-black",
        warning: "bg-[#f2d5a3] text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const FunkyAlert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof funkyAlertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(funkyAlertVariants({ variant }), className)}
    {...props}
  />
))
FunkyAlert.displayName = "FunkyAlert"

const FunkyAlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-display font-bold leading-none tracking-wide text-lg", className)}
    {...props}
  />
))
FunkyAlertTitle.displayName = "FunkyAlertTitle"

const FunkyAlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed font-body font-medium", className)}
    {...props}
  />
))
FunkyAlertDescription.displayName = "FunkyAlertDescription"

export { FunkyAlert, FunkyAlertTitle, FunkyAlertDescription }

