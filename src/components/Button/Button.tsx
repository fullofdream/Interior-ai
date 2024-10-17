import React from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "bg-gradient-to-r from-blue-400 to-purple-400 text-black font-medium py-2 px-14 rounded-2xl transition duration-300 ease-in-out hover:shadow-lg";
  const hoverStyles = "hover:from-blue-500 hover:to-purple-500";
  const disabledStyle = "opacity-50 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${disabled ? disabledStyle : hoverStyles} ${className} text-2xl`}
    >
      {title}
    </button>
  );
};

export default Button;