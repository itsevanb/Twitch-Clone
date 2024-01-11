"use client";

import { Maximize, Minimize } from "lucide-react";

import { Hint } from "@/components/hint";

interface FullscreenControlProps {
  isFullscreen: boolean;
  onToggle: () => void;
};

export const FullscreenControl = ({
  isFullscreen,
  onToggle,
}: FullscreenControlProps) => {
  // if isFullscreen is true, show the minimize icon
  const Icon = isFullscreen ? Minimize : Maximize;

  // if isFullscreen is true, show the exit fullscreen label
  const label = isFullscreen ? "Exit fullscreen" : "Enter fullscreen"

  // return the button with the icon and label
  return (
    <div className="flex items-center justify-center gap-4">
      <Hint label={label} asChild>
        <button
          onClick={onToggle}
          className="text-white p-1.5 hover:bg-white/10 rounded-lg"
        >
          <Icon className="h-5 w-5" />
        </button>
      </Hint>
    </div>
  );
};