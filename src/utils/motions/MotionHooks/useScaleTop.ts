const useScaleTop = () => {
  return {
    initial: { opacity: 0, y: -80, color: "#286fd1" },
    animate: { opacity: 1, y: 0, color: "#001b40" },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 1 },
  };
};

export default useScaleTop;
