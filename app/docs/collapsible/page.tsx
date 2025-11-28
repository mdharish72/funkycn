import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { CollapsibleDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function CollapsiblePage() {
  const filePath = path.join(process.cwd(), "components/ui/collapsible.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Collapsible"
      description="An interactive component which expands/collapses a panel."
      componentName="collapsible"
      dependencies="@radix-ui/react-collapsible"
      code={code}
    >
      <CollapsibleDemo />
    </ComponentWrapper>
  );
}
