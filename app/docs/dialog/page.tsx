import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { DialogDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function DialogPage() {
  const filePath = path.join(process.cwd(), "components/ui/dialog.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Dialog"
      description="A window overlaid on either the primary window or another dialog window."
      componentName="dialog"
      dependencies="@radix-ui/react-dialog"
      code={code}
    >
      <DialogDemo />
    </ComponentWrapper>
  );
}
