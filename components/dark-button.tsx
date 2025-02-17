"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DarkIcon, LightIcon } from "@/components/icons/logos";
import { useTheme } from "next-themes";

export const DarkModeButton = () => {
    const [clientLoaded, setClientLoaded] = useState(false); // Add clientLoaded state
    const { setTheme, theme, resolvedTheme } = useTheme();

    useEffect(() => {
        setClientLoaded(true);
    },);

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark")}
        >
            {clientLoaded && ( // Conditionally render icons on client-side
                <>
                    {theme === "dark" || resolvedTheme === "dark" ? (
                        <LightIcon className="h-[1.2rem] w-[1.2rem]" />
                    ) : (
                        <DarkIcon className="h-[1.2rem] w-[1.2rem]" />
                    )}
                </>
            )}
        </Button>
    );
};