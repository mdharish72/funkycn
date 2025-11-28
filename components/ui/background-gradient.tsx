"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative p-[4px] group",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_at_50%_50%,var(--secondary),transparent_50%)]",
          "bg-[length:200%_200%] animate-gradient-xy",
          animate ? "animate-gradient-xy" : ""
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform bg-[radial-gradient(circle_at_50%_50%,var(--primary),transparent_50%)]",
          "bg-[length:200%_200%] animate-gradient-xy",
          animate ? "animate-gradient-xy" : ""
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

