"use client";

import Link from "next/link";
import Image, { ImageProps } from 'next/image';
import navLinks from "@/config/nav-links";
import DarkMode from "./dark-button";
import { Button } from "./ui/button";
import MobileNav from "./mobile-nav";

const Nav = () => {
    return (
        <nav className="flex items-center justify-around w-full pb-10 mx-auto max-w-8xl pt-[3.25rem]">
            <Link href="/">
                <Button className="flex items-center justify-center" >
                    <MainLogo className="dark:invert" />
                </Button>
            </Link>

            <div className="hidden items-center justify-center [@media(min-width:800px)]:flex">
                {navLinks.map((link) => (
                    <Link
                        key={link.title}
                        href={link.href}
                        className="m-1 font-medium text-gray-900 rounded-sm underlined decoration-2 hover:bg-gray-200 hover:underline hover:outline hover:outline-8 hover:outline-gray-200 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:outline-gray-800 sm:m-4"
                    >
                        {link.title}
                    </Link>
                ))}
            </div>

            <div className="ml-0 hidden min-[700px]:block">
                <DarkMode />
            </div>

            <MobileNav />
        </nav>
    );
};

export default Nav;

export const MainLogo = (props: Partial<ImageProps>) => (
    <Image
        src="/logo.svg"
        alt="Logo"
        width={50}
        height={50}
        className='m-auto'
        {...props}
    />
);