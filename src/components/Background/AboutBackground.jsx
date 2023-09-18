import { motion } from "framer-motion";

const AboutBackground = () => {
  const linkLeftVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  };

  const linkRightVaraints = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  };
  return (
    <div>
      <div className="w-1 h-[675px] bg-black absolute left-[50%] max-sm:hidden" />
      <motion.div
        variants={linkLeftVariants}
        initial="initial"
        whileInView="animate"
        transition={linkLeftVariants}
        className="w-3 h-3 rounded-full bg-black absolute left-[671px] top-[695px] max-sm:hidden"
      />
      <motion.div
        variants={linkRightVaraints}
        initial="initial"
        whileInView="animate"
        transistion={linkRightVaraints}
        className="w-3 h-3 rounded-full bg-black absolute left-[671px] top-[850px] max-sm:hidden"
      />
      <motion.div
        variants={linkLeftVariants}
        initial="initial"
        whileInView="animate"
        transition={linkLeftVariants}
        className="w-3 h-3 rounded-full bg-black absolute left-[671px] top-[980px] max-sm:hidden"
      />
      <motion.div
        variants={linkRightVaraints}
        initial="initial"
        whileInView="animate"
        transition={linkRightVaraints}
        className="w-3 h-3 rounded-full bg-black absolute left-[671px] top-[1120px] max-sm:hidden"
      />
    </div>
  );
};

export default AboutBackground;
