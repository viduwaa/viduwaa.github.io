import { FaCircle } from "react-icons/fa";
import { ExperienceItems } from "../../helpers/ExperienceItem";
import { motion } from "framer-motion";
import { useContext } from "react";
import { SiteContext } from "../../helpers/SiteContext";

function Experience() {
  const { fadeinAnimationstoUp } = useContext(SiteContext);
  return (
    <section
      id="experience"
      className="text-text dark flex min-h-[80dvh] "
    >
      <div className="container m-auto">
        <motion.h1
          className="text-center m-auto text-accent bg-primary mb-[10px] w-fit rounded-md p-3  text-3xl sm:text-3xl md:text-5xl transition-all ease-linear"
          variants={fadeinAnimationstoUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          My Experience
        </motion.h1>

        <div className="min-h-fit p-3">
          <ul className="">
            {ExperienceItems.map((item, key) => {
              return (
                <motion.li
                  key={key}
                  className="text-primary border-text mx-auto mb-5 flex md:w-[80%]  items-start gap-8 rounded-md  border bg-transparent p-3 text-3xl backdrop-blur-[2px]"
                  variants={fadeinAnimationstoUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={key}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCircle className="mt-1" />
                  <div className="flex flex-col items-start font-thin">
                    <h3 className="text-xl sm:text-2xl md:text-3xl transition-all ease-linear">
                      {item.time}
                      <br />
                      {item.company}
                    </h3>
                    <h4 className="text-1xl sm:text-2xl md:text-4xl transition-all ease-linear font-bold ">{item.post}</h4>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
