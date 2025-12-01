import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyCheckbox } from "@/components/ui/funky-checkbox";
import fs from "fs";
import path from "path";

export default async function FunkyCheckboxPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-checkbox.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
      componentName="funky-checkbox"
      dependencies="@radix-ui/react-checkbox"
      code={code}
    >
      <div className="flex items-center space-x-2">
        <FunkyCheckbox id="terms" />
        <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
            Accept terms and conditions
        </label>
      </div>
    </ComponentWrapper>
  );
}

