import React from "react";

export default function SubmitButton({ children }) {
  return (
    <button
      type="submit"
      className="w-full py-2 px-3 sm:py-2.5 sm:px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
    >
      {children}
    </button>
  );
}
