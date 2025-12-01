import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { ToggleGroupDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function ToggleGroupPage() {
  const filePath = path.join(process.cwd(), "components/ui/toggle-group.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Toggle Group"
      description="A set of two-state buttons that can be toggled on or off."
      componentName="toggle-group"
      dependencies="@radix-ui/react-toggle-group"
      code={code}
    >
      <ToggleGroupDemo />
    </ComponentWrapper>
  );
}
