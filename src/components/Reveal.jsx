import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start({ opacity: 1, y: 0 }); // Start the animation
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        style={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
