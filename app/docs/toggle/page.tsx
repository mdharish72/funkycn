import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { ToggleDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function TogglePage() {
  const filePath = path.join(process.cwd(), "components/ui/toggle.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Toggle"
      description="A two-state button that can be either on or off."
      componentName="toggle"
      dependencies="@radix-ui/react-toggle"
      code={code}
    >
      <ToggleDemo />
    </ComponentWrapper>
  );
}
