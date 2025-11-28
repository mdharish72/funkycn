import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-wrap gap-4 justify-center">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
      
      <div className="w-full border-t border-dashed border-border my-4"></div>
      
      <p className="text-sm text-muted-foreground font-bold">Brand Colors</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Badge variant="cream">Cream</Badge>
        <Badge variant="peach">Peach</Badge>
        <Badge variant="yellow">Yellow</Badge>
        <Badge variant="teal">Teal</Badge>
      </div>
    </div>
  )
}

