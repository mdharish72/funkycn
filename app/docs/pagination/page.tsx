import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { PaginationDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function PaginationPage() {
  const filePath = path.join(process.cwd(), "components/ui/pagination.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Pagination"
      description="Pagination with page navigation, next and previous links."
      componentName="pagination"
      dependencies=""
      code={code}
    >
      <PaginationDemo />
    </ComponentWrapper>
  );
}
