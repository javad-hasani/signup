import React from 'react';
import messages from '../constants/messages';

export default function InputField({
  id,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  label,
  isDarkMode,
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs sm:text-sm font-medium mb-1">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg border ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : isDarkMode
            ? 'border-gray-600 bg-gray-700 focus:ring-purple-500'
            : 'border-gray-300 focus:ring-blue-500'
        } focus:outline-none focus:ring-2 transition-colors text-xs sm:text-base`}
        placeholder={placeholder}
        autoComplete={type === 'password' ? 'new-password' : undefined}
      />
      {error && (
        <p className="mt-1 text-xs sm:text-sm text-red-500">
          {messages.errors[error] || error}
        </p>
      )}
    </div>
  );
}
