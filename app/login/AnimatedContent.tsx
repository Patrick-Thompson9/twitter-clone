"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

function AnimatedContent() {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  const grid = [10, 20] as const;

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(container.current, { opacity: 1 });
        gsap.set(".star-grid-item", { opacity: 0.2, scale: 1 });
        return;
      }
      gsap.set(".star-grid-item", {
        opacity: 0,
        transformOrigin: "center",
        color: "#fff",
      });
      gsap.set(container.current, { opacity: 1 });

      const tl = gsap.timeline();

      //entrance animation
      //   tl.to(".star-grid-item", {
      //     keyframes: [
      //       { opacity: 0, duration: 0 },
      //       {
      //         opacity: 1,
      //         rotate: "+=180",
      //         color: "#fff",

      //         duration: 0.6,
      //         stagger: {
      //           amount: 2,
      //           grid: grid,
      //           from: "center",
      //         },
      //       },
      //       {
      //         opacity: 0,
      //         rotate: "+=180",
      //         color: "#fff",

      //         delay: -1.7,
      //         duration: 0.6,
      //         stagger: {
      //           amount: 3,
      //           grid: grid,
      //           from: "center",
      //         },
      //       },
      //     ],
      //   });

      //loop animation
      tl.to(".star-grid-item", {
        delay: 0,
        repeat: -1,
        repeatDelay: 8,

        keyframes: [
          {
            delay: -3,
            opacity: 1,
            rotate: "+=180",
            color: "#fff",
            duration: 4,
            scale: 1.2,
            ease: "power3.in",
            stagger: {
              repeat: -1,
              yoyo: true,
              amount: 60,
              grid: grid,
              from: "random",
            },
          },
          //   {
          //     opacity: 0.2,
          //     rotate: "+=180",
          //     color: "#fff",
          //     delay: -29,
          //     duration: 0.6,
          //     scale: 1,
          //     stagger: {
          //       amount: 30,
          //       grid: grid,
          //       from: "random",
          //     },
          //   },
        ],
      });
    },
    { scope: container }
  );

  return (
    <>
      <img
        src="moon.svg"
        className="moon absolute translate-y-[-90%] size-[200vw] object-cover object-center z-10"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="200 0 935 425"
        className="absolute top-0 h-[30vw] w-full"
        id="star-grid"
        ref={container}
        opacity={0}
        style={{
          maskImage: "linear-gradient(black, transparent)",
        }}
      >
        <g className="star-grid-group">
          {[...Array(grid[0])].map((_, i) => {
            return [...Array(grid[1])].map((_, j) => {
              return (
                <path
                  key={i + j}
                  fill="currentColor"
                  opacity=".2"
                  className="star-grid-item"
                  d={`M${j * 72},${
                    i * 72 + 10
                  }a0.14,0.14,0,0,1,0.26,0l0.14,0.36a2.132,2.132,0,0,0,1.27,1.27l0.37,0.14a0.14,0.14,0,0,1,0,0.26l-0.37,0.14a2.132,2.132,0,0,0,-1.27,1.27l-0.14,0.37a0.14,0.14,0,0,1,-0.26,0l-0.14,-0.37a2.132,2.132,0,0,0,-1.27,-1.27l-0.36,-0.14a0.14,0.14,0,0,1,0,-0.26l0.37,-0.14a2.132,2.132,0,0,0,1.26,-1.27l0.14,-0.36z`}
                />
              );
            });
          })}
        </g>
      </svg>
    </>
  );
}

export default AnimatedContent;
