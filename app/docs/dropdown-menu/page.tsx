import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { DropdownMenuDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function DropdownMenuPage() {
  const filePath = path.join(process.cwd(), "components/ui/dropdown-menu.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Dropdown Menu"
      description="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      componentName="dropdown-menu"
      dependencies="@radix-ui/react-dropdown-menu"
      code={code}
    >
      <DropdownMenuDemo />
    </ComponentWrapper>
  );
}
