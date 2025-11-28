import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { BreadcrumbDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function BreadcrumbPage() {
  const filePath = path.join(process.cwd(), "components/ui/breadcrumb.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Breadcrumb"
      description="Displays the path to the current resource using a hierarchy of links."
      componentName="breadcrumb"
      code={code}
    >
      <BreadcrumbDemo />
    </ComponentWrapper>
  );
}
