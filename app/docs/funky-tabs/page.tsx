import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyTabs, FunkyTabsContent, FunkyTabsList, FunkyTabsTrigger } from "@/components/ui/funky-tabs";
import fs from "fs";
import path from "path";

export default async function FunkyTabsPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-tabs.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Tabs"
      description="A set of layered sections of content—known as tab panels—that are displayed one at a time."
      componentName="funky-tabs"
      dependencies="@radix-ui/react-tabs"
      code={code}
    >
      <FunkyTabs defaultValue="account" className="w-[400px]">
        <FunkyTabsList>
            <FunkyTabsTrigger value="account">Account</FunkyTabsTrigger>
            <FunkyTabsTrigger value="password">Password</FunkyTabsTrigger>
        </FunkyTabsList>
        <FunkyTabsContent value="account">Make changes to your account here.</FunkyTabsContent>
        <FunkyTabsContent value="password">Change your password here.</FunkyTabsContent>
      </FunkyTabs>
    </ComponentWrapper>
  );
}

