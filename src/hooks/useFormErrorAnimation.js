import { useCallback } from "react";

export function useFormErrorAnimation() {
  const getErrorClass = useCallback((show) => {
    return `transition-all duration-500 ease-in-out overflow-hidden ${
      show ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
    } bg-red-100 text-red-700 rounded text-center text-sm sm:text-base px-3 py-2`;
  }, []);

  return { getErrorClass };
}
