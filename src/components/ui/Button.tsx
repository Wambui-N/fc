import clsx from "clsx";
import { color } from "framer-motion";
import React, { useState } from "react";

interface ButtonProps {
  label: string; // The text to display on the button
  onClick?: () => void; // Function to call on button click
  type?: "button" | "submit" | "reset"; // Button type
  className?: string; // Additional CSS classes
  disabled?: boolean; // Disable the button
  color?: string;
  hoverColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      type={type}
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl border border-primary bg-primary px-4 py-2 font-semibold text-black transition duration-300 ease-in hover:text-primary ${className} ${color}`}
      disabled={disabled}
    >
      <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        {label}
      </span>
      <span
        className={clsx(
          "absolute inset-0 flex -translate-x-full items-center justify-center overflow-hidden rounded-xl bg-background text-primary transition duration-500 ease-in",
          { "translate-x-0": hover },
        )}
      />
      <span className="invisible">{label}</span>
    </button>
  );
};

export default Button;
