"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function ToastDemo() {
  return (
    <div className="flex flex-col gap-4 items-center">
        <p className="text-muted-foreground">Using Sonner for Toasts now.</p>
        <Button
        variant="outline"
        onClick={() =>
            toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
            },
            })
        }
        className="comic-shadow-2 border-2 border-border"
        >
        Show Toast
        </Button>
    </div>
  )
}

