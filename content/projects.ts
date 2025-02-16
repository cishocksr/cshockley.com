import { DevIconTypes } from "@/components/icons/dev-icons";

export interface ProjectData {
    title: string;
    description: string;
    titleLink: string;
    links: {
        title: string;
        href: string;
    }[];
    icons: DevIconTypes[];
}

const projectsData: ProjectData[] = [
    {
        title: "cishockley.com",
        description:
            "This site! A dynamic website designed to showcase my coding skills and expertise across a range of different frameworks. As I learn and explore new technologies, this project evolves, as I test out frameworks at the forefront of the latest trends in software engineering. Currently on v4, previous versions include: pure HTML, Gatsby React, Svelte Static Site and now Next.JS!",
        titleLink: "https://cishockley.com",
        links: [
            { title: "GitHub", href: "https://github.com/cishocksr/cshockley.com" },
        ],
        icons: ["next", "tailwind", "typescript"],
    },
    {
        title: "Pathfinder",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum laborum tempora doloribus fugit eius ad, consequuntur harum magnam, recusandae tempore cum soluta dolorum cumque nisi ipsam beatae qui aperiam.",
        titleLink: "https://pathfinder-ecru.vercel.app",
        links: [
            {
                title: "Github",
                href: "https://github.com/cishocksr/pathfinder",
            },
        ],
        icons: ["react"],
    },
]

export default projectsData;