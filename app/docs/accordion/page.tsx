import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { AccordionDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function AccordionPage() {
  const filePath = path.join(process.cwd(), "components/ui/accordion.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Accordion"
      description="A vertically stacked set of interactive headings that each reveal a section of content."
      componentName="accordion"
      dependencies="@radix-ui/react-accordion"
      code={code}
    >
      <AccordionDemo />
    </ComponentWrapper>
  );
}
