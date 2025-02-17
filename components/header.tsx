import Image from "next/image"
import Link from "next/link"

import hero from "@/public/images/cshock.png"

import siteMetadata from "@/config/metadata"

import Youtube from "@/components/social-icons/youtube.svg"

export function Header() {
    return (
        <section className="relative ">
            <div className="grid grid-cols-1 pt-0 mx-auto mb-24 gap-y-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-6 lg:pb-12 lg:pt-24 max-w-7xl">
                <div className="items-center pt-6 pl-5 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col"> {/* Removed justify-center here */}
                    <div className="w-full text-center"> {/* Added a wrapper div for text centering */}
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight typing-demo dark:text-white md:text-5xl xl:text-6xl">
                            Hello, I'm Chris
                        </h1>
                        <p className="max-w-2xl mb-6 text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                            Software Developer, with a passion for building scalable, user-friendly software
                        </p>
                    </div> {/* End of wrapper div */}
                    <div className="flex justify-center w-full"> {/* justify-center here for the button */}
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                        >
                            View my projects
                        </Link>
                    </div>
                </div>
                <div className="mb-12 flex items-center justify-center lg:col-span-7 lg:col-start-6 lg:-mt-24 lg:mb-0 lg:mr-[-5vw] lg:px-0">
                    <div className="relative w-full">
                        <Image
                            src={hero}
                            quality={50}
                            alt={
                                "cartoon image of james shopland with icons of programming languages surrounding him"
                            }
                            priority
                            className="object-contain w-full "
                            sizes="(max-width: 768px) 100vw, (min-width: 769px) 60vw"
                        />

                        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white to-transparent dark:from-black"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
