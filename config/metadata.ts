// @ts-check

import { SiteConfig } from "./types"

const siteMetadata: SiteConfig = {
    title: "Chris Shockley",
    author: "Chris Shockley",
    headerTitle: "Chris Shockley",
    description:
        "Discover my personal website, where I showcase my coding skills and expertise in software engineering. Explore a range of innovative software tools, blog posts, and project showcases that demonstrate my passion for problem-solving and creativity in the rapidly changing field of technology.",
    language: "en-us",
    theme: "system",
    siteUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://cshockley.com",
    siteRepo: "https://github.com/cishocksr/Cshockley.com",
    siteLogo: "/static/images/logo.png",
    image: "/static/images/avatar.png",
    socialBanner: "/static/images/twitter-card.png",
    email: "c.shocksr3@gmail.com",
    github: "https://github.com/cishocksr",
    twitter: "https://twitter.com/cshocksr",
    linkedin: "https://www.linkedin.com/in/christopherishockley",
    locale: "en-US",

}

export default siteMetadata