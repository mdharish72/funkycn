"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const FunkyAccordion = AccordionPrimitive.Root

const FunkyAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b-3 border-black last:border-b-0", className)}
    {...props}
  />
))
FunkyAccordionItem.displayName = "FunkyAccordionItem"

const FunkyAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-display font-bold transition-all hover:bg-[#f2d5a3]/50 px-2 [&[data-state=open]>svg]:rotate-180 text-lg text-black",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-200 border-2 border-black rounded-full p-0.5" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
FunkyAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const FunkyAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down bg-white/50"
    {...props}
  >
    <div className={cn("pb-4 pt-0 px-2 font-body font-medium text-base", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
FunkyAccordionContent.displayName = AccordionPrimitive.Content.displayName

export { FunkyAccordion, FunkyAccordionItem, FunkyAccordionTrigger, FunkyAccordionContent }

