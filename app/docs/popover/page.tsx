import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { PopoverDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function PopoverPage() {
  const filePath = path.join(process.cwd(), "components/ui/popover.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Popover"
      description="Displays rich content in a portal, triggered by a button."
      componentName="popover"
      dependencies="@radix-ui/react-popover"
      code={code}
    >
      <PopoverDemo />
    </ComponentWrapper>
  );
}
