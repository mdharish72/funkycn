import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SliderPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Slider</h1>
        <p className="text-muted-foreground">An input where the user selects a value from within a given range.</p>
      </div>
      
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Default</CardTitle>
          </CardHeader>
          <CardContent>
             <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

