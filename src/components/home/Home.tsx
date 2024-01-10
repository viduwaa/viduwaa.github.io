import planet from "/assets/background/planet.webp";
import { useContext, useEffect } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiteContext } from "../../helpers/SiteContext";
import { MySocials } from "../../helpers/MySocials";
import { motion } from "framer-motion";
import TextAnimation from "../customComponents/TextAnimation";

function Home() {
  const {
    scrollToSection,
    fadeinAnimations,
    updateDelay,
    fadeinAnimationstoUp,
  } = useContext(SiteContext);

  useEffect(() => {
    updateDelay("Home", 1.8);
    updateDelay("planet", 0.3);
  }, []);

  return (
    <>
      <section
        id="home"
        className=" text-text dark relative flex min-h-[100dvh] flex-col items-center justify-center "
        /* ref={myRef} */
      >
        <motion.div className="text-stroke-3 container mx-auto my-[10%] flex flex-col items-center  gap-6 stroke-black p-5">
          <h1 className="text-center text-5xl md:text-6xl">
            <TextAnimation
              once={true}
              text="Hello, I'm Vidula"
              className="welcome-text text-primary"
            />
          </h1>

          <motion.h2
            variants={fadeinAnimations("Home")}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="welcome-text text-center text-3xl md:text-4xl"
          >
            Here, you'll find a fusion of creativity and functionality, as I
            create & explore the world of programming, web development and
            design.
          </motion.h2>
        </motion.div>
        <div className="w-full md:w-[30%]">
          <ul className="flex items-center justify-evenly">
            {MySocials.map((item, key) => (
              <motion.li
                variants={fadeinAnimationstoUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
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

        <div className="text-linkedin text-facebook text-github text-twitter border-primary hover:bg-primary absolute bottom-14 rounded-full border p-3 transition-all hover:border-black">
          <Link to="/" onClick={() => scrollToSection("about")}>
            <FaAngleDoubleDown />
          </Link>
        </div>

        <motion.img
          src={planet}
          alt="planet"
          className="planet absolute bottom-[-220px] left-[-200px] -z-20"
          variants={fadeinAnimations("planet")}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        />
      </section>
    </>
  );
}

export default Home;
