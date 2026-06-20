type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

export default function Tooltip({
  text,
  children,
}: TooltipProps) {
  return (
    <div className="relative inline-flex group">
      {children}

      <div
        className="
          absolute
          bottom-full
          left-1/2
          -translate-x-1/2
          mb-2
          opacity-0
          invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all
          duration-200
          bg-cixio-dark
          text-white
          text-xs
          px-3
          py-2
          rounded-lg
          shadow-lg
          whitespace-nowrap
          z-50
        "
      >
        {text}

        <div
          className="
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            border-4
            border-transparent
            border-t-cixio-dark
          "
        />
      </div>
    </div>
  );
}