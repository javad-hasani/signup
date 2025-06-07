import React from "react";

export default function GoogleButton({ onClick, icon }) {
  return (
    <button
      type="button"
      onClick={() => {
        if (onClick && typeof onClick === "function") {
          onClick();
        } else {
          console.warn("onClick prop is not a function");
        }
      }}
      className="w-full flex items-center justify-center gap-2 py-2 px-3 sm:py-2.5 sm:px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors transform hover:scale-105 text-sm sm:text-base"
    >
      {icon}
      <span>ورود با Google</span>
    </button>
  );
}
