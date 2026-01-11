import React, { useState } from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";

// Destructure props directly from the props object
const FaqItem = ({ title, description }) => {

  // Track whether the FAQ item is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b">

      {/* Question row */}
      <div className="flex items-center justify-between py-6">
        <h4 className="h4 max-w-[300px] sm:max-w-md md:max-w-max">
          {title}
        </h4>

        {/* Toggle button */}
        <button
          className="w-[44px] h-[44px] bg-accent flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Icon switches based on open state */}
          {isOpen ? (
            <RiSubtractFill
              className="text-primary text-2xl transition-opacity duration-700 opacity-100"
            />
          ) : (
            <RiAddFill
              className="text-primary text-2xl transition-opacity duration-700 opacity-100"
            />
          )}
        </button>
      </div>

      {/* Answer section (accordion content) */}
      <div
        className={`${
          isOpen
            ? "max-h-[200px] opacity-100 transition-all duration-500 ease-in-out"
            : "max-h-0 opacity-0 transition-all duration-300 ease-in-out overflow-hidden"
        }`}
      >
        <p className="pt-8 flex items-center max-w-[860px]">
          {description}
        </p>
      </div>

    </div>
  );
};

export default FaqItem;