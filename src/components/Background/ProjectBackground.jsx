import { motion } from "framer-motion";
const ProjectBackground = () => {
  const linkRightVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transtion: {
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  };
  return (
    <div>
      <div className="w-1 h-[35px] bg-black absolute left-[50%] max-sm:hidden" />
      <div className="w-[525px] h-[4px] bg-black absolute left-[11.3%] top-[1373px]  max-sm:hidden" />
      <div className="w-1 h-[1310px] bg-black absolute left-[11.3%] top-[1373px] max-sm:hidden" />
      <motion.div
        variants={linkRightVariants}
        initial="initial"
        whileInView="animate"
        transition={linkRightVariants}
        className="w-3 h-3 rounded-full bg-black absolute left-[11%] top-[1417px] max-sm:hidden"
      />
      <motion.div
        variants={linkRightVariants}
        initial="initial"
        whileInView="animate"
        transition={linkRightVariants}
        className="w-3 h-3 rounded-full bg-black absolute left-[11%] top-[1780px] max-sm:hidden"
      />
      <motion.div
        variants={linkRightVariants}
        initial="initial"
        whileInView="animate"
        transition={linkRightVariants}
        className="w-3 h-3 rounded-full bg-black absolute left-[11%] top-[2350px] max-sm:hidden"
      />
    </div>
  );
};

export default ProjectBackground;
