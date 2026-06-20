type SkeletonProps = {
  height?: string;
  width?: string;
  rounded?: string;
};

export default function Skeleton({
  height = "h-4",
  width = "w-full",
  rounded = "rounded-md",
}: SkeletonProps) {
  return (
    <div
      className={`
        animate-pulse
        bg-gray-200
        ${height}
        ${width}
        ${rounded}
      `}
    />
  );
}