import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { SliderDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function SliderPage() {
  const filePath = path.join(process.cwd(), "components/ui/slider.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Slider"
      description="An input where the user selects a value from within a given range."
      componentName="slider"
      dependencies="@radix-ui/react-slider"
      code={code}
    >
      <SliderDemo />
    </ComponentWrapper>
  );
}
