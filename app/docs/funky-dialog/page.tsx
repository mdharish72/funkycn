import { ComponentWrapper } from "@/components/docs/component-wrapper";
import {
  FunkyDialog,
  FunkyDialogContent,
  FunkyDialogDescription,
  FunkyDialogFooter,
  FunkyDialogHeader,
  FunkyDialogTitle,
  FunkyDialogTrigger,
} from "@/components/ui/funky-dialog";
import { FunkyButton } from "@/components/ui/funky-button";
import fs from "fs";
import path from "path";

export default async function FunkyDialogPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-dialog.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Dialog"
      description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
      componentName="funky-dialog"
      dependencies="@radix-ui/react-dialog"
      code={code}
    >
      <FunkyDialog>
        <FunkyDialogTrigger asChild>
            <FunkyButton variant="outline">Open Dialog</FunkyButton>
        </FunkyDialogTrigger>
        <FunkyDialogContent className="sm:max-w-[425px]">
            <FunkyDialogHeader>
                <FunkyDialogTitle>Edit profile</FunkyDialogTitle>
                <FunkyDialogDescription>
                    Make changes to your profile here. Click save when you&apos;re done.
                </FunkyDialogDescription>
            </FunkyDialogHeader>
            <div className="grid gap-4 py-4">
                {/* Content would go here */}
                <p>Profile details...</p>
            </div>
            <FunkyDialogFooter>
                <FunkyButton type="submit">Save changes</FunkyButton>
            </FunkyDialogFooter>
        </FunkyDialogContent>
      </FunkyDialog>
    </ComponentWrapper>
  );
}

