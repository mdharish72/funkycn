import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyButton } from "@/components/ui/funky-button";
import {
  FunkyCard,
  FunkyCardContent,
  FunkyCardDescription,
  FunkyCardFooter,
  FunkyCardHeader,
  FunkyCardTitle,
} from "@/components/ui/funky-card";
import { FunkyInput } from "@/components/ui/funky-input";
import { FunkyLabel } from "@/components/ui/funky-label";
import fs from "fs";
import path from "path";

export default async function FunkyCardPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-card.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Card"
      description="Displays a card with header, content, and footer."
      componentName="funky-card"
      code={code}
    >
      <FunkyCard className="w-[350px]">
        <FunkyCardHeader>
          <FunkyCardTitle>Create project</FunkyCardTitle>
          <FunkyCardDescription>
            Deploy your new project in one-click.
          </FunkyCardDescription>
        </FunkyCardHeader>
        <FunkyCardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-3">
                <FunkyLabel htmlFor="name">Name</FunkyLabel>
                <FunkyInput id="name" placeholder="Name of your project" />
              </div>
            </div>
          </form>
        </FunkyCardContent>
        <FunkyCardFooter className="flex justify-between">
          <FunkyButton variant="outline">Cancel</FunkyButton>
          <FunkyButton>Deploy</FunkyButton>
        </FunkyCardFooter>
      </FunkyCard>
    </ComponentWrapper>
  );
}
