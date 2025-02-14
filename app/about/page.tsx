import Image from "next/image";
import siteMetadata from "@/config/metadata";
import {
    LinkedinIcon,
    GithubIcon,
    MailIcon,
    TwitterIcon,
} from "@/components/icons/social-icons";
import Link from "next/link";
import TechStackMarquee from "@/components/tech-stack"; // Assuming TechStack is 

export const metadata = {
    title: "About",
};

export default function About() {
    return (
        <div className="container divide-y divide-gray-200 dark:divide-gray-700">
            {/* Removed unnecessary divide-y */}
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    About me
                </h1>
            </div>

            <div className="pt-8 space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-2 xl:space-y-0">
                {/* Reduced xl:gap-x-4 to xl:gap-x-2 */}
                <div className="relative flex flex-col items-start pt-2 space-y-2 xl:items-start">
                    {/* Reduced pt-8 to pt-2 and reduced space-y */}
                    <Image
                        src={"/images/avatar.webp"}
                        alt="avatar"
                        width={192}
                        height={192}
                        className="object-cover object-[25%_25%] w-48 h-48 border border-gray-200 rounded-full shadow-md dark:border-gray-700"
                        priority={true}
                        sizes="192px"
                        placeholder="blur"
                        blurDataURL="/path/to/blur/placeholder.jpg"
                    />
                    <h2 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                        {siteMetadata.author}
                    </h2>
                    {/* Reduced spacing between these divs */}
                    <div className="text-left text-gray-700 dark:text-gray-400">
                        Software Developer
                    </div>{" "}
                    {/* Aligned to left */}
                    <div className="text-left text-gray-700 dark:text-gray-400">
                        Your Company
                    </div>{" "}
                    {/* Aligned to left */}
                    <div className="flex pt-4 space-x-3">
                        {/* Reduced pt-6 to pt-4 */}
                        <Link
                            href={`mailto:${siteMetadata.email}`}
                            className="text-sm text-gray-500 hover:text-gray-600"
                        >
                            <MailIcon className="w-6 h-6" />
                        </Link>
                        <Link
                            href={siteMetadata.github}
                            className="text-sm text-gray-500 hover:text-gray-600"
                        >
                            <GithubIcon className="w-6 h-6" />
                        </Link>
                        <Link
                            href={siteMetadata.linkedin}
                            className="text-sm text-gray-500 hover:text-gray-600"
                        >
                            <LinkedinIcon className="w-6 h-6" />
                        </Link>
                        <Link
                            href={siteMetadata.twitter}
                            className="text-sm text-gray-500 hover:text-gray-600"
                        >
                            <TwitterIcon className="w-6 h-6" />
                        </Link>
                    </div>

                    {/* HR Line moved here */}
                    <hr className="w-full my-4" /> {/* Added space above and below the HR line and made it span full width */}
                </div>
                <div className="pt-8 xl:col-span-2">
                    {/* Text content area */}
                    <div className="prose dark:prose-invert max-w-none">
                        {/* Added prose class */}
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
                            orci enim. Suspendisse potenti. Integer quis ligula ipsum. Sed
                            vulputate sapien arcu, et euismod libero tincidunt at. Donec
                            interdum, est vitae tincidunt euismod, justo ipsum varius orci, vel
                            elementum nisi libero id magna.
                        </p>
                        <p>
                            Aliquam erat volutpat. Nulla quis ligula ipsum. Suspendisse
                            potenti. In hac habitasse platea dictumst. Sed nec orci enim.
                            Nulla nec orci enim.
                        </p>
                    </div>
                </div>
            </div>

            {/* Second Component Area */}
            <div className="pt-8">
                {/* Added some top padding */}
                <TechStackMarquee />
            </div>
        </div>
    );
}