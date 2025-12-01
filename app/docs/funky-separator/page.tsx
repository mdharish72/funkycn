import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkySeparator } from "@/components/ui/funky-separator";
import fs from "fs";
import path from "path";

export default async function FunkySeparatorPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-separator.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Separator"
      description="Visually or semantically separates content."
      componentName="funky-separator"
      dependencies="@radix-ui/react-separator"
      code={code}
    >
      <div>
        <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
            <p className="text-sm text-muted-foreground">
                An open-source UI component library.
            </p>
        </div>
        <FunkySeparator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <FunkySeparator orientation="vertical" />
            <div>Docs</div>
            <FunkySeparator orientation="vertical" />
            <div>Source</div>
        </div>
      </div>
    </ComponentWrapper>
  );
}

