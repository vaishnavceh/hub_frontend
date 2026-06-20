import { useEffect, useRef, useState } from "react";

type DropdownProps = {
  label: string;
  items: string[];
  onSelect?: (item: string) => void;
};

export default function Dropdown({
  label,
  items,
  onSelect,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
    >
      <button
        onClick={() => setOpen(!open)}
        className="btn-cixio"
      >
        {label}
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            mt-2
            w-48
            bg-white
            rounded-xl
            shadow-lg
            border
            border-gray-200
            overflow-hidden
            z-50
          "
        >
          {items.length === 0 ? (
            <div className="px-4 py-3 text-sm text-gray-500">
              No items available
            </div>
          ) : (
            items.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onSelect?.(item);
                  setOpen(false);
                }}
                className="
                  block
                  w-full
                  text-left
                  px-4
                  py-3
                  text-sm
                  hover:bg-cixio-light
                  transition-colors
                "
              >
                {item}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}