import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyLabel } from "@/components/ui/funky-label";
import { FunkyTextarea } from "@/components/ui/funky-textarea";
import fs from "fs";
import path from "path";

export default async function FunkyTextareaPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-textarea.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Textarea"
      description="Displays a form textarea or a component that looks like a textarea."
      componentName="funky-textarea"
      code={code}
    >
      <div className="grid w-full gap-3">
        <FunkyLabel htmlFor="message">Description</FunkyLabel>
        <FunkyTextarea placeholder="Enter your description" id="message" />
      </div>
    </ComponentWrapper>
  );
}
