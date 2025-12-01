import * as React from "react"

import { cn } from "@/lib/utils"

const FunkyTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border-3 border-black bg-white px-3 py-2 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all font-body resize-none",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
FunkyTextarea.displayName = "FunkyTextarea"

export { FunkyTextarea }

