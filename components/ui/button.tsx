"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Button = ({
    children,
    className,
    onClick,
}: {
    children?: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
}) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "w-full bg-white rounded-xl border border-neutral-100 dark:bg-black dark:border-white/ hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center",
                className
            )}
        // Remove as={HTMLDivElement}
        >
            <div className="absolute inset-0 dark:bg-dot-white/ bg-dot-black/" />
            <div className="relative z-40">{children}</div>
        </div>
    );
};