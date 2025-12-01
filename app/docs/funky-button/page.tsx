import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyButton } from "@/components/ui/funky-button";
import fs from "fs";
import path from "path";
import { Star } from "lucide-react";

export default async function FunkyButtonPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-button.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Button"
      description="Displays a button or a component that looks like a button."
      componentName="funky-button"
      dependencies="@radix-ui/react-slot"
      code={code}
    >
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <FunkyButton>Default</FunkyButton>
        <FunkyButton variant="primary">Primary</FunkyButton>
        <FunkyButton variant="secondary">Secondary</FunkyButton>
        <FunkyButton variant="destructive">Destructive</FunkyButton>
        <FunkyButton variant="outline">Outline</FunkyButton>
        <FunkyButton variant="ghost">Ghost</FunkyButton>
        <FunkyButton variant="link">Link</FunkyButton>
        <FunkyButton size="icon" variant="primary" className="rounded-full">
            <Star className="w-4 h-4 fill-current" />
        </FunkyButton>
      </div>
    </ComponentWrapper>
  );
}

