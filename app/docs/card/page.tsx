import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { CardDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function CardPage() {
  const filePath = path.join(process.cwd(), "components/ui/card.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Card"
      description="Displays a card with header, content, and footer."
      componentName="card"
      code={code}
    >
      <CardDemo />
    </ComponentWrapper>
  );
}
