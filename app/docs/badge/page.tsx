import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { BadgeDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function BadgePage() {
  const filePath = path.join(process.cwd(), "components/ui/badge.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
      componentName="badge"
      code={code}
    >
      <BadgeDemo />
    </ComponentWrapper>
  );
}
