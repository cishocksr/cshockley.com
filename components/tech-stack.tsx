"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";


const techStack = [
    "/images/tech-stack/bun-icon.svg",
    "/images/tech-stack/csharp-icon.svg",
    "/images/tech-stack/docker-icon.svg",
    "/images/tech-stack/figma-icon.svg",
    "/images/tech-stack/git-icon.svg",
    "/images/tech-stack/github.svg",
    "/images/tech-stack/next.svg",
    "/images/tech-stack/styled-components.svg",
    "/images/tech-stack/react.svg",
    "/images/tech-stack/tailwind.svg",
    "/images/tech-stack/javascript.svg",
    "/images/tech-stack/typescript.svg",
    "/images/tech-stack/python.svg",
];




const TechStackMarquee = () => {
    return (
        <Marquee className="bg-slate-900 dark:bg-[#0d1424] h-48 md:h-64 2xl:h-80 mt-10 flex items-center overflow-x-hidden">
            {techStack.map((icon) => (
                <div key={icon} className="px-6">
                    <Image src={icon} alt="" height={60} width={60} />
                </div>
            ))}
        </Marquee>
    );
};

export default TechStackMarquee;