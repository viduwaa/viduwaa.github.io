import ProjectCard from "./ProjectCard";
import { ProjectItems } from "../../helpers/ProjectItems";



function Projects() {
    return (
        <>
            <section id="projects" className="min-h-[100dvh] flex">
                <div className="container m-auto flex flex-col items-center">
                    <div className="text-center text-5xl mb-5 ">
                        <h2>My Projects</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-5 p-5">
                        {ProjectItems.map((items, key) => {
                            return (
                                <ProjectCard
                                    key={key}
                                    prjbg={items.background}
                                    prjtitle={items.name}
                                    prjdesc={items.description}
                                    weblink={items.webSite}
                                    gitlink={items.gitRepo}
                                    index={key}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
