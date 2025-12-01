import type { Metadata } from "next";
import { Providers } from "./providers"
import { display, body } from "@/lib/fonts"
import "./globals.css";

export const metadata: Metadata = {
  title: "FunkyCN",
  description: "A comic-style UI library based on shadcn/ui",
};

import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} antialiased min-h-screen bg-background font-body text-foreground`}
      >
        <Providers
            themeProps={{
              attribute: "class",
              defaultTheme: "light",
              forcedTheme: "light",
              enableSystem: false,
              disableTransitionOnChange: true,
            }}
      >
        {children}
        <Toaster />
          </Providers>
      </body>
    </html>
  );
}
