import * as React from "react"
import { cn } from "@/lib/utils"

const FunkyCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border-4 border-black bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      className
    )}
    {...props}
  />
))
FunkyCard.displayName = "FunkyCard"

const FunkyCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 border-b-4 border-black bg-[#f2d5a3]/30 rounded-t-lg", className)}
    {...props}
  />
))
FunkyCardHeader.displayName = "FunkyCardHeader"

const FunkyCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-3xl font-display font-bold leading-none tracking-tight text-black",
      className
    )}
    {...props}
  />
))
FunkyCardTitle.displayName = "FunkyCardTitle"

const FunkyCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-lg font-body text-muted-foreground font-medium", className)}
    {...props}
  />
))
FunkyCardDescription.displayName = "FunkyCardDescription"

const FunkyCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 font-body", className)} {...props} />
))
FunkyCardContent.displayName = "FunkyCardContent"

const FunkyCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
FunkyCardFooter.displayName = "FunkyCardFooter"

export { FunkyCard, FunkyCardHeader, FunkyCardFooter, FunkyCardTitle, FunkyCardDescription, FunkyCardContent }

