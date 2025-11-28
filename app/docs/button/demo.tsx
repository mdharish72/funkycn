import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="font-bold text-muted-foreground text-sm uppercase tracking-wider">Standard Variants</h3>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className="w-full border-t border-dashed border-border"></div>

      <div className="flex flex-col gap-4 items-center">
        <h3 className="font-bold text-muted-foreground text-sm uppercase tracking-wider">Brand Colors</h3>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button variant="cream">Cream</Button>
          <Button variant="peach">Peach</Button>
          <Button variant="yellow">Yellow</Button>
          <Button variant="teal">Teal</Button>
          <Button variant="beige">Beige</Button>
        </div>
      </div>

      <div className="w-full border-t border-dashed border-border"></div>

      <div className="flex flex-col gap-4 items-center">
        <h3 className="font-bold text-muted-foreground text-sm uppercase tracking-wider">Sizes</h3>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
    </div>
  )
}

