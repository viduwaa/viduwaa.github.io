import { motion } from "framer-motion";

const fadeinAnimations = {
  initial: {
    opacity: 0,
    y: 150,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 * index,
    },
  }),
};

type ScrollAnimateProps = {
  index: number | string;
  children?: React.ReactNode;
  color?: string;
};

function ScrollAnimate({ index, color, children }: ScrollAnimateProps) {
  return (
    <motion.li
      style={{ color: color }}
      variants={fadeinAnimations}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="mt-1"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.li>
  );
}

export default ScrollAnimate;
