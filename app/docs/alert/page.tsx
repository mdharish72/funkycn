import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { AlertDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function AlertPage() {
  const filePath = path.join(process.cwd(), "components/ui/alert.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Alert"
      description="Displays a callout for user attention."
      componentName="alert"
      code={code}
    >
      <AlertDemo />
    </ComponentWrapper>
  );
}
