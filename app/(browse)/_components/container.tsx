"use client";

import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

interface ContainerProps {
    children: React.ReactNode;
};

export const Container = ({
    children,
}: ContainerProps) => {
    // checks if the screen is mobile
    const matches = useMediaQuery("(max-width: 1024px)");
    const {
        collapsed,
        onCollapse,
        onExpand,
    } = useSidebar((state) => state)

    // Collapse sidebar on mobile
    useEffect(() => {
        if (matches) {
            onCollapse();
        } else {
            onExpand();
        }
    }, [matches, onCollapse, onExpand]);

    return (
        <div className={cn (
            "flex-1",
            collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60"
        )}>
            {children}
        </div>
    );
};