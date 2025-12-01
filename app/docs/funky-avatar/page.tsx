import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyAvatar, FunkyAvatarFallback, FunkyAvatarImage } from "@/components/ui/funky-avatar";
import fs from "fs";
import path from "path";

export default async function FunkyAvatarPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-avatar.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Avatar"
      description="An image element with a fallback for representing the user."
      componentName="funky-avatar"
      dependencies="@radix-ui/react-avatar"
      code={code}
    >
      <div className="flex gap-4">
        <FunkyAvatar>
            <FunkyAvatarImage src="https://github.com/shadcn.png" />
            <FunkyAvatarFallback>CN</FunkyAvatarFallback>
        </FunkyAvatar>
        <FunkyAvatar>
            <FunkyAvatarFallback>FK</FunkyAvatarFallback>
        </FunkyAvatar>
      </div>
    </ComponentWrapper>
  );
}

