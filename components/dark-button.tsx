"use client"

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { LightIcon, DarkIcon } from "./icons/logos";

const DarkMode = () => {
    const [clientLoaded, setClientLoaded] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();


    useEffect(() => {
        setClientLoaded(true)
    }, [])


    return (
        <Button
            variant="outline"
            size="icon"
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

export default DarkMode;