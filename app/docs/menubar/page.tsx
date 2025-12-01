import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { MenubarDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function MenubarPage() {
  const filePath = path.join(process.cwd(), "components/ui/menubar.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Menubar"
      description="A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands."
      componentName="menubar"
      dependencies="@radix-ui/react-menubar"
      code={code}
    >
      <MenubarDemo />
    </ComponentWrapper>
  );
}
