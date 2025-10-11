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
    <div ref={targetRef} className={cn("relative z-0 h-[50vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex max-w-full bg-transparent sm:max-w-4xl items-center justify-center px-[1rem] text-center"
        }
      >
        <span
          className={
            "flex flex-wrap justify-center items-center p-2 sm:p-5 xs:text-sm text-2xl md:text-4xl text-center font-normal leading-12 md:leading-16"
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
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  // Animate opacity for reveal
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1 lg:mx-1.5">
      {/* Static base text (same black/gray color, lower opacity for layering) */}
      <span className="absolute text-black-200/50 dark:text-black/50">
        {children}
      </span>

      {/* Animated reveal text (fully visible) */}
      <motion.span
        style={{ opacity }}
        className=" font-medium dark:text-black"
      >
        {children}
      </motion.span>
    </span>
  );
};
