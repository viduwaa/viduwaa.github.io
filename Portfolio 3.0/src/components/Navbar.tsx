import { FaFileDownload } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
        <header className="bg-slate-400 p-3 sticky">
            <nav className="container flex m-auto items-center justify-between w-100 ">
                <div><img src="public\assets\Photo.jpg" alt="profile picture" className="w-14 h-14 object-cover rounded-full"/></div>
                <div>
                    <ul className="flex items-center gap-4">
                        <li className="text-[20px]"><NavLink className="hover:text-slate-300" to="#top">Home</NavLink></li>
                        <li className="text-[20px]"><NavLink className="hover:text-slate-300" to="#top">About</NavLink></li>
                        <li className="text-[20px]"><NavLink className="hover:text-slate-300" to="#top">Projects</NavLink></li>
                        <li className="text-[20px]"><NavLink className="hover:text-slate-300" to="#top">Experience</NavLink></li>
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-[20px]"><NavLink to="">Contact me</NavLink></div>
                    <div><Link to=""><FaFileDownload /></Link></div>
                </div>
            </nav>
        </header>
    
    </>
  )
}

export default Navbar