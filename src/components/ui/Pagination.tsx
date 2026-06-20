type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      <button
        className="btn-cixio"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      <div className="flex items-center gap-2">
        <span className="rounded-lg bg-cixio-light px-3 py-2 text-sm font-medium text-cixio-dark">
          Page {currentPage}
        </span>

        <span className="text-gray-400">of</span>

        <span className="rounded-lg border border-gray-200 px-3 py-2 text-sm">
          {totalPages}
        </span>
      </div>

      <button
        className="btn-cixio"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}