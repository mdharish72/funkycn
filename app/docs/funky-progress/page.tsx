import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyProgress } from "@/components/ui/funky-progress";
import fs from "fs";
import path from "path";

export default async function FunkyProgressPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-progress.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Progress"
      description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      componentName="funky-progress"
      dependencies="@radix-ui/react-progress"
      code={code}
    >
      <FunkyProgress value={60} className="w-[60%]" />
    </ComponentWrapper>
  );
}

