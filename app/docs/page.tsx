import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-display">Introduction</h1>
        <p className="text-muted-foreground mt-2 font-body">
          Welcome to FunkyCN, a UI library that combines Shadcn/UI structure with a fun, comic-style theme.
        </p>
      </div>
      
      <Separator />

      <section id="components" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="comic-lift">
          <CardHeader>
            <CardTitle>Button</CardTitle>
            <CardDescription>Clickable elements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Click me</Button>
              <Button variant="secondary" size="sm">Secondary</Button>
            </div>
          </CardContent>
          <CardFooter>
             <Link href="/docs/button" className="text-sm underline">View Docs</Link>
          </CardFooter>
        </Card>

        <Card className="comic-lift">
          <CardHeader>
            <CardTitle>Badge</CardTitle>
            <CardDescription>Status indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Badge>New</Badge>
              <Badge variant="secondary">Update</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
           <CardFooter>
             <Link href="/docs/badge" className="text-sm underline">View Docs</Link>
          </CardFooter>
        </Card>

        <Card className="comic-lift">
          <CardHeader>
            <CardTitle>Input</CardTitle>
            <CardDescription>Form inputs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="hello@funky.cn" />
          </CardContent>
           <CardFooter>
             <Link href="/docs/input" className="text-sm underline">View Docs</Link>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}

