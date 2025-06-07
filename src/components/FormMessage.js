import React from "react";

export default function FormMessage({ type = "success", message }) {
  if (!message) return null;
  return (
    <div
      className={`text-center py-2 rounded ${
        type === "success"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      } mb-4`}
    >
      {message}
    </div>
  );
}
