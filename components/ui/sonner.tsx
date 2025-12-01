"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-cream group-[.toaster]:text-foreground group-[.toaster]:comic-border group-[.toaster]:comic-shadow-4 font-display",
          description: "group-[.toast]:text-muted-foreground font-body",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-display comic-border-2 comic-shadow-2",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-display comic-border-2 comic-shadow-2",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
