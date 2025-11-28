import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { DrawerDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function DrawerPage() {
  const filePath = path.join(process.cwd(), "components/ui/drawer.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Drawer"
      description="A drawer component for React."
      componentName="drawer"
      dependencies="vaul"
      code={code}
    >
      <DrawerDemo />
    </ComponentWrapper>
  );
}
