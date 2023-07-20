import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const SlideVariant = {
  up: {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 }
  },
  down: {
    hidden: { opacity: 0, y: -75 },
    visible: { opacity: 1, y: 0 }
  },
  left: {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 }
  }
}

const SlideMotion = ({ direction = 'up', children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible")
    }
  }, [isInView])
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={slideControls}
      transition={{ duration: 0.3, delay: 0.25, ease: "easeIn" }}
      variants={SlideVariant[direction]}
    >
      {children}
    </motion.div>
  );
};

export default SlideMotion;
