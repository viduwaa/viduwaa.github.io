
import { useContext, useEffect, useRef, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiteContext } from "../helpers/SiteContext";
import { MySocials } from "../helpers/MySocials";


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
                        {MySocials.map((item,key)=>
                           <li key={key}> <Link to={item.link} target="_blank" className={`hover:text-[${item.hoverColor}]`}>{item.icon}</Link></li>
                        )}
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
