import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyAccordion, FunkyAccordionContent, FunkyAccordionItem, FunkyAccordionTrigger } from "@/components/ui/funky-accordion";
import fs from "fs";
import path from "path";

export default async function FunkyAccordionPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-accordion.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Accordion"
      description="A vertically stacked set of interactive headings that each reveal a section of content, with a funky twist."
      componentName="funky-accordion"
      dependencies="@radix-ui/react-accordion"
      code={code}
    >
      <div className="w-full max-w-lg bg-card p-6 rounded-xl border-2 border-border comic-shadow-2">
        <FunkyAccordion type="single" collapsible className="w-full">
            <FunkyAccordionItem value="item-1">
                <FunkyAccordionTrigger>Is it accessible?</FunkyAccordionTrigger>
                <FunkyAccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </FunkyAccordionContent>
            </FunkyAccordionItem>
            <FunkyAccordionItem value="item-2">
                <FunkyAccordionTrigger>Is it styled?</FunkyAccordionTrigger>
                <FunkyAccordionContent>
                    Yes. It comes with default styles that matches the other components&apos; aesthetic.
                </FunkyAccordionContent>
            </FunkyAccordionItem>
            <FunkyAccordionItem value="item-3">
                <FunkyAccordionTrigger>Is it animated?</FunkyAccordionTrigger>
                <FunkyAccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you prefer.
                </FunkyAccordionContent>
            </FunkyAccordionItem>
        </FunkyAccordion>
      </div>
    </ComponentWrapper>
  );
}

