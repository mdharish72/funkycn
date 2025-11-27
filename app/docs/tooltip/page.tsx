import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TooltipPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tooltip</h1>
        <p className="text-muted-foreground">A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.</p>
      </div>
      
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Default</CardTitle>
          </CardHeader>
          <CardContent>
             <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

