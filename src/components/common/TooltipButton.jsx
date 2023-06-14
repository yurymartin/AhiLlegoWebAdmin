"use client";
import React, { useState } from "react";

const TooltipButton = ({ children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <div class="group relative m-12 flex justify-center">
        <button class="rounded bg-amber-500 px-4 py-2 text-sm text-white shadow-sm">
          Hover me!
        </button>
        <span class="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
          ✨ You hover me!
        </span>
      </div>
    </>
  );
};

export default TooltipButton;
