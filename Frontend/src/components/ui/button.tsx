"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "filled" | "outline" | "ghost"; 
  color?: "blue" | "gray"; 
};

export default function Button({
  variant = "filled",
  color = "blue",
  className,
  ...props
}: ButtonProps) {
  const base = "px-5 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 flex-1";

  const variants = {
    filled: {
      blue: "bg-blue-500 text-white hover:bg-blue-600",
      gray: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    },
    outline: {
      blue: "border border-blue-500 text-blue-500 hover:bg-blue-50",
      gray: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    },
    ghost: {
      blue: "text-blue-500 hover:bg-blue-50",
      gray: "text-gray-700 hover:bg-gray-100",
    },
  };

  return (
    <button
      {...props}
      className={clsx(base, variants[variant][color], className)}
    />
  );
}