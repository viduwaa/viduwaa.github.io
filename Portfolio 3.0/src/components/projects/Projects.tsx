import ProjectCard from "./ProjectCard";
import { ProjectItems } from "../../helpers/ProjectItems";
import { useContext } from "react";
import { SiteContext } from "../../helpers/SiteContext";
import { motion } from "framer-motion";

function Projects() {
  const { fadeinAnimationstoUp } = useContext(SiteContext);
  return (
    <>
      <section id="projects" className="text-text dark flex min-h-[100dvh]">
        <div className="container m-auto flex flex-col items-center">
          <motion.div
            className="bg-primary text-accent mb-5 rounded-md p-3 text-center text-5xl"
            variants={fadeinAnimationstoUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2>My Projects</h2>
          </motion.div>
          <div className="grid w-full grid-cols-1 gap-8 p-5 sm:grid-cols-2 md:grid-cols-4">
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
