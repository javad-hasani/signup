"use client"
import React from "react";
import { useFormErrorAnimation } from '../hooks/useFormErrorAnimation';
import messages from '../constants/messages';

export default function FormError({ message, show }) {
  const { getErrorClass } = useFormErrorAnimation();

  if (!show || !message) return null;
  return (
    <div
      className={getErrorClass(show) + " flex items-center gap-2 justify-center shadow-md border border-red-200"}
      aria-live="polite"
      role="alert"
    >
      <svg className="w-5 h-5 text-red-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z" />
      </svg>
      <span className="font-medium text-red-700 text-sm sm:text-base">
        {message in messages.errors ? messages.errors[message] : message}
      </span>
    </div>
  );
}
