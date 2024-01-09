import { useContext, useEffect } from "react";

import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiteContext } from "../../helpers/SiteContext";
import { MySocials } from "../../helpers/MySocials";
import { motion, useScroll } from "framer-motion";
import TextAnimation from "../customComponents/TextAnimation";

function Home() {
  const { scrollToSection, fadeinAnimations, updateDelay } =
    useContext(SiteContext);

  useEffect(() => {
    updateDelay('Home',1.8);
  }, []);

  return (
    <>
      <section
        id="home"
        className=" text-text dark relative flex min-h-[100dvh] flex-col items-center justify-center "
        /* ref={myRef} */
      >
        <div className="text-stroke-3 container mx-auto my-[10%] flex flex-col items-center  gap-6 stroke-black p-5">
          <h1 className="text-6xl">
            <TextAnimation once={true} text="Hello, I'm Vidula" className="welcome-text text-primary"/>
          </h1>

          <motion.h2
            variants={fadeinAnimations('Home')}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center text-4xl welcome-text"
          >
            Here, you'll find a fusion of creativity and functionality, as I
            create & explore the world of programming, web development and
            design.
          </motion.h2>
        </div>
        <div className="w-full md:w-[30%]">
          <ul className="flex items-center justify-evenly">
            {MySocials.map((item, key) => (
              <motion.li
                whileHover={{ scale: 1.3 }}
                key={key}
                className={`text-${item.color} hover:text-${item.hoverColor}`}
              >
                {" "}
                <Link to={item.link} target="_blank">
                  {item.icon}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="text-linkedin text-facebook text-github text-twitter absolute bottom-14 border border-primary rounded-full p-3 hover:bg-primary transition-all hover:border-black">
          <Link to="/" onClick={() => scrollToSection("about")}>
            <FaAngleDoubleDown />
          </Link>
        </div>

        <div className="home-break  absolute bottom-0 -z-10 h-[200px] w-full  rotate-180"></div>
      </section>
    </>
  );
}

export default Home;
