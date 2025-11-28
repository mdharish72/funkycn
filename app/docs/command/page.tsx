import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { CommandDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function CommandPage() {
  const filePath = path.join(process.cwd(), "components/ui/command.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Command"
      description="Fast, composable, unstyled command menu for React."
      componentName="command"
      dependencies="cmdk"
      code={code}
    >
      <CommandDemo />
    </ComponentWrapper>
  );
}
