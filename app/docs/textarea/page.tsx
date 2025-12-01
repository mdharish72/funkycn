import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { TextareaDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function TextareaPage() {
  const filePath = path.join(process.cwd(), "components/ui/textarea.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Textarea"
      description="Displays a form textarea or a component that looks like a textarea."
      componentName="textarea"
      dependencies=""
      code={code}
    >
      <TextareaDemo />
    </ComponentWrapper>
  );
}
