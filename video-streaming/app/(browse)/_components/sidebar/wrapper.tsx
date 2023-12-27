"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

import { useState, useEffect } from "react";

import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";

interface WrapperProps {
    children: React.ReactNode;
};

export const Wrapper = ({
    children,
}: WrapperProps) => {
    const [isClient, setIsClient] = useState(false)
    const { collapsed } = useSidebar((state) => state)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return (
        <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-[#21292a] border-r border-[#2D2E35] z-50">
            <ToggleSkeleton />
            <RecommendedSkeleton />
        </aside>
    );

    return (
        <aside className={cn(
            "fixed left-0 flex flex-col w-60 h-full bg-[#21292a] border-r border-[#2D2E35] z-50",
            collapsed && "w-[70px]"
            )}>
            {children}
        </aside>
    );
};