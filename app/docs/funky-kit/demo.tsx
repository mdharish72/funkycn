import {
  FunkyAccordion,
  FunkyAccordionContent,
  FunkyAccordionItem,
  FunkyAccordionTrigger,
} from "@/components/ui/funky-accordion";
import {
  FunkyAlert,
  FunkyAlertDescription,
  FunkyAlertTitle,
} from "@/components/ui/funky-alert";
import {
  FunkyAvatar,
  FunkyAvatarFallback,
  FunkyAvatarImage,
} from "@/components/ui/funky-avatar";
import { FunkyBadge } from "@/components/ui/funky-badge";
import { FunkyButton } from "@/components/ui/funky-button";
import {
  FunkyCard,
  FunkyCardContent,
  FunkyCardDescription,
  FunkyCardHeader,
  FunkyCardTitle,
} from "@/components/ui/funky-card";
import { FunkyCheckbox } from "@/components/ui/funky-checkbox";
import {
  FunkyDialog,
  FunkyDialogContent,
  FunkyDialogDescription,
  FunkyDialogFooter,
  FunkyDialogHeader,
  FunkyDialogTitle,
  FunkyDialogTrigger,
} from "@/components/ui/funky-dialog";
import { FunkyInput } from "@/components/ui/funky-input";
import { FunkyLabel } from "@/components/ui/funky-label";
import { FunkyProgress } from "@/components/ui/funky-progress";
import {
  FunkyRadioGroup,
  FunkyRadioGroupItem,
} from "@/components/ui/funky-radio-group";
import {
  FunkySelect,
  FunkySelectContent,
  FunkySelectItem,
  FunkySelectTrigger,
  FunkySelectValue,
} from "@/components/ui/funky-select";
import { FunkySeparator } from "@/components/ui/funky-separator";
import {
  FunkySheet,
  FunkySheetContent,
  FunkySheetDescription,
  FunkySheetFooter,
  FunkySheetHeader,
  FunkySheetTitle,
  FunkySheetTrigger,
} from "@/components/ui/funky-sheet";
import { FunkySkeleton } from "@/components/ui/funky-skeleton";
import { FunkySlider } from "@/components/ui/funky-slider";
import { FunkySwitch } from "@/components/ui/funky-switch";
import {
  FunkyTabs,
  FunkyTabsContent,
  FunkyTabsList,
  FunkyTabsTrigger,
} from "@/components/ui/funky-tabs";
import { FunkyTextarea } from "@/components/ui/funky-textarea";
import { FunkyToggle } from "@/components/ui/funky-toggle";
import {
  FunkyTooltip,
  FunkyTooltipContent,
  FunkyTooltipProvider,
  FunkyTooltipTrigger,
} from "@/components/ui/funky-tooltip";
import { Bold, Italic, Rocket, Star, Underline, Zap } from "lucide-react";

export function FunkyKitDemo() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 space-y-20 bg-[#fafafa] overflow-hidden">
      <div className="flex flex-col items-center text-center space-y-4 py-10">
        <FunkyBadge variant="yellow" className="text-xl px-4 py-2 -rotate-2">
          New Collection
        </FunkyBadge>
        <h2 className="text-7xl font-display font-black text-black drop-shadow-[4px_4px_0px_rgba(44,44,44,0.2)]">
          THE FUNKY UI KIT
        </h2>
        <p className="text-2xl font-body max-w-2xl mx-auto text-muted-foreground">
          Components that pop! Built for bold statements and playful interfaces.
        </p>
      </div>

      {/* 1. Basic Actions & Indicators */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 w-12 bg-black rounded-full" />
          <h3 className="text-4xl font-display font-bold">Actions & Status</h3>
        </div>

        <div className="grid gap-8">
          {/* Buttons */}
          <div className="flex flex-wrap gap-6 items-center justify-center p-8 border-4 border-dashed border-black/20 rounded-xl bg-white/50">
            <FunkyButton>Default Action</FunkyButton>
            <FunkyButton variant="primary">Cyan Theme</FunkyButton>
            <FunkyButton variant="secondary">Mellow Yellow</FunkyButton>
            <FunkyButton variant="destructive">Danger Zone</FunkyButton>
            <FunkyButton variant="outline">Ghost Mode</FunkyButton>
            <FunkyButton size="icon" variant="primary" className="rounded-full">
              <Star className="w-6 h-6 fill-current" />
            </FunkyButton>
          </div>

          {/* Toggles & Badges */}
          <div className="flex flex-wrap gap-8 justify-center p-8 border-4 border-dashed border-black/20 rounded-xl bg-white/50">
            <div className="flex items-center gap-4">
              <FunkyToggle aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </FunkyToggle>
              <FunkyToggle variant="primary" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </FunkyToggle>
              <FunkyToggle variant="outline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </FunkyToggle>
            </div>
            <FunkySeparator orientation="vertical" className="h-12" />
            <div className="flex gap-2 items-center">
              <FunkyBadge>New</FunkyBadge>
              <FunkyBadge variant="secondary">Verified</FunkyBadge>
              <FunkyBadge variant="yellow">Featured</FunkyBadge>
              <FunkyBadge variant="destructive">Sold Out</FunkyBadge>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Forms & Inputs */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 w-12 bg-black rounded-full" />
          <h3 className="text-4xl font-display font-bold">Funky Forms</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 p-8 border-4 border-dashed border-black/20 rounded-xl bg-white/50">
          <div className="space-y-6">
            <div className="space-y-3">
              <FunkyLabel>Username</FunkyLabel>
              <FunkyInput placeholder="Enter your cool name..." />
            </div>
            <div className="space-y-3">
              <FunkyLabel>Bio</FunkyLabel>
              <FunkyTextarea placeholder="Tell us your life story..." />
            </div>
            <div className="space-y-3">
              <FunkyLabel>Role</FunkyLabel>
              <FunkySelect>
                <FunkySelectTrigger>
                  <FunkySelectValue placeholder="Select a role" />
                </FunkySelectTrigger>
                <FunkySelectContent>
                  <FunkySelectItem value="dev">Developer</FunkySelectItem>
                  <FunkySelectItem value="design">Designer</FunkySelectItem>
                  <FunkySelectItem value="pm">Product Manager</FunkySelectItem>
                </FunkySelectContent>
              </FunkySelect>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <FunkyLabel>Preferences</FunkyLabel>
              <FunkyRadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <FunkyRadioGroupItem value="default" id="r1" />
                  <FunkyLabel htmlFor="r1" className="text-base font-medium">
                    Default
                  </FunkyLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <FunkyRadioGroupItem value="comfortable" id="r2" />
                  <FunkyLabel htmlFor="r2" className="text-base font-medium">
                    Comfortable
                  </FunkyLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <FunkyRadioGroupItem value="compact" id="r3" />
                  <FunkyLabel htmlFor="r3" className="text-base font-medium">
                    Compact
                  </FunkyLabel>
                </div>
              </FunkyRadioGroup>
            </div>

            <div className="flex items-center justify-between">
              <FunkyLabel>Notifications</FunkyLabel>
              <FunkySwitch />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <FunkyLabel>Volume</FunkyLabel>
                <span className="font-bold font-display">85%</span>
              </div>
              <FunkySlider defaultValue={[85]} max={100} step={1} />
            </div>

            <div className="flex items-center space-x-2">
              <FunkyCheckbox id="terms" />
              <label
                htmlFor="terms"
                className="text-lg font-body font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to be funky
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive & Overlays */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 w-12 bg-black rounded-full" />
          <h3 className="text-4xl font-display font-bold">
            Overlays & Feedback
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Dialog & Sheet */}
          <FunkyCard className="bg-[#f2d5a3]/20">
            <FunkyCardHeader>
              <FunkyCardTitle>Modals & Drawers</FunkyCardTitle>
            </FunkyCardHeader>
            <FunkyCardContent className="space-y-4 flex flex-col items-start">
              <FunkyDialog>
                <FunkyDialogTrigger asChild>
                  <FunkyButton className="w-full">Open Dialog</FunkyButton>
                </FunkyDialogTrigger>
                <FunkyDialogContent>
                  <FunkyDialogHeader>
                    <FunkyDialogTitle>
                      Are you absolutely sure?
                    </FunkyDialogTitle>
                    <FunkyDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </FunkyDialogDescription>
                  </FunkyDialogHeader>
                  <FunkyDialogFooter>
                    <FunkyButton variant="outline">Cancel</FunkyButton>
                    <FunkyButton variant="destructive">Continue</FunkyButton>
                  </FunkyDialogFooter>
                </FunkyDialogContent>
              </FunkyDialog>

              <FunkySheet>
                <FunkySheetTrigger asChild>
                  <FunkyButton variant="secondary" className="w-full">
                    Open Side Sheet
                  </FunkyButton>
                </FunkySheetTrigger>
                <FunkySheetContent>
                  <FunkySheetHeader>
                    <FunkySheetTitle>Edit Profile</FunkySheetTitle>
                    <FunkySheetDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </FunkySheetDescription>
                  </FunkySheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <FunkyLabel className="text-right">Name</FunkyLabel>
                      <FunkyInput
                        id="name"
                        value="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <FunkyLabel className="text-right">Username</FunkyLabel>
                      <FunkyInput
                        id="username"
                        value="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <FunkySheetFooter>
                    <FunkyButton type="submit">Save changes</FunkyButton>
                  </FunkySheetFooter>
                </FunkySheetContent>
              </FunkySheet>
            </FunkyCardContent>
          </FunkyCard>

          {/* Alerts & Tooltips */}
          <div className="space-y-6">
            <FunkyAlert>
              <Rocket className="h-4 w-4" />
              <FunkyAlertTitle>Heads up!</FunkyAlertTitle>
              <FunkyAlertDescription>
                You can add components to your app using the cli.
              </FunkyAlertDescription>
            </FunkyAlert>

            <div className="p-6 border-4 border-dashed border-black/20 rounded-xl bg-white/50 flex items-center justify-center gap-4">
              <FunkyTooltipProvider>
                <FunkyTooltip>
                  <FunkyTooltipTrigger asChild>
                    <FunkyButton
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Zap className="h-4 w-4" />
                    </FunkyButton>
                  </FunkyTooltipTrigger>
                  <FunkyTooltipContent>
                    <p>Supercharged Action!</p>
                  </FunkyTooltipContent>
                </FunkyTooltip>
              </FunkyTooltipProvider>
              <span className="font-display font-bold">← Hover me!</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span>Loading Funkiness...</span>
                <span>45%</span>
              </div>
              <FunkyProgress value={45} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Content Display */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 w-12 bg-black rounded-full" />
          <h3 className="text-4xl font-display font-bold">Content Display</h3>
        </div>

        <FunkyTabs defaultValue="account" className="w-full">
          <FunkyTabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto mb-8">
            <FunkyTabsTrigger value="account">Account</FunkyTabsTrigger>
            <FunkyTabsTrigger value="password">Password</FunkyTabsTrigger>
          </FunkyTabsList>
          <FunkyTabsContent value="account">
            <FunkyCard className="border-0 shadow-none">
              <FunkyCardHeader>
                <FunkyCardTitle>Account</FunkyCardTitle>
                <FunkyCardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </FunkyCardDescription>
              </FunkyCardHeader>
              <FunkyCardContent className="space-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <FunkyAvatar className="h-16 w-16">
                    <FunkyAvatarImage src="https://github.com/shadcn.png" />
                    <FunkyAvatarFallback>CN</FunkyAvatarFallback>
                  </FunkyAvatar>
                  <div>
                    <h4 className="text-xl font-bold font-display">Shadcn</h4>
                    <p className="text-muted-foreground">@shadcn</p>
                  </div>
                </div>
              </FunkyCardContent>
            </FunkyCard>
          </FunkyTabsContent>
          <FunkyTabsContent value="password">
            <FunkyCard className="border-0 shadow-none">
              <FunkyCardHeader>
                <FunkyCardTitle>Password</FunkyCardTitle>
                <FunkyCardDescription>
                  Change your password here. After saving, you'll be logged out.
                </FunkyCardDescription>
              </FunkyCardHeader>
              <FunkyCardContent className="space-y-4">
                <FunkySkeleton className="h-10 w-full" />
                <FunkySkeleton className="h-10 w-full" />
              </FunkyCardContent>
            </FunkyCard>
          </FunkyTabsContent>
        </FunkyTabs>

        <div className="mt-8">
          <FunkyAccordion type="single" collapsible className="w-full">
            <FunkyAccordionItem value="item-1">
              <FunkyAccordionTrigger>Is it accessible?</FunkyAccordionTrigger>
              <FunkyAccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </FunkyAccordionContent>
            </FunkyAccordionItem>
            <FunkyAccordionItem value="item-2">
              <FunkyAccordionTrigger>Is it styled?</FunkyAccordionTrigger>
              <FunkyAccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </FunkyAccordionContent>
            </FunkyAccordionItem>
            <FunkyAccordionItem value="item-3">
              <FunkyAccordionTrigger>Is it animated?</FunkyAccordionTrigger>
              <FunkyAccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </FunkyAccordionContent>
            </FunkyAccordionItem>
          </FunkyAccordion>
        </div>
      </section>
    </div>
  );
}
