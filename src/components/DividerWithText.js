import React from "react";

export default function DividerWithText({ text }) {
  return (
    <div className="flex items-center justify-between my-2 sm:my-4">
      <span className="h-px w-full bg-gray-300"></span>
      <span className="mx-2 sm:mx-4 text-xs sm:text-sm text-gray-500">{text}</span>
      <span className="h-px w-full bg-gray-300"></span>
    </div>
  );
}
