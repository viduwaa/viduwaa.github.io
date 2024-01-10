import { Link } from "react-router-dom";
import { MySocials } from "../../helpers/MySocials";
import EmailForm from "./EmailForm";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext } from "react";
import { SiteContext } from "../../helpers/SiteContext";
import CV from "/assets/VidulaDeneth_CV.pdf"

function Contact() {
  const { fadeinAnimationstoUp } = useContext(SiteContext);

  return (
    <section
      className="text-text py-16 dark flex min-h-[90vh] flex-col items-center justify-center transition-all delay-200 ease-in-out"
      id="contact"
    >
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2">
        <motion.div
          className="flex flex-col items-center"
          variants={fadeinAnimationstoUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h1 className="mb-[2%] mt-[10%] text-4xl sm:text-5xl transition-all ease-linear text-center">Get In Touch With me</h1>

          <ul id="mySocials" className="flex md:w-[50%] md:justify-evenly p-5 gap-5">
            {MySocials.map((item, key) => (
              <li key={key}>
                {" "}
                <Link
                  to={item.link}
                  target="_blank"
                  className={`text-${item.color}`}
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>

          <motion.button
            className="border-primary rounded border border-black p-3 backdrop-blur-[2px]"
            whileHover={{ scale: 1.1 }}
          >
            <Link to={CV} target="_blank">
              <h2 className="flex items-center gap-2 text-2xl">
                {" "}
                Download CV <FaFileDownload color="yellow" />
              </h2>
            </Link>
          </motion.button>
        </motion.div>
        <EmailForm />
      </div>
    </section>
  );
}

export default Contact;
