import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TextareaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Textarea</h1>
        <p className="text-muted-foreground">Displays a form textarea or a component that looks like a textarea.</p>
      </div>
      
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Default</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Your message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>With Button</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="grid w-full gap-2">
              <Textarea placeholder="Type your message here." />
              <Button>Send message</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

