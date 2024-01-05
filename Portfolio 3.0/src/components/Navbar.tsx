import { FaFileDownload } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { SiteContext } from "../helpers/SiteContext";
import { useContext } from "react";

function Navbar() {
    const {scrollToSection} = useContext(SiteContext)
  return (
    <>
        <header className="bg-transparent p-3 fixed w-full z-10 backdrop-filter">
            <nav className="container flex m-auto items-center justify-between w-100 ">
                <div><img src="assets\Photo.jpg" alt="profile picture" className="w-14 h-14 object-cover rounded-full"/></div>
                <div>
                    <ul className="flex items-center gap-4">
                        <li className="text-[20px] border-none "><NavLink className=" bg-slate-300 px-2 py-1 rounded-lg" to="" onClick={() => scrollToSection('home')}>Home</NavLink></li>
                        <li className="text-[20px]"><NavLink className="hover:text-slate-300" to="/"  onClick={() => scrollToSection('about')}>About</NavLink></li>
                        <li className="text-[20px]"><NavLink className="hover:text-slate-300" to="/" onClick={() => scrollToSection('projects')}>Projects</NavLink></li>
                        <li className="text-[20px]"><NavLink className="hover:text-slate-300" to="/" onClick={() => scrollToSection('experience')}>Experience</NavLink></li>
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-[20px]"><NavLink to="">Contact me</NavLink></div>
                    <div><Link to="assets\VidulaDeneth_CV.pdf" target="_blank"><FaFileDownload /></Link></div>
                </div>
            </nav>
        </header>
    
    </>
  )
}

export default Navbar