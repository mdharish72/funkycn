import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { SheetDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function SheetPage() {
  const filePath = path.join(process.cwd(), "components/ui/sheet.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Sheet"
      description="Extends the Dialog component to display content that complements the main screen."
      componentName="sheet"
      dependencies="@radix-ui/react-dialog"
      code={code}
    >
      <SheetDemo />
    </ComponentWrapper>
  );
}
