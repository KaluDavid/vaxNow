import React from "react";

const useRevealOnScroll = () => {
  return {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
    viewport: { once: true, amount: 0.2 },
  };
};

export default useRevealOnScroll;
