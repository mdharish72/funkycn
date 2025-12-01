import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { TabsDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function TabsPage() {
  const filePath = path.join(process.cwd(), "components/ui/tabs.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Tabs"
      description="A set of layered sections of content—known as tab panels—that are displayed one at a time."
      componentName="tabs"
      dependencies="@radix-ui/react-tabs"
      code={code}
    >
      <TabsDemo />
    </ComponentWrapper>
  );
}
