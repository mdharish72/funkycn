import { ComponentWrapper } from "@/components/docs/component-wrapper";
import { InputOTPDemo } from "./demo";
import fs from "fs";
import path from "path";

export default async function InputOTPPage() {
  const filePath = path.join(process.cwd(), "components/ui/input-otp.tsx");
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <ComponentWrapper
      title="Input OTP"
      description="Accessible one-time password component with copy paste functionality."
      componentName="input-otp"
      dependencies="input-otp"
      code={code}
    >
      <InputOTPDemo />
    </ComponentWrapper>
  );
}
