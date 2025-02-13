import Link from "next/link"
import siteMetadata from "@/config/metadata"
import { GithubIcon, LinkedinIcon, MailIcon, RSSIcon, TwitterIcon } from "./icons/social-icons"

export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col items-center mb-6 mt-14">
                <div className="flex mb-3 space-x-4">
                    <Link href={`mailto:${siteMetadata.email}`} className="text-sm text-gray-500 hover:text-gray-600">
                        <MailIcon className="w-6 h-6" />
                    </Link>
                    <Link href={siteMetadata.github} className="text-sm text-gray-500 hover:text-gray-600">
                        <GithubIcon className="w-6 h-6" />
                    </Link>
                    <Link href={siteMetadata.linkedin} className="text-sm text-gray-500 hover:text-gray-600">
                        <LinkedinIcon className="w-6 h-6" />
                    </Link>
                    <Link href={siteMetadata.twitter} className="text-sm text-gray-500 hover:text-gray-600">
                        <TwitterIcon className="w-6 h-6" />
                    </Link>
                    <Link href='#' className="text-sm text-gray-500 hover:text-gray-600">
                        <RSSIcon className="w-6 h-6" />
                    </Link>
                </div>
                <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Link href="/">{siteMetadata.title}</Link>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                </div>
            </div>
        </footer>
    )
}
