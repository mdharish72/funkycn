"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const FunkyTabs = TabsPrimitive.Root

const FunkyTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-14 items-center justify-center rounded-xl bg-black p-2 text-muted-foreground gap-2 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      className
    )}
    {...props}
  />
))
FunkyTabsList.displayName = TabsPrimitive.List.displayName

const FunkyTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-display font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#6EDCD9] data-[state=active]:text-black data-[state=active]:shadow-none text-white hover:text-[#6EDCD9] hover:bg-white/10",
      className
    )}
    {...props}
  />
))
FunkyTabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const FunkyTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 p-6 border-3 border-black rounded-xl bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      className
    )}
    {...props}
  />
))
FunkyTabsContent.displayName = TabsPrimitive.Content.displayName

export { FunkyTabs, FunkyTabsList, FunkyTabsTrigger, FunkyTabsContent }

