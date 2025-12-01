import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { HoverCardDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function HoverCardPage() {
  const filePath = path.join(process.cwd(), "components/ui/hover-card.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Hover Card"
      description="For sighted users to preview content available behind a link."
      componentName="hover-card"
      dependencies="@radix-ui/react-hover-card"
      code={code}
    >
      <HoverCardDemo />
    </ComponentWrapper>
  );
}
