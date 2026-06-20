type SelectProps = {
  options: string[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  className?: string;
};

export default function Select({
  options,
  value,
  placeholder = "Select an option",
  disabled = false,
  onChange,
  className = "",
}: SelectProps) {
  return (
    <select
      value={value}
      disabled={disabled}
      onChange={onChange}
      className={`
        input-cixio
        cursor-pointer
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      <option value="" disabled>
        {placeholder}
      </option>

      {options.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
}