import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { LabelDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function LabelPage() {
  const filePath = path.join(process.cwd(), "components/ui/label.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Label"
      description="Renders an accessible label associated with controls."
      componentName="label"
      dependencies="@radix-ui/react-label"
      code={code}
    >
      <LabelDemo />
    </ComponentWrapper>
  );
}
