"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import hero from "@/public/images/cshock.png";

export function Header() {
    const pathname = usePathname();

    return (
        <section className="relative ">
            <div className="mx-auto mb-24 grid h-auto max-w-7xl auto-rows-min grid-cols-4 gap-x-4 pt-0 md:grid-cols-8 lg:relative lg:mb-64 lg:min-h-[40rem] lg:grid-cols-12 lg:gap-x-6 lg:pb-12 lg:pt-24">
                <div className="pt-6 col-span-full lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight typing-demo dark:text-white md:text-5xl xl:text-6xl">
                        I &apos;m Chris
                    </h1>
                    <p className="max-w-2xl mb-6 text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                        Full-stack Developer With A Passion For Front-End Development and
                        Cloud Solutions
                    </p>
                    <div className="flex w-full gap-2">
                        {pathname !== "/blog" && (
                            <Button
                                href="/blog"
                                className="px-5 py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-800"
                            >
                                View my blog
                            </Button>
                        )}
                        <Button
                            href="/projects"
                            className="border border-[#FF0000] bg-[#FF0000] hover:bg-[#FF0000]/80 text-white font-bold py-3 px-5 rounded-lg"
                        >
                            View my projects
                        </Button>
                    </div>
                </div>
                <div className="col-span-full mb-12 flex items-center justify-center lg:col-span-7 lg:col-start-6 lg:-mt-24 lg:mb-0 lg:mr-[-5vw] lg:px-0">
                    <div className="relative w-full">
                        <Image
                            src={hero}
                            quality={50}
                            alt={"ai generated cartoon image of a man working on laptop "}
                            priority
                            className="max-h-[50vh] w-full object-contain lg:max-h-[75vh]"
                            sizes="(max-width: 1024px) 60vw, 100vw"
                        />

                        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white to-transparent dark:from-black"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}