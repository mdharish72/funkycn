import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { FunkyInput } from "@/components/ui/funky-input";
import { FunkyLabel } from "@/components/ui/funky-label";
import fs from "fs";
import path from "path";

export default async function FunkyInputPage() {
  const filePath = path.join(process.cwd(), "components/ui/funky-input.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Funky Input"
      description="Displays a form input field or a component that looks like an input field."
      componentName="funky-input"
      code={code}
    >
      <div className="grid w-full max-w-sm items-center gap-3">
        <FunkyLabel htmlFor="email">Email</FunkyLabel>
        <FunkyInput type="email" id="email" placeholder="your email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-3 mt-4">
        <FunkyLabel htmlFor="password">Password</FunkyLabel>
        <FunkyInput type="password" id="password" placeholder="password" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-3 mt-4">
        <FunkyLabel htmlFor="username">Username</FunkyLabel>
        <FunkyInput type="text" id="username" placeholder="you@example.com" />
      </div>
    </ComponentWrapper>
  );
}
