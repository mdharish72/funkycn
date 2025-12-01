import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkySwitch } from "@/components/ui/funky-switch";
import { FunkyLabel } from "@/components/ui/funky-label";
import fs from "fs";
import path from "path";

export default async function FunkySwitchPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-switch.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Switch"
      description="A control that allows the user to toggle between checked and not checked."
      componentName="funky-switch"
      dependencies="@radix-ui/react-switch"
      code={code}
    >
      <div className="flex items-center space-x-2">
        <FunkySwitch id="airplane-mode" />
        <FunkyLabel htmlFor="airplane-mode">Airplane Mode</FunkyLabel>
      </div>
    </ComponentWrapper>
  );
}

