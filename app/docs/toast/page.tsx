import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { ToastDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function ToastPage() {
  const filePath = path.join(process.cwd(), "components/ui/sonner.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Toast"
      description="A succinct message that is displayed temporarily. (Using Sonner)"
      componentName="sonner"
      dependencies="sonner"
      code={code}
    >
      <ToastDemo />
    </ComponentWrapper>
  );
}
