import React from "react";

export default function HaveAccountLink({ href = "#" }) {
  return (
    <p className="text-center text-sm mt-4">
      <a href={href} className="text-purple-600 hover:text-purple-800 transition-colors">
        حساب دارید؟ ورود
      </a>
    </p>
  );
}
