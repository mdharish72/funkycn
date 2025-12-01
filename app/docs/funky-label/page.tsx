import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyLabel } from "@/components/ui/funky-label";
import { FunkyCheckbox } from "@/components/ui/funky-checkbox";
import fs from "fs";
import path from "path";

export default async function FunkyLabelPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-label.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Label"
      description="Renders an accessible label associated with controls."
      componentName="funky-label"
      dependencies="@radix-ui/react-label"
      code={code}
    >
      <div className="flex items-center space-x-2">
        <FunkyCheckbox id="terms-label" />
        <FunkyLabel htmlFor="terms-label">Accept terms and conditions</FunkyLabel>
      </div>
    </ComponentWrapper>
  );
}

