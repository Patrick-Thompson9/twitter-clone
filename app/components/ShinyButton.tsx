"use client";
import { motion } from "framer-motion";

interface props {
  buttonText: string;
}

function ShinyButton({ buttonText }: props) {
  const radialGradientClasses = "button-radial-gradient";
  const linearOverlayClasses = "p-px linear-overlay";
  const textClasses = "text-white";

  return (
    <motion.button
      className={`relative w-full py-2 px-4 bg-white rounded-md transition-colors duration-1000 ${radialGradientClasses}`}
      initial={{ "--x": "100%" }}
      animate={{ "--x": "-75%" }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 2,
        type: "spring",
        stiffness: 15,
        damping: 15,
        mass: 5,
        scale: {
          type: "spring",
          stiffness: 35,
          damping: 3,
          mass: 0.2,
        },
      }}
    >
      <span
        className={`${textClasses} tracking-wide font-light size-full block relative linear-mask transition-colors duration-1000`}
      >
        {buttonText}
      </span>
      <span
        className={`block absolute inset-0 rounded-md ${linearOverlayClasses}`}
      ></span>
    </motion.button>
  );
}

export default ShinyButton;
