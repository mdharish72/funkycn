import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { RadioGroupDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function RadioGroupPage() {
  const filePath = path.join(process.cwd(), "components/ui/radio-group.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Radio Group"
      description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
      componentName="radio-group"
      dependencies="@radix-ui/react-radio-group"
      code={code}
    >
      <RadioGroupDemo />
    </ComponentWrapper>
  );
}
