import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { display, body } from "@/lib/fonts"
import "./globals.css";

export const metadata: Metadata = {
  title: "FunkyCN",
  description: "A comic-style UI library based on shadcn/ui",
};

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
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            forcedTheme="light"
            enableSystem={false}
            disableTransitionOnChange
      >
        {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
