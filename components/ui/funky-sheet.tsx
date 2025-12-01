"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const FunkySheet = SheetPrimitive.Root

const FunkySheetTrigger = SheetPrimitive.Trigger

const FunkySheetClose = SheetPrimitive.Close

const FunkySheetPortal = SheetPrimitive.Portal

const FunkySheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
FunkySheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const funkySheetVariants = cva(
  "fixed z-50 gap-4 bg-white p-6 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 border-black shadow-[0_0_0_4px_rgba(0,0,0,1)]",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b-4 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]",
        bottom:
          "inset-x-0 bottom-0 border-t-4 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]",
        left: "inset-y-0 left-0 h-full w-3/4 border-r-4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm shadow-[4px_0px_0px_0px_rgba(0,0,0,1)]",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l-4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm shadow-[-4px_0px_0px_0px_rgba(0,0,0,1)]",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface FunkySheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof funkySheetVariants> {}

const FunkySheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  FunkySheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <FunkySheetPortal>
    <FunkySheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(funkySheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-6 w-6 stroke-[3]" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </FunkySheetPortal>
))
FunkySheetContent.displayName = SheetPrimitive.Content.displayName

const FunkySheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
FunkySheetHeader.displayName = "FunkySheetHeader"

const FunkySheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
FunkySheetFooter.displayName = "FunkySheetFooter"

const FunkySheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-3xl font-bold text-foreground font-display tracking-wide", className)}
    {...props}
  />
))
FunkySheetTitle.displayName = SheetPrimitive.Title.displayName

const FunkySheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-lg text-muted-foreground font-body", className)}
    {...props}
  />
))
FunkySheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  FunkySheet,
  FunkySheetPortal,
  FunkySheetOverlay,
  FunkySheetTrigger,
  FunkySheetClose,
  FunkySheetContent,
  FunkySheetHeader,
  FunkySheetFooter,
  FunkySheetTitle,
  FunkySheetDescription,
}

