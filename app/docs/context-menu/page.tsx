import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { ContextMenuDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function ContextMenuPage() {
  const filePath = path.join(process.cwd(), "components/ui/context-menu.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Context Menu"
      description="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      componentName="context-menu"
      dependencies="@radix-ui/react-context-menu"
      code={code}
    >
      <ContextMenuDemo />
    </ComponentWrapper>
  );
}
