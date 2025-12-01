import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { SkeletonDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function SkeletonPage() {
  const filePath = path.join(process.cwd(), "components/ui/skeleton.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Skeleton"
      description="Use to show a placeholder while content is loading."
      componentName="skeleton"
      dependencies=""
      code={code}
    >
      <SkeletonDemo />
    </ComponentWrapper>
  );
}
