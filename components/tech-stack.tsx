"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";


const techStack = [
    "/images/tech-stack/next.svg",
    "/images/tech-stack/styled-components.svg",
    "/images/tech-stack/reactjs-icon.svg",
    "/images/tech-stack/tailwindcss-icon.svg",
    "/images/tech-stack/javascript.svg",
    "/images/tech-stack/docker-icon.svg",
    "/images/tech-stack/figma-icon.svg",
    "/images/tech-stack/typescriptlang-icon.svg",
    "/images/tech-stack/python-icon.svg",
];




const TechStackMarquee = () => {
    return (
        <Marquee className="bg-slate-900 dark:bg-[#0d1424] h-48 md:h-64 2xl:h-80 mt-10 flex items-center overflow-x-hidden">
            {techStack.map((icon) => (
                <div key={icon} className="px-6">
                    <img src={icon} alt="" height={60} width={60} />
                </div>
            ))}
        </Marquee>
    );
};

export default TechStackMarquee;