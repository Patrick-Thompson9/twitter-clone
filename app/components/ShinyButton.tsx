"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ReactNode } from "react";

interface props {
  buttonText: string;
  image?: string | ReactNode | null;
  classes?: string | null;
}

function ShinyButton({ buttonText, image = null, classes = null }: props) {
  const radialGradientClasses = "button-radial-gradient";
  const linearOverlayClasses = "p-px linear-overlay";
  const textClasses = "text-white";

  return (
    <motion.div
      className={clsx(
        "relative w-full py-2 px-4 bg-white rounded-md transition-colors duration-1000 focus:outline-none focus:ring-0 focus:border-sky-200 focus:border focus:shadow-md focus:shadow-sky-200/50",
        radialGradientClasses,
        classes
      )}
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
        {image === null ? null : typeof image === "string" ? (
          <img src={image} alt="logo" className="size-8" />
        ) : (
          image
        )}
        <span
          className={clsx(
            textClasses,
            "tracking-wide font-light text-lg size-full block relative linear-mask transition-colors duration-1000"
          )}
        >
          {buttonText}
        </span>
      </div>
      <span
        className={clsx(
          "block absolute inset-0 rounded-md",
          linearOverlayClasses
        )}
      ></span>
    </motion.div>
  );
}

export default ShinyButton;
