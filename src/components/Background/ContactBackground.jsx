import { motion } from "framer-motion";

const ContactBackground = () => {
  const linkBottomVaraints = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  };
  return (
    <div>
      <div className="w-1 h-[55px] bg-black absolute left-[11.3%] -top-[2px] max-sm:hidden" />
      <motion.div
        variants={linkBottomVaraints}
        initial="initial"
        whileInView="animate"
        transition={linkBottomVaraints}
        className="w-3 h-3 rounded-full bg-black absolute left-[11%] top-[45px] max-sm:hidden"
      />
    </div>
  );
};

export default ContactBackground;
