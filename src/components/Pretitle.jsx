import React from 'react'

// Pretitle component
// - center: optional boolean to control alignment (centered or not)
const Pretitle = ({ text, center }) => {
  return (
    // Wrapper div for the pretitle
    // - conditionally adds "justify-center" if center === true
    <div className={`flex items-center gap-3 mb-4 ${center && "justify-center"}`}>

      {/* Left decorative dot */}
      <div className="w-2 h-2 bg-accent"></div>

      {/* Pretitle text */}
      {/* - tracking-[3.2px]: wide letter spacing for a premium look*/}
      <p className="font-primary tracking-[3.2px] uppercase">
        {text}
      </p>

      {/* Right decorative dot */}
      <div className="w-2 h-2 bg-accent"></div>

    </div>
  )
}

export default Pretitle
