import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { AspectRatioDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function AspectRatioPage() {
  const filePath = path.join(process.cwd(), "components/ui/aspect-ratio.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Aspect Ratio"
      description="Displays content within a desired ratio."
      componentName="aspect-ratio"
      dependencies="@radix-ui/react-aspect-ratio"
      code={code}
    >
      <AspectRatioDemo />
    </ComponentWrapper>
  );
}
