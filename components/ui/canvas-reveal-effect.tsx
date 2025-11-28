"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative bg-card w-full", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors ?? [[0, 255, 255]]}
          dotSize={dotSize ?? 3}
          opacities={opacities ?? [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]}
          shader={`
              float animation_speed_factor = ${animationSpeed.toFixed(1)};
              float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2);
              return step(intro_offset, u_time * animation_speed_factor) * 1.0;
            `}
          center={["x", "y"]}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
      )}
    </div>
  );
};

const DotMatrix = ({
  colors,
  opacities,
  totalSize = 4,
  dotSize,
  shader,
  center,
}: {
  colors: number[][];
  opacities: number[];
  totalSize?: number;
  dotSize: number;
  shader: string;
  center: ("x" | "y")[];
}) => {
  const uniforms = {
    u_colors: {
      value: colors.map((color) => [
        color[0] / 255,
        color[1] / 255,
        color[2] / 255,
      ]),
      type: "uniform3fv",
    },
    u_opacities: {
      value: opacities,
      type: "uniform1fv",
    },
    u_total_size: {
      value: totalSize,
      type: "uniform1f",
    },
    u_dot_size: {
      value: dotSize,
      type: "uniform1f",
    },
  };

  return (
    <div className="h-full w-full relative">
        {/* Placeholder for complex canvas shader implementation */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
            Canvas Reveal Placeholder
        </div>
    </div>
  );
};

