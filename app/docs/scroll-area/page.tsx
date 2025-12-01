import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { ScrollAreaDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function ScrollAreaPage() {
  const filePath = path.join(process.cwd(), "components/ui/scroll-area.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Scroll Area"
      description="Augments native scroll functionality for custom, cross-browser styling."
      componentName="scroll-area"
      dependencies="@radix-ui/react-scroll-area"
      code={code}
    >
      <ScrollAreaDemo />
    </ComponentWrapper>
  );
}

