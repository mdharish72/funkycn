import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { CheckboxDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function CheckboxPage() {
  const filePath = path.join(process.cwd(), "components/ui/checkbox.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
      componentName="checkbox"
      dependencies="@radix-ui/react-checkbox"
      code={code}
    >
      <CheckboxDemo />
    </ComponentWrapper>
  );
}
