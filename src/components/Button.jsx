import React from "react";

const Button = ({ children, variant = "solid", className = "", ...props }) => {
  const baseStyles =
    "border-2 border-primary px-5 py-4 hover:bg-black hover:border-black hover:text-white transition duration-300 focus:outline-none";

  const solid =
    "bg-primary text-white hover:border-black-500 hover:bg-black-700";
  const outlined =
    "text-black hover:bg-primary hover:border-primary hover:text-white";

  // pick style based on variant
  const styles = variant === "outlined" ? outlined : solid;

  return (
    <button className={`${baseStyles} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
