import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyRadioGroup, FunkyRadioGroupItem } from "@/components/ui/funky-radio-group";
import { FunkyLabel } from "@/components/ui/funky-label";
import fs from "fs";
import path from "path";

export default async function FunkyRadioGroupPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-radio-group.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Radio Group"
      description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
      componentName="funky-radio-group"
      dependencies="@radix-ui/react-radio-group"
      code={code}
    >
      <FunkyRadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
            <FunkyRadioGroupItem value="option-one" id="option-one" />
            <FunkyLabel htmlFor="option-one">Option One</FunkyLabel>
        </div>
        <div className="flex items-center space-x-2">
            <FunkyRadioGroupItem value="option-two" id="option-two" />
            <FunkyLabel htmlFor="option-two">Option Two</FunkyLabel>
        </div>
      </FunkyRadioGroup>
    </ComponentWrapper>
  );
}

