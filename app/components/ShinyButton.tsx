"use client";
import { motion } from "framer-motion";

interface props {
  buttonText: string;
  image?: string | null;
}

function ShinyButton({ buttonText, image = null }: props) {
  const radialGradientClasses = "button-radial-gradient";
  const linearOverlayClasses = "p-px linear-overlay";
  const textClasses = "text-white";

  return (
    <motion.div
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
          stiffness: 25,
          damping: 3,
          mass: 0.2,
        },
      }}
    >
      <div className="flex items-center justify-center">
        {image && <img src={image} alt="logo" className="size-8" />}
        <span
          className={`${textClasses} tracking-wide font-light text-lg size-full block relative linear-mask transition-colors duration-1000`}
        >
          {buttonText}
        </span>
      </div>
      <span
        className={`block absolute inset-0 rounded-md ${linearOverlayClasses}`}
      ></span>
    </motion.div>
  );
}

export default ShinyButton;
