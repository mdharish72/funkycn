import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyTooltip, FunkyTooltipContent, FunkyTooltipProvider, FunkyTooltipTrigger } from "@/components/ui/funky-tooltip";
import { FunkyButton } from "@/components/ui/funky-button";
import fs from "fs";
import path from "path";

export default async function FunkyTooltipPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-tooltip.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Tooltip"
      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      componentName="funky-tooltip"
      dependencies="@radix-ui/react-tooltip"
      code={code}
    >
      <FunkyTooltipProvider>
        <FunkyTooltip>
            <FunkyTooltipTrigger asChild>
                <FunkyButton variant="outline">Hover</FunkyButton>
            </FunkyTooltipTrigger>
            <FunkyTooltipContent>
                <p>Add to library</p>
            </FunkyTooltipContent>
        </FunkyTooltip>
      </FunkyTooltipProvider>
    </ComponentWrapper>
  );
}

