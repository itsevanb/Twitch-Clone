"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useChatSidebar } from "@/store/use-chat-sidebar";

export const ChatToggle = () => {
  // extracting variables from the chat sidebar state
  const {
    collapsed,
    onExpand,
    onCollapse,
  } = useChatSidebar((state) => state);

  // dynamically render the correct icon depending on the collapsed state
  const Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine;

  // toggles the collapsed state
  const onToggle = () => {
    if (collapsed) {
      onExpand();
    } else {
      onCollapse();
    }
  };

  // dynamically render the correct label depending on the collapsed state
  const label = collapsed ? "Expand" : "Collapse";

  return (
    <Hint label={label} side="left" asChild>
      <Button
        onClick={onToggle}
        variant="ghost"
        className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent"
      >
        <Icon className="h-4 w-4" />
      </Button>
    </Hint>
  );
};