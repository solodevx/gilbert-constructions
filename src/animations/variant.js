// Reusable fade-in animation variant
// direction: "up" | "down" | "left" | "right"
// delay: animation delay in seconds
export const fadeIn = (direction, delay) => {
  return {
    // Initial hidden state
    hidden: {
      // Vertical movement
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      // Horizontal movement
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      opacity: 0,
    },

    // Visible animation state
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
