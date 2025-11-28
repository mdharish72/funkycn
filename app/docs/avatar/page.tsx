import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { AvatarDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function AvatarPage() {
  const filePath = path.join(process.cwd(), "components/ui/avatar.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Avatar"
      description="An image element with a fallback for representing the user."
      componentName="avatar"
      dependencies="@radix-ui/react-avatar"
      code={code}
    >
      <AvatarDemo />
    </ComponentWrapper>
  );
}
