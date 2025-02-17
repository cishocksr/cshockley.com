import ProjectCard from "@/components/project-card"
import projectsData from "@/content/projects"





export const metadata = {
    title: "Projects",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt, nam, modi, placeat magni minima quas in cumque expedita dolores quisquam. Itaque eaque perferendis, distinctio amet nulla laudantium sit veritatis.
`,
}

export default async function Projects() {
    return (
        <div className="container max-w-4xl divide-y divide-gray-200 dark:divide-gray-700">
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Projects
                </h1>
                <p className="text-lg leading-7 text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum laborum tempora doloribus fugit eius ad, consequuntur harum magnam, recusandae tempore cum soluta dolorum cumque nisi ipsam beatae qui aperiam.
                </p>
            </div>
            <div className="pt-12 ">
                <div className="flex flex-wrap -m-4">
                    {projectsData.map((d) => (
                        <ProjectCard
                            key={d.title}
                            title={d.title}
                            description={d.description}
                            titleLink={d.titleLink}
                            links={d.links}
                            icons={d.icons}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
