import { ComponentWrapper } from "@/components/docs/component-wrapper";
import {
  FunkySheet,
  FunkySheetContent,
  FunkySheetDescription,
  FunkySheetHeader,
  FunkySheetTitle,
  FunkySheetTrigger,
} from "@/components/ui/funky-sheet";
import { FunkyButton } from "@/components/ui/funky-button";
import fs from "fs";
import path from "path";

export default async function FunkySheetPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-sheet.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Sheet"
      description="Extends the Dialog component to display content that complements the main screen of an application."
      componentName="funky-sheet"
      dependencies="@radix-ui/react-dialog"
      code={code}
    >
      <FunkySheet>
        <FunkySheetTrigger asChild>
            <FunkyButton variant="outline">Open Sheet</FunkyButton>
        </FunkySheetTrigger>
        <FunkySheetContent>
            <FunkySheetHeader>
                <FunkySheetTitle>Edit profile</FunkySheetTitle>
                <FunkySheetDescription>
                    Make changes to your profile here. Click save when you&apos;re done.
                </FunkySheetDescription>
            </FunkySheetHeader>
            <div className="grid gap-4 py-4">
                {/* Content would go here */}
                <p>Sheet content...</p>
            </div>
        </FunkySheetContent>
      </FunkySheet>
    </ComponentWrapper>
  );
}

