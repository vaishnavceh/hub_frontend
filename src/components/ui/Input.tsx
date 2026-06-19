type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  disabled?: boolean;
  label?: string;
  error?: string;
};

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  label,
  error,
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2 text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          input-cixio
          ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
          ${disabled ? "opacity-60 cursor-not-allowed bg-gray-100" : ""}
        `}
      />

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}