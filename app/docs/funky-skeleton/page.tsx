import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkySkeleton } from "@/components/ui/funky-skeleton";
import fs from "fs";
import path from "path";

export default async function FunkySkeletonPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-skeleton.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Skeleton"
      description="Use to show a placeholder while content is loading."
      componentName="funky-skeleton"
      code={code}
    >
      <div className="flex items-center space-x-4">
        <FunkySkeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
            <FunkySkeleton className="h-4 w-[250px]" />
            <FunkySkeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </ComponentWrapper>
  );
}

