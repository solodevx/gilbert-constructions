import { motion } from "framer-motion";

const CustomSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="w-16 h-16 border-4 border-t-accent border-gray-300 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default CustomSpinner;
