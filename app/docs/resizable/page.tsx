import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { ResizableDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function ResizablePage() {
  const filePath = path.join(process.cwd(), "components/ui/resizable.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Resizable"
      description="Accessible resizable panel groups and layouts with keyboard support."
      componentName="resizable"
      dependencies="react-resizable-panels"
      code={code}
    >
      <ResizableDemo />
    </ComponentWrapper>
  );
}
