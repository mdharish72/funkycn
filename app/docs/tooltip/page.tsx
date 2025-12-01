import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { TooltipDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function TooltipPage() {
  const filePath = path.join(process.cwd(), "components/ui/tooltip.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Tooltip"
      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      componentName="tooltip"
      dependencies="@radix-ui/react-tooltip"
      code={code}
    >
      <TooltipDemo />
    </ComponentWrapper>
  );
}
