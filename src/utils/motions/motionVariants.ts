export const fadeIn = () => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, x: 0, ease: "easeIn" },
    },
  };
};

export const slideInLeftRight = () => {
  return {
    initial: { x: -100 },
    animate: { x: 0, transition: { duration: 0.7, ease: "linear" } },
  };
};

export const slideInRightLeft = () => {
  return {
    initial: { x: 100 },
    animate: { x: 0, transition: { duration: 0.7, ease: "linear" } },
  };
};

export const rotateIcon = () => {
  return {
    animate: {
      rotate: 360,
      transition: { duration: 0.7, delay: 0.6, ease: "linear" },
    },
  };
};

export const childStagger = () => {
  return {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,

      transition: { duration: 0.8, ease: "easeInOut" },
    },
    hover: { scale: 1.05 },
  };
};
export const childStag = () => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
};

export const parentStagger = () => {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
};
export const revealFromBottom = () => {
  return {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "linear" },
    },
  };
};
export const scaleIn = () => {
  return {
    initial: { opacity: 0, y: -100, scale: 0.8 },
    animate: {
      opacity: 1,
      y: 1,
      scale: 1,
      transition: { duration: 1, ease: "linear" },
    },
  };
};
