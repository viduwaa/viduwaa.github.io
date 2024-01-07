import { Link } from "react-router-dom";
import { MySocials } from "../../helpers/MySocials";
import EmailForm from "./EmailForm";
import { FaFileDownload } from "react-icons/fa";

function Contact() {
    return (
        <section
            className="min-h-[90vh] flex flex-col items-center justify-center"
            id="contact"
        >
            <div className="container m-auto grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center ">
                    <h1 className="text-5xl mb-[2%] mt-[10%]">
                        Get In Touch With me
                    </h1>

                    <ul
                        id="mySocials"
                        className="flex w-[50%] justify-evenly p-5"
                    >
                        {MySocials.map((item, key) => (
                            <li key={key}>
                                {" "}
                                <Link
                                    to={item.link}
                                    target="_blank"
                                    className={`hover:text-${item.hoverColor}`}
                                >
                                    {item.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button className="border border-black p-3 rounded">
                        <Link to="assets\VidulaDeneth_CV.pdf">
                            <h2 className="flex items-center gap-2 text-2xl">
                                {" "}
                                Download CV <FaFileDownload color="yellow"/>
                            </h2>
                        </Link>
                    </button>
                </div>
                <EmailForm />
            </div>
        </section>
    );
}

export default Contact;
