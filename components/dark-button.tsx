"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { LightIcon, DarkIcon } from "./icons/logos";

export const DarkModeButton = () => {
    const [clientLoaded, setClientLoaded] = useState(false);
    const { setTheme, theme, resolvedTheme } = useTheme();

    useEffect(() => {
        setClientLoaded(true);
    }, [setClientLoaded]);

    return (
        <Button
            onClick={() => setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark")}
        >
            {clientLoaded && (
                <div className="relative size-8">
                    {theme === "dark" ? <LightIcon /> : <DarkIcon />}
                </div>
            )}
        </Button>
    );
};