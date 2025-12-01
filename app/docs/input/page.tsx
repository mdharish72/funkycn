import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { InputDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function InputPage() {
  const filePath = path.join(process.cwd(), "components/ui/input.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Input"
      description="Displays a form input field or a component that looks like an input field."
      componentName="input"
      dependencies=""
      code={code}
    >
      <InputDemo />
    </ComponentWrapper>
  );
}
