import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BadgePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Badge</h1>
        <p className="text-muted-foreground">Displays a badge or a component that looks like a badge.</p>
      </div>
      
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>Different styles for different contexts.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Brand Colors</CardTitle>
            <CardDescription>Custom comic-themed colors.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Badge variant="cream">Cream</Badge>
            <Badge variant="peach">Peach</Badge>
            <Badge variant="yellow">Yellow</Badge>
            <Badge variant="teal">Teal</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

