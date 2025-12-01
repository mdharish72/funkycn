"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast("Scheduled: Catch up ", {
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }}
    >
      Add to calendar
    </Button>
  )
}

