type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
  size = "md",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-cixio-blue text-white hover:bg-cixio-hover",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-lg
        font-semibold
        transition-colors
        duration-150
        focus:outline-none
        focus:ring-2
        focus:ring-cixio-blue
        focus:ring-offset-2
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {children}
    </button>
  );
}