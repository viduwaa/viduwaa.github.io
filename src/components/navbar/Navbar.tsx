import profilePic from "../../../public/assets/Photo.jpg"
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
      <header className="text-primary dark fixed top-0 z-10 w-full border-b-2 bg-transparent p-3 backdrop-blur-sm">
        <nav
          className="w-100 container m-auto flex items-center justify-between "
          id="navbar"
        >
          <div className="flex items-center gap-5">
            <button className="md:hidden" onClick={() => setToggle(!isToggled)}>
              {!isToggled ? (
                <RxHamburgerMenu size={40} />
              ) : (
                <IoMdClose size={40} />
              )}
            </button>
            <AnimatePresence>
              {isToggled && (
                <motion.div
                  className="fixed left-0 top-20 w-full bg-[#252323da] px-3 backdrop-blur-xl "
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
                src="/assets/Photo.jpg"
                alt="profile picture"
                className="h-14 w-14 rounded-full object-cover border border-primary"
              />
            </Link>
          </div>
          <div>
            {
              <ul className="hidden items-center gap-4 sm:hidden md:flex">
                <li className="text-[20px]">
                  <Link
                    className="cursor-pointer hover:text-primary text-text "
                    to="home"
                    activeClass="active"
                    smooth={"easeInOutQuart"}
                    spy={true} /* onClick={() => scrollToSection('home')} */
                  >
                    Home
                  </Link>
                </li>
                <li className="text-[20px]">
                  <Link
                    className="cursor-pointer hover:text-primary text-text "
                    to="about"
                    activeClass="active"
                    smooth={"easeInOutQuart"}
                    spy={true} /* onClick={() => scrollToSection('about')} */
                  >
                    About
                  </Link>
                </li>
                <li className="text-[20px]">
                  <Link
                    className="cursor-pointer hover:text-primary text-text "
                    to="projects"
                    activeClass="active"
                    smooth={"easeInOutQuart"}
                    spy={true} /* onClick={() => scrollToSection('projects')} */
                  >
                    Projects
                  </Link>
                </li>
                <li className="text-[20px]">
                  <Link
                    className="cursor-pointer hover:text-primary text-text"
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
                className="cursor-pointer hover:text-primary text-text"
                to="contact"
                activeClass="active"
                smooth={"easeInOutQuart"}
                spy={true} /* onClick={() => scrollToSection('experience')} */
              >
                Contact me
              </Link>
            </div>
            <div className="relative cv-download w-10">
              <NavLink to="assets\VidulaDeneth_CV.pdf" target="_blank" className="hover:text-white  ">
                <FaFileDownload size={20}/>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
