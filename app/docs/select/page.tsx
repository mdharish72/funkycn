import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { SelectDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function SelectPage() {
  const filePath = path.join(process.cwd(), "components/ui/select.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Select"
      description="Displays a list of options for the user to pick from—triggered by a button."
      componentName="select"
      dependencies="@radix-ui/react-select"
      code={code}
    >
      <SelectDemo />
    </ComponentWrapper>
  );
}
