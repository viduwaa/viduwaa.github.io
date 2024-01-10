import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const fadeinAnimations = {
  initial: {
    opacity: 0,
    y: 150,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

type ProjectCardProps = {
  prjbg: string;
  prjtitle: string;
  prjdesc: string;
  weblink: string | null;
  gitlink: string;
  index: number;
};

function ProjectCard({
  prjbg,
  prjtitle,
  prjdesc,
  weblink,
  gitlink,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      className={
        "card-bg flex max-h-[350px] min-h-[250px] min-w-[1fr] items-end overflow-hidden rounded-md border-text  border shadow-md backdrop-blur-sm"
      }
      style={{ backgroundImage: `url(${prjbg})` }}
      variants={fadeinAnimations}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ scale: 1.1 }}
    >
      <div className="w-full text-center text-white backdrop-blur-lg ">
        <h2 className="p-1 text-xl prjtitle">{prjtitle}</h2>
        <h3 className="mb-1 p-2 text-white font-thin prjdesc">{prjdesc}</h3>
        <ul className="card-des mb-[-30px] flex items-center justify-center gap-5">
          {!(weblink === null) ? (
            <li className="">
              <Link
                to={weblink}
                target="_blank"
                className="card-link-web text-blue-500 hover:text-white"
              >
                <FaGlobe size={40} />
              </Link>
            </li>
          ) : (
            <></>
          )}

          <li className="">
            <Link
              to={gitlink}
              target="_blank"
              className="card-link-git text-red-500 hover:text-white transition-all ease-linear"
            >
              <FaGithub size={40} />
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
