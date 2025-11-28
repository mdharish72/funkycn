import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { ButtonDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function ButtonPage() {
  const filePath = path.join(process.cwd(), "components/ui/button.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Button"
      description="Displays a button or a component that looks like a button."
      componentName="button"
      dependencies="@radix-ui/react-slot"
      code={code}
    >
      <ButtonDemo />
    </ComponentWrapper>
  );
}
