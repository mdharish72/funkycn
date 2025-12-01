import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyBadge } from "@/components/ui/funky-badge";
import fs from "fs";
import path from "path";

export default async function FunkyBadgePage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-badge.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Badge"
      description="Displays a badge or a component that looks like a badge."
      componentName="funky-badge"
      code={code}
    >
      <div className="flex flex-wrap gap-4">
        <FunkyBadge>Default</FunkyBadge>
        <FunkyBadge variant="secondary">Secondary</FunkyBadge>
        <FunkyBadge variant="outline">Outline</FunkyBadge>
        <FunkyBadge variant="destructive">Destructive</FunkyBadge>
        <FunkyBadge variant="yellow">Yellow</FunkyBadge>
      </div>
    </ComponentWrapper>
  );
}

