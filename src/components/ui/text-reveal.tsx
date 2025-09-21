"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import {
  useRef,
  type ComponentPropsWithoutRef,
  type FC,
  type ReactNode,
} from "react";
import { cn } from "../../lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 70%", "end 80%"],
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div>
      <div ref={targetRef} className={cn("relative z-0 h-[50vh]", className)}>
        <div
          className={
            "sticky top-0 mx-auto flex max-w-4xl items-center justify-center bg-transparent px-[1rem] text-center mt-0"
          }
        >
          <span
            ref={targetRef}
            className={
              "flex flex-wrap justify-center items-center p-5 text-xl text-center font-normal text-black/20 dark:text-white/20 md:p-8 md:text-2xl lg:p-10 lg:text-3xl xl:text-4xl leading-12 md:leading-12 lg:leading-12 xl:leading-12"
            }
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5 text-black/20 dark:text-white/20">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-red-500 dark:text-[#000000]"}
      >
        {children}
      </motion.span>
    </span>
  );
};
