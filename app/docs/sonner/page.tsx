import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { SonnerDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function SonnerPage() {
  const filePath = path.join(process.cwd(), "components/ui/sonner.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Sonner"
      description="An opinionated toast component for React."
      componentName="sonner"
      dependencies="sonner"
      code={code}
    >
      <SonnerDemo />
    </ComponentWrapper>
  );
}
