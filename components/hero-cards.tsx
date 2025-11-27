"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"

export function HeroCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 max-w-6xl mx-auto p-4">
      
      {/* Payment Method Card - Replaces the Payment Method example */}
      <Card className="col-span-2 lg:col-span-2 comic-lift shadow-none hover:translate-y-0">
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>
            Add a new payment method to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <Tabs defaultValue="card" className="w-full">
             <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="card">Card</TabsTrigger>
                <TabsTrigger value="paypal">Paypal</TabsTrigger>
              </TabsList>
              <TabsContent value="card" className="space-y-4 mt-4">
                 <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="First Last" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="number">Card number</Label>
                  <Input id="number" placeholder="" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="month">Expires</Label>
                    <Select>
                      <SelectTrigger id="month">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">January</SelectItem>
                        <SelectItem value="2">February</SelectItem>
                        <SelectItem value="3">March</SelectItem>
                        <SelectItem value="4">April</SelectItem>
                        <SelectItem value="5">May</SelectItem>
                        <SelectItem value="6">June</SelectItem>
                        <SelectItem value="7">July</SelectItem>
                        <SelectItem value="8">August</SelectItem>
                        <SelectItem value="9">September</SelectItem>
                        <SelectItem value="10">October</SelectItem>
                        <SelectItem value="11">November</SelectItem>
                        <SelectItem value="12">December</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="year">Year</Label>
                    <Select>
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="CVC" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="paypal" className="mt-4">
                 <div className="flex flex-col items-center justify-center gap-4 py-4">
                   <p className="text-muted-foreground text-sm">Paypal is not configured.</p>
                 </div>
              </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Continue</Button>
        </CardFooter>
      </Card>

      {/* Team Members Card */}
      <Card className="col-span-2 lg:col-span-2 comic-lift shadow-none hover:translate-y-0">
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>
            Invite your team members to collaborate.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatars/01.png" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold font-display leading-none">Sofia Davis</p>
                <p className="text-sm text-muted-foreground font-body">m@example.com</p>
              </div>
            </div>
            <Select defaultValue="owner">
              <SelectTrigger className="ml-auto w-[110px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="owner">Owner</SelectItem>
                <SelectItem value="member">Member</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatars/02.png" />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold font-display leading-none">Jackson Lee</p>
                <p className="text-sm text-muted-foreground font-body">p@example.com</p>
              </div>
            </div>
            <Select defaultValue="member">
              <SelectTrigger className="ml-auto w-[110px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="owner">Owner</SelectItem>
                <SelectItem value="member">Member</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Share/Link Card */}
      <Card className="col-span-2 lg:col-span-2 comic-lift shadow-none hover:translate-y-0">
        <CardHeader>
          <CardTitle>Share this document</CardTitle>
          <CardDescription>
            Anyone with the link can view this document.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input value="http://example.com/link/to/document" readOnly />
            <Button variant="secondary" className="shrink-0">
              Copy Link
            </Button>
          </div>
          <Separator className="my-4" />
          <div className="space-y-4">
            <h4 className="text-sm font-bold font-display">People with access</h4>
            <div className="grid gap-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/avatars/03.png" />
                    <AvatarFallback>IN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-bold font-display leading-none">Olivia Martin</p>
                    <p className="text-sm text-muted-foreground font-body">m@example.com</p>
                  </div>
                </div>
                <Select defaultValue="view">
                  <SelectTrigger className="ml-auto w-[110px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="edit">Can edit</SelectItem>
                    <SelectItem value="view">Can view</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications Card */}
      <Card className="col-span-2 lg:col-span-2 comic-lift shadow-none hover:translate-y-0">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Choose what you want to be notified about.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center space-x-4 rounded-md border p-4 comic-border-2">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-bold font-display leading-none">
                Everything
              </p>
              <p className="text-sm text-muted-foreground font-body">
                Email digest, mentions & all activity.
              </p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center space-x-4 rounded-md border p-4 comic-border-2">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-bold font-display leading-none">
                Available
              </p>
              <p className="text-sm text-muted-foreground font-body">
                Only mentions and comments.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center space-x-2 mt-2">
             <Checkbox id="terms" />
             <Label htmlFor="terms">Receive marketing emails</Label>
          </div>
        </CardContent>
        <CardFooter>
           <Button className="w-full" variant="outline">Save preferences</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
