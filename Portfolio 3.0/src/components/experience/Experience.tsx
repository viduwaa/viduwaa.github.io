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
      className="text-text dark flex min-h-[100dvh] items-center justify-center "
    >
      <div className="container m-auto">
        <motion.h1 
          className="text-accent bg-primary m-auto w-fit rounded-md p-5 text-5xl backdrop-blur-sm"
          variants={fadeinAnimationstoUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          My Experience
        </motion.h1>

        <div className="min-h-fit p-3">
          <ul className="ml-10">
            {ExperienceItems.map((item, key) => {
              return (
                <motion.li
                  key={key}
                  className="text-primary border-text mb-5 flex w-[80%] mx-auto items-start gap-8 rounded-md  border bg-transparent p-3 text-3xl backdrop-blur-[2px]"
                  variants={fadeinAnimationstoUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={key}
                  whileHover={{ scale: 1.1}}
                >
                  <FaCircle className="mt-1" />
                  <div className="flex flex-col items-start font-thin">
                    <h3 className="text-3xl">
                      {item.time}
                      <br />
                      {item.company}
                    </h3>
                    <h4 className="text-4xl font-bold ">{item.post}</h4>
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
