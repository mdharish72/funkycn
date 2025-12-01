import { ComponentWrapper } from "@/components/docs/component-wrapper";
import {
  FunkySelect,
  FunkySelectContent,
  FunkySelectItem,
  FunkySelectTrigger,
  FunkySelectValue,
} from "@/components/ui/funky-select";
import fs from "fs";
import path from "path";

export default async function FunkySelectPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-select.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Select"
      description="Displays a list of options for the user to pick from—triggered by a button."
      componentName="funky-select"
      dependencies="@radix-ui/react-select"
      code={code}
    >
      <FunkySelect>
        <FunkySelectTrigger className="w-[180px]">
            <FunkySelectValue placeholder="Theme" />
        </FunkySelectTrigger>
        <FunkySelectContent>
            <FunkySelectItem value="light">Light</FunkySelectItem>
            <FunkySelectItem value="dark">Dark</FunkySelectItem>
            <FunkySelectItem value="system">System</FunkySelectItem>
        </FunkySelectContent>
      </FunkySelect>
    </ComponentWrapper>
  );
}

