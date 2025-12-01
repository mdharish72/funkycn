"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const FunkyAvatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      className
    )}
    {...props}
  />
))
FunkyAvatar.displayName = AvatarPrimitive.Root.displayName

const FunkyAvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
FunkyAvatarImage.displayName = AvatarPrimitive.Image.displayName

const FunkyAvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-[#f2d5a3] font-display font-bold text-black",
      className
    )}
    {...props}
  />
))
FunkyAvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { FunkyAvatar, FunkyAvatarImage, FunkyAvatarFallback }

