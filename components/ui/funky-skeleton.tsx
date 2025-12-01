import { cn } from "@/lib/utils"

function FunkySkeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-xl bg-muted border-3 border-black/20", className)}
      {...props}
    />
  )
}

export { FunkySkeleton }

