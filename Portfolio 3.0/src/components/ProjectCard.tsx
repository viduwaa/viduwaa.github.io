import { FaGithub, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

type ProjectCardProps = {
    prjbg: string;
    prjtitle: string;
    prjdesc: string;
    weblink: string | null;
    gitlink: string;
};

function ProjectCard({
    prjbg,
    prjtitle,
    prjdesc,
    weblink,
    gitlink,
}: ProjectCardProps) {
    return (
        <div
            className={
                "card-bg min-w-[1fr] min-h-[250px] max-h-[350px] flex items-end overflow-hidden rounded-lg backdrop-blur-sm shadow-md"
            }
            style={{ backgroundImage: `url(${prjbg})` }}
        >
            <div className="text-white backdrop-blur-lg w-full text-center ">
                <h2 className="text-xl p-1">{prjtitle}</h2>
                <h3 className="mb-1 p-2">{prjdesc}</h3>
                <ul className="card-des flex items-center justify-center gap-5 mb-[-30px]">
                    {!(weblink === null) ? (<li className="">
                        <Link
                            to={weblink}
                            target="_blank"
                            className="card-link-web hover:text-blue-500 "
                        >
                            <FaGlobe size={40} />
                        </Link>
                    </li>) : <></>}
                    
                    <li className="">
                        <Link
                            to={gitlink}
                            target="_blank"
                            className="card-link-git hover:text-red-500 "
                        >
                            <FaGithub size={40} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;
