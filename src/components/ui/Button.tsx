import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text" | "transparent"; // Define variants
  children: React.ReactNode;
  className?: string; // Allow passing custom className
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props // Spread the remaining props to the button element
}) => {
  const baseStyles =
    "font-medium py-2 px-4 rounded transition duration-300 ease-in-out";

  let variantStyles = "";

  if (variant === "primary") {
    variantStyles = "bg-primary-500 text-white hover:bg-primary-600";
  } else if (variant === "secondary") {
    variantStyles = "bg-gray-300 text-gray-700 hover:bg-gray-400";
  } else if (variant === "text") {
    variantStyles = "text-primary-500 hover:text-primary-600 font-semibold";
  } else if (variant === "transparent") {
    variantStyles =
      "bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-50";
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`} // Combine base, variant, and custom className
      {...props} // Spread the remaining props (like onClick, disabled, etc.)
    >
      {children}
    </button>
  );
};

export default Button;
