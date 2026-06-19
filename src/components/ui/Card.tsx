type CardProps = {
  children: React.ReactNode;
  title?: string;
};

export default function Card({
  children,
  title,
}: CardProps) {
  return (
    <div className="card-cixio p-6">
      {title && (
        <h3 className="text-lg font-semibold mb-4">
          {title}
        </h3>
      )}

      {children}
    </div>
  );
}