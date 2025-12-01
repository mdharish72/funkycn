"use client"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function TextareaDemo() {
  return (
    <div className="grid w-full gap-2">
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
      <div className="grid w-full gap-2 mt-4">
        <Textarea placeholder="Type your message here." />
        <Button>Send message</Button>
      </div>
    </div>
  )
}

