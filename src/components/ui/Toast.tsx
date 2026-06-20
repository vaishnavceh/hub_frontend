import { useEffect, useState } from "react";

type ToastProps = {
  message: string;
  duration?: number;
};

export default function Toast({
  message,
  duration = 3000,
}: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      className="
        fixed
        bottom-4
        right-4
        bg-cixio-blue
        text-white
        px-4
        py-3
        rounded-xl
        shadow-lg
        animate-pulse
        z-50
        max-w-sm
      "
    >
      {message}
    </div>
  );
}