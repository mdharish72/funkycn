import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyToggle } from "@/components/ui/funky-toggle";
import { Bold } from "lucide-react";
import fs from "fs";
import path from "path";

export default async function FunkyTogglePage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-toggle.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Toggle"
      description="A two-state button that can be either on or off."
      componentName="funky-toggle"
      dependencies="@radix-ui/react-toggle"
      code={code}
    >
      <FunkyToggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </FunkyToggle>
    </ComponentWrapper>
  );
}

