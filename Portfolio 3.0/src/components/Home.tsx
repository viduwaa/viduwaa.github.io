
import { useContext, useEffect, useRef, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiteContext } from "../helpers/SiteContext";


type VantaEffect = {
    destroy: () => void;
};

function Home() {
    const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
    const myRef = useRef(null);

    const {scrollToSection} = useContext(SiteContext)
    
    /* useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                WAVES({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x263838,
                    shininess: 50.0,
                    waveHeight: 35.0,
                    waveSpeed: 0.25,
                    zoom: 0.83,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]); */

    return (
        <>
            <section id="home"
                className="min-h-[100dvh] flex flex-col items-center justify-center"
                /* ref={myRef} */
            >
                <div className="container mx-auto my-[10%] flex items-center flex-col gap-6 text-white stroke-black text-stroke-3">
                    <h1 className="text-6xl">Hi, I'm Vidula Deneth</h1>
                    <h2 className="text-4xl text-center">
                        Here, you'll find a fusion of creativity and
                        functionality, as I create & explore the world of
                        programming, web development and design.
                    </h2>
                </div>
                <div className="md:w-[30%] w-full">
                    <ul className="flex items-center justify-evenly">
                        <Link to="https://www.facebook.com/viduladeneth.salwathura" target="_blank" className="hover:text-blue-700"><li><FaFacebook size={50}/></li></Link>
                        <Link to="https://twitter.com/viduwa_" target="_blank" className="hover:text-blue-700"><li><FaTwitter size={50}/></li></Link>
                        <Link to="https://www.linkedin.com/in/viduladeneth/" target="_blank" className="hover:text-blue-700"><li><FaLinkedin size={50}/></li></Link>
                        <Link to="https://github.com/viduwaa" target="_blank" className="hover:text-red-900"><li><FaGithub size={50}/></li></Link>
                    </ul>
                </div>

                <div className="absolute bottom-14">
                <Link to="/" onClick={() => scrollToSection('about')}><FaAngleDoubleDown /></Link>
                </div>
            </section>
        </>
    );
}

export default Home;
