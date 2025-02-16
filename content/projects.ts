export interface ProjectData {
    title: string;
    description: string;
    titleLink: string;
    links: {
        title: string;
        href: string;
    }[];
    icons: string[];
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
            "A OpenAI powered chat application with access to realtime F1 data. You can ask about events of the race, conditions and even transcribe radio messages. Uses Vercel Generative UI to reply with components for a better user experience.",
        titleLink: "https://pathfinder-ecru.vercel.app",
        links: [
            {
                title: "Github",
                href: "https://github.com/cishocksr/pathfinder",
            },
        ],
        icons: ["react", "typescript"],
    },
]

export default projectsData;