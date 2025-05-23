const useHoverButton = () => {
  return {
    initial: { scale: 1 },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 300 },
  };
};
export default useHoverButton;
