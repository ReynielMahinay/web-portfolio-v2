import { motion } from "framer-motion";

const HeroBackground = () => {
  const linkLeftVaraints = {
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
      <div className="w-1 h-[561px] bg-black absolute left-[50%] max-sm:hidden" />

      <motion.div
        variants={linkLeftVaraints}
        initial="initial"
        whileInView="animate"
        transition={linkLeftVaraints}
        className="w-3 h-3 rounded-full bg-black absolute left-[671px] top-[170px] max-sm:hidden"
      />
      <motion.div
        variants={linkRightVaraints}
        initial="initial"
        whileInView="animate"
        transition={linkRightVaraints}
        className="w-3 h-3 rounded-full bg-black absolute left-[671px] top-[280px] max-sm:hidden"
      />
      <motion.div
        variants={linkLeftVaraints}
        initial="initial"
        whileInView="animate"
        transition={linkLeftVaraints}
        className="w-3 h-3 rounded-full bg-black absolute left-[671px] top-[417px] max-sm:hidden"
      />
      <motion.div
        variants={linkRightVaraints}
        initial="initial"
        whileInView="animate"
        transition={linkRightVaraints}
        className="w-3 h-3 rounded-full bg-black absolute left-[671px] top-[547px] max-sm:hidden"
      />
    </div>
  );
};

export default HeroBackground;
