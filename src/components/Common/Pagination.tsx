import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages.map((number, index) => (
      <li key={index} className="mx-1">
        {typeof number === "number" ? (
          <button
            onClick={() => onPageChange(number)}
            className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
              currentPage === number
                ? "bg-primary text-white"
                : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white"
            }`}
          >
            {number}
          </button>
        ) : (
          <span className="flex h-9 min-w-[36px] items-center justify-center text-sm text-body-color">
            {number}
          </span>
        )}
      </li>
    ));
  };

  return (
    <nav>
      <ul className="flex items-center justify-center pt-8">
        <li className="mx-1">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
              currentPage === 1
                ? "cursor-not-allowed bg-body-color bg-opacity-[15%] text-body-color"
                : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white"
            }`}
          >
            Prev
          </button>
        </li>
        {renderPageNumbers()}
        <li className="mx-1">
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
              currentPage === totalPages
                ? "cursor-not-allowed bg-body-color bg-opacity-[15%] text-body-color"
                : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white"
            }`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
