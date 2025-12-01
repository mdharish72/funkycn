import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkySlider } from "@/components/ui/funky-slider";
import fs from "fs";
import path from "path";

export default async function FunkySliderPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-slider.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Slider"
      description="An input where the user selects a value from within a given range."
      componentName="funky-slider"
      dependencies="@radix-ui/react-slider"
      code={code}
    >
      <FunkySlider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
    </ComponentWrapper>
  );
}

