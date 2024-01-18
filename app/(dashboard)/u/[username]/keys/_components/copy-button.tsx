"use client";

import { Button } from "@/components/ui/button";
import { CheckCheck, Copy } from "lucide-react";

import { useState } from "react";

interface CopyButtonProps {
    value?: string;
}

export const CopyButton = ({
    value,
}: CopyButtonProps) => {
    const [isCopied, setIsCopied] = useState(false);

    // indicate to user that button was clicked and copied to clipboard
    const onCopy = () => {
        if (!value) return;

        setIsCopied(true);
        navigator.clipboard.writeText(value);
        setTimeout(() => {
            setIsCopied(false); 
        }, 1000);
    };

    // copy icon
    const Icon = isCopied? CheckCheck : Copy;

    return (
        <Button 
        onClick={onCopy}
        disabled={!value || isCopied}
        variant="ghost"
        size="sm"
        >
            <Icon className="w-4 h-4"/>
        </Button>
    )
}