// import { Checkbox } from "@/components/ui/checkbox" // We don't have checkbox yet
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LabelPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Label</h1>
        <p className="text-muted-foreground">Renders an accessible label associated with controls.</p>
      </div>
      
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Default</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

