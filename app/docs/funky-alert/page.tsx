import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyAlert, FunkyAlertDescription, FunkyAlertTitle } from "@/components/ui/funky-alert";
import { Rocket } from "lucide-react";
import fs from "fs";
import path from "path";

export default async function FunkyAlertPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-alert.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Alert"
      description="Displays a callout for user attention."
      componentName="funky-alert"
      dependencies="lucide-react"
      code={code}
    >
      <div className="w-full max-w-lg">
        <FunkyAlert>
            <Rocket className="h-4 w-4" />
            <FunkyAlertTitle>Heads up!</FunkyAlertTitle>
            <FunkyAlertDescription>
                You can add components to your app using the cli.
            </FunkyAlertDescription>
        </FunkyAlert>
      </div>
    </ComponentWrapper>
  );
}

