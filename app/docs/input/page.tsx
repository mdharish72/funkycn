import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InputPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Input</h1>
        <p className="text-muted-foreground">Displays a form input field or a component that looks like an input field.</p>
      </div>
      
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Default</CardTitle>
          </CardHeader>
          <CardContent>
            <Input type="email" placeholder="Email" className="max-w-sm" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>With Label</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>With Button</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

