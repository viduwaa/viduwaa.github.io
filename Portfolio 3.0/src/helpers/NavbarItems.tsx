import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const items = ["Home", "About", "Projects", "Experience"];

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };

  return (
    <>
      <motion.ul
        className="md:hidden"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
        {items.map(item => (
          <motion.li className="text-5xl mb-4 cursor-pointer " variants={navItem} key={item}>
            <Link to={item.toLowerCase()} smooth={"easeInOutQuart"}>{item}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Navbar;
