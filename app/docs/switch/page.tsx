import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { SwitchDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function SwitchPage() {
  const filePath = path.join(process.cwd(), "components/ui/switch.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Switch"
      description="A control that allows the user to toggle between checked and not checked."
      componentName="switch"
      dependencies="@radix-ui/react-switch"
      code={code}
    >
      <SwitchDemo />
    </ComponentWrapper>
  );
}
