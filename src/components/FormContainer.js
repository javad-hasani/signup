import React from "react";

export default function FormContainer({ title, subtitle, children }) {
  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl p-4 sm:p-8 space-y-8 bg-white rounded-xl shadow-lg animate-fadeIn mx-auto">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
          {title}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}
