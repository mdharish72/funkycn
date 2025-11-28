import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { CarouselDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function CarouselPage() {
  const filePath = path.join(process.cwd(), "components/ui/carousel.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Carousel"
      description="A carousel with motion and swipe built using Embla."
      componentName="carousel"
      dependencies="embla-carousel-react"
      code={code}
    >
      <CarouselDemo />
    </ComponentWrapper>
  );
}
