import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { NavigationMenuDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function NavigationMenuPage() {
  const filePath = path.join(process.cwd(), "components/ui/navigation-menu.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Navigation Menu"
      description="A collection of links for navigating websites."
      componentName="navigation-menu"
      dependencies="@radix-ui/react-navigation-menu"
      code={code}
    >
      <NavigationMenuDemo />
    </ComponentWrapper>
  );
}
