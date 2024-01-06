import { Link } from "react-router-dom";
import { MySocials } from "../helpers/MySocials";
import EmailForm from "./EmailForm";
import Footer from "./Footer";

function Contact() {
    return (
        <section
            className="min-h-[100vh] flex flex-col items-center justify-center"
            id="contact"
        >
            <div className="container m-auto grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center ">
                    <h1 className="text-5xl mb-[5%] mt-[20%]">Get In Touch With me</h1>

                    <ul id="mySocials" className="flex w-[50%] justify-evenly">
                        {MySocials.map((item, key) => (
                            <li key={key}>
                                {" "}
                                <Link
                                    to={item.link}
                                    target="_blank"
                                    className={`hover:text-[${item.hoverColor}]`}
                                >
                                    {item.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <EmailForm />
            </div>
            <Footer/>
        </section>
    );
}

export default Contact;
