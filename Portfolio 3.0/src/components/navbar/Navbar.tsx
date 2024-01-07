import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

/* import { SiteContext } from "../helpers/SiteContext";
import { useContext } from "react"; */
import { Link } from "react-scroll";
import NavbarItems from "../../helpers/NavbarItems";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
    const [isToggled, setToggle] = useState(false);

    const navContainer = {
        visible: {
            //x: 0,
            opacity: 1,
            transition: {
                x: { velocity: 100 },
                duration: 0.3,
            },
        },
        hidden: {
            //x: -250,
            opacity: 0,
            transition: {
                x: { velocity: 100 },
                duration: 0.3,
            },
        },
    };
    return (
        <>
            <header className="bg-transparent p-3 fixed w-full z-10 backdrop-blur-sm">
                <nav
                    className="container flex m-auto items-center justify-between w-100 "
                    id="navbar"
                >
                    <div className="flex items-center gap-5">
                        <button
                            className="md:hidden"
                            onClick={() => setToggle(!isToggled)}
                        >
                            {!isToggled ? (
                                <RxHamburgerMenu size={40} />
                            ) : (
                                <IoMdClose size={40} />
                            )}
                        </button>
                        <AnimatePresence>
                            {isToggled && (
                                <motion.div
                                    className="fixed top-20 left-0 px-3 w-full bg-[#f3eeeeda] backdrop-blur-xl"
                                    initial="hidden"
                                    animate={isToggled ? "visible" : "hidden"}
                                    exit="hidden"
                                    variants={navContainer}
                                >
                                    <NavbarItems />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Link to="home" smooth={"easeInOutQuart"}>
                            <img
                                src="assets\Photo.jpg"
                                alt="profile picture"
                                className="w-14 h-14 object-cover rounded-full"
                            />
                        </Link>
                    </div>
                    <div>
                        {
                            <ul className="items-center gap-4 hidden sm:hidden md:flex">
                                <li className="text-[20px] border-none ">
                                    <Link
                                        className="cursor-pointer hover:text-slate-300"
                                        to="home"
                                        activeClass="active"
                                        smooth={"easeInOutQuart"}
                                        spy={
                                            true
                                        } /* onClick={() => scrollToSection('home')} */
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="text-[20px]">
                                    <Link
                                        className="cursor-pointer hover:text-slate-300"
                                        to="about"
                                        activeClass="active"
                                        smooth={"easeInOutQuart"}
                                        spy={
                                            true
                                        } /* onClick={() => scrollToSection('about')} */
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="text-[20px]">
                                    <Link
                                        className="cursor-pointer hover:text-slate-300"
                                        to="projects"
                                        activeClass="active"
                                        smooth={"easeInOutQuart"}
                                        spy={
                                            true
                                        } /* onClick={() => scrollToSection('projects')} */
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li className="text-[20px]">
                                    <Link
                                        className="cursor-pointer hover:text-slate-300"
                                        to="experience"
                                        activeClass="active"
                                        smooth={"easeInOutQuart"}
                                        spy={
                                            true
                                        } /* onClick={() => scrollToSection('experience')} */
                                    >
                                        Experience
                                    </Link>
                                </li>
                            </ul>
                        }
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-[20px]">
                            <Link
                                className="cursor-pointer hover:text-slate-300"
                                to="contact"
                                activeClass="active"
                                smooth={"easeInOutQuart"}
                                spy={
                                    true
                                } /* onClick={() => scrollToSection('experience')} */
                            >
                                Contact me
                            </Link>
                        </div>
                        <div>
                            <NavLink
                                to="assets\VidulaDeneth_CV.pdf"
                                target="_blank"
                            >
                                <FaFileDownload />
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
