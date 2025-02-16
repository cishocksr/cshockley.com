"use client";

import { ProjectData } from "@/content/projects";
import { DevIcon } from "./icons/dev-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { Suspense } from "react";

const MotionDiv = React.lazy(() => import("framer-motion").then(mod => ({ default: mod.motion.div })));

interface ProjectCardProps extends ProjectData {
    className?: string;
}

const ProjectCard = ({
    title,
    description,
    links,
    titleLink,
    icons,
    className,
}: ProjectCardProps) => (
    <div
        className={className ?? "md relative grow p-4 md:w-1/2 md:grow-0 2xl:w-1/3"}
    >
        <Suspense fallback={null}>
            <MotionDiv
                className={cn(
                    "relative h-full p-[2px] rounded-2xl", // Border styling
                    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
                    "overflow-hidden" // Essential for border effect
                )}
                style={{ backgroundSize: "200% 200%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            >
                <div className="relative h-full p-px rounded-2xl"> {/* Inner content */}
                    <div className="flex flex-col h-full gap-4 p-6 rounded-2xl bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-950 dark:to-gray-950">
                        <div className="h-full overflow-hidden rounded-lg ">
                            <div className="flex flex-col justify-between h-full ">
                                <div>
                                    <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                                        {titleLink ? (
                                            <Link href={titleLink} aria-label={`Link to ${title}`}>
                                                {title}
                                            </Link>
                                        ) : (
                                            title
                                        )}
                                    </h2>
                                    <p className="mb-3 text-gray-700 max-w-none dark:text-gray-400">
                                        {description}
                                    </p>
                                </div>
                                <div className="flex">
                                    {links &&
                                        links.map((link, index) => (
                                            <div key={`${title}-${link.title}-links`}>
                                                {index !== 0 && <span className="px-3">|</span>}
                                                <Link
                                                    key={`${title}-${link.title}`}
                                                    href={link.href}
                                                    className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                                    aria-label={`Link to ${link.title}`}
                                                >
                                                    {link.title}
                                                </Link>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex flex-row gap-3 bottom-4 right-4">
                            {icons &&
                                icons.map((icon) => (
                                    <DevIcon key={icon} kind={icon} alt={icon} />
                                ))}
                        </div>
                    </div>
                </div>
            </MotionDiv>
        </Suspense>
    </div>
);

export default ProjectCard;