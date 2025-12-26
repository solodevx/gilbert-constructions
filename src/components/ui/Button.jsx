import { RiArrowRightUpLine } from "react-icons/ri"

// Reusable Button component
const Button = ({ text }) => {
  return (
    // Main button wrapper
    <button
      className="w-[210px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center
      justify-between min-w-[208px] group bg-accent"
    >

      {/* Button text section */}
      {/* 
        - flex-1 allows the text area to take available space
        - tracking adds letter spacing for a clean, modern look
      */}
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
        {text}
      </div>

      {/* Icon container */}
      <div className="w-11 h-11 bg-primary flex items-center justify-center">

        {/* Arrow icon */}
        <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />

      </div>

    </button>
  )
}

export default Button
