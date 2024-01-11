"use client";

import { MessageSquare, Users } from "lucide-react";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { ChatVariant, useChatSidebar } from "@/store/use-chat-sidebar";

export const VariantToggle = () => {
  const {
    variant,
    onChangeVariant,
  } = useChatSidebar((state) => state);

  // dynamically render the correct icon depending on the variant state
  const isChat = variant === ChatVariant.CHAT;

  // toggles the variant state
  const Icon = isChat ? Users : MessageSquare

  // dynamically render the correct label depending on the variant state
  const onToggle = () => {
    const newVariant = isChat ? ChatVariant.COMMUNITY : ChatVariant.CHAT;
    onChangeVariant(newVariant);
  };

  const label = isChat ? "Community" : "Go back to chat";

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