import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { SeparatorDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function SeparatorPage() {
  const filePath = path.join(process.cwd(), "components/ui/separator.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Separator"
      description="Visually or semantically separates content."
      componentName="separator"
      dependencies="@radix-ui/react-separator"
      code={code}
    >
      <SeparatorDemo />
    </ComponentWrapper>
  );
}
