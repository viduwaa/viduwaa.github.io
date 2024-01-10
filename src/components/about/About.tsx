import aboutPhoto from "../../../public/assets/sec2_bg.png"
import { useContext, useEffect } from "react";
import TechStack from "./TechStack";
import { SiteContext } from "../../helpers/SiteContext";
import { motion } from "framer-motion";


function About() {
  const { fadeinAnimations, updateDelay } = useContext(SiteContext);

  useEffect(() => {
    updateDelay('About',0.5);
  }, []);

  return (
    <>
      <section className="dark min-h-[100vh] sm:py-16" id="about">
        <div className="sm:grid-col-2 container m-auto grid min-h-[100vh] grid-cols-1 items-center justify-center gap-5 md:grid-cols-3 ">
          <motion.div className="m-auto" initial="initial"
            whileInView="animate" variants={fadeinAnimations('About')}
            viewport={{ once: true }}>
            <img src="/assets/sec2_bg.png" alt="" className="object-cover md:max-h-[550px] sm:max-h-[350px] max-h-[250px]" />
          </motion.div>

          <motion.div
            className="p-2 md:col-span-2"
            variants={fadeinAnimations('About')}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="mb-4 flex flex-col items-center">
              <h1 className="text-accent bg-primary mb-[10px] w-fit rounded-md p-3 text-center text-3xl sm:text-3xl md:text-5xl transition-all ease-linear">
                About me
              </h1>
              <h3 className="text-primary rounded-md border p-5 text-lg sm:text-xl md:text-2xl backdrop-blur-[2px] transition-all ease-linear">
                I am currently BICT undergraduate student at Rajarata University
                of Sri Lanka. constantly learning and improving my skills to
                become a great coder and designer. Alongside my academic
                pursuits, I also self study and build and test new & old things.
              </h3>
            </div>

            <div className="rounded-md border py-2 backdrop-blur-[2px] ">
              <TechStack name="My Current Tech Stack" />
              <h2 className="text-primary mt-4 rounded-t-md px-5 md:text-3xl sm:text-2xl text-xl m-auto transition-all ease-linear">
                Other Proficient Areas
              </h2>
              <div className="flex flex-wrap items-start justify-start rounded-b-md">
                <TechStack subcontext="Programming" />
                <TechStack subcontext="Designing" />
                <TechStack subcontext="Cloud" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
