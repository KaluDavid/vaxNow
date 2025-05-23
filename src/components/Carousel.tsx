import { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const images = [
  "/public/assets/home_img/section_seven_img/logo1.png",
  "/public/assets/home_img/section_seven_img/logo2.png",
  "/public/assets/home_img/section_seven_img/logo3.png",
  "/public/assets/home_img/section_seven_img/logo4.png",
  "/public/assets/home_img/section_seven_img/logo5.png",
  "/public/assets/home_img/section_seven_img/logo6.png",
  "/public/assets/home_img/section_seven_img/logo7.png",
  "/public/assets/home_img/section_seven_img/logo8.png",
];

interface CarouselProps {
  directions?: "left" | "right";
  axis?: "x" | "y";
  speed?: number;
  is3D?: boolean;
}

export default function Carousel({
  directions = "right",
  axis = "x",
  speed = 50,
  is3D = false,
}: CarouselProps) {
  // `base` stores the accumulated position value
  const base = useRef(0);

  // `containerRef` refers to the outer container for measuring dimensions
  const containerRef = useRef<HTMLDivElement>(null);

  // `motionRef` refers to the inner moving element that’s translated
  const motionRef = useRef<HTMLDivElement>(null);

  // Tracks whether scrolling is paused (e.g. on hover or drag)
  const [isPause, setIsPause] = useState(false);

  // Hook that runs every frame — used to update animation manually
  useAnimationFrame((_, delta) => {
    // Exit early if paused or if refs aren’t available yet
    if (isPause || !containerRef.current || !motionRef.current) return;

    // Calculate how far to move this frame (based on speed and time)
    const move = (speed / 1000) * delta;

    // Decide scroll direction (positive = right/down, negative = left/up)
    const scrollDirection =
      directions === "left" || directions === "right" ? -move : move;

    // Accumulate the distance moved
    base.current += scrollDirection;

    // Get the scroll dimension depending on the axis
    const container = containerRef.current;
    const motionEl = motionRef.current;
    const wrapSize =
      axis === "x" ? container.scrollWidth / 2 : container.scrollHeight / 2;

    // Wrap the value with modulus to keep it in a loop
    const newPos = base.current % wrapSize;

    // Apply the transform with the updated position and optional 3D effect
    motionEl.style.transform = `${
      axis === "x" ? `translateX(${newPos}px)` : `translateY(${newPos}px)`
    } ${is3D ? "rotateY(10deg)" : ""}`;
  });

  // Determine direction for drag interactions
  const animationDirection = axis;

  return (
    <>
      <div ref={containerRef} className="overflow-hidden py-2 w-full">
        {/* Moving content container */}
        <motion.div
          ref={motionRef}
          className={`flex ${
            axis === "x" ? "flex-row gap-8" : "flex-col gap-6"
          } w-max cursor-grab active:cursor-grabbing`}
          // Enable dragging
          drag={animationDirection}
          dragConstraints={{
            top: -9999,
            bottom: 9999,
            left: -9999,
            right: 9999,
          }}
          dragElastic={0.1}
          // Pause scrolling when user hovers or taps
          onHoverStart={() => setIsPause(true)}
          onHoverEnd={() => setIsPause(false)}
          onTapStart={() => setIsPause(true)}
          onTapCancel={() => setIsPause(false)}
          onTap={() => setIsPause(false)}
        >
          {/* Duplicate the list of images to simulate infinite scroll */}
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`logo-${index}`}
              className="
                  w-auto sm:h-[100px] h-[50px] object-contain shrink-0 sm:rounded-tr-[40px] sm:rounded-bl-[40px] sm:rounded-tl-2xl rounded-[9px] sm:rounded-br-2xl  bg-blue-50 sm:py-6 sm:px-5 p-2"
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}
