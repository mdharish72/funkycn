import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { TableDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function TablePage() {
  const filePath = path.join(process.cwd(), "components/ui/table.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Table"
      description="A responsive table component."
      componentName="table"
      dependencies=""
      code={code}
    >
      <TableDemo />
    </ComponentWrapper>
  );
}
