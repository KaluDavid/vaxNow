export const useHr = () => {
  return {
    initial: { width: 0 },
    whileInView: { width: "100%" },
    transition: { duration: 2 },
    viewport: { once: true },
  };
};
