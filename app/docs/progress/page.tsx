import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { ProgressDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function ProgressPage() {
  const filePath = path.join(process.cwd(), "components/ui/progress.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Progress"
      description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      componentName="progress"
      dependencies="@radix-ui/react-progress"
      code={code}
    >
      <ProgressDemo />
    </ComponentWrapper>
  );
}
