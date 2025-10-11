import React, { type FC, useEffect, useState } from "react";

export interface ArrowMoveProps {
  imageUrl: string;
  altText: string;
  className?: string;
  moveDistance?: number;
  duration?: string;
  delay?: string | number; // e.g. "1s" or 1000
}

/**
 * 🔁 ArrowMove Component
 * Automatically animates an image diagonally once when mounted.
 */
const ArrowMove: FC<ArrowMoveProps> = ({
  imageUrl,
  altText,
  className = "",
  moveDistance = 80,
  duration = "1.5s",
  delay = "0s", // default delay
}) => {
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  useEffect(() => {
    // Convert numeric delay (ms) to number, or parse "1.8s"
    const delayMs =
      typeof delay === "number"
        ? delay
        : parseFloat(delay) * (delay.toString().includes("ms") ? 1 : 1000);

    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delay]);

  const animationId = imageUrl.replace(/[^a-zA-Z0-9]/g, "_").substring(0, 50);

  return (
    <div className={`relative ${className}`}>
      <style>
        {`
          @keyframes diagonalMove-${animationId} {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(${moveDistance}px, -${moveDistance}px) rotate(-2deg); }
          }
          .mover-animation-${animationId} {
            animation: diagonalMove-${animationId} ${duration} ease-out forwards;
          }
        `}
      </style>

      <img
        src={imageUrl}
        alt={altText}
        className={`transition-transform ${
          shouldAnimate ? `mover-animation-${animationId}` : ""
        } `}
      />
    </div>
  );
};

export default ArrowMove;
