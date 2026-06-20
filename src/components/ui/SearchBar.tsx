type SearchBarProps = {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder?: string;
  disabled?: boolean;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  disabled = false,
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <input
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        className="
          input-cixio
          pl-10
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      />

      <span
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-gray-400
          text-sm
          pointer-events-none
        "
      >
        🔍
      </span>
    </div>
  );
}