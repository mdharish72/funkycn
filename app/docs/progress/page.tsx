"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProgressPage() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Progress</h1>
        <p className="text-muted-foreground">Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.</p>
      </div>
      
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Default</CardTitle>
          </CardHeader>
          <CardContent>
             <Progress value={progress} className="w-[60%]" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

