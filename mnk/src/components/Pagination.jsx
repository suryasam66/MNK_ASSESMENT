import React from 'react';

const Pagination = ({ total, currentPage, setCurrentPage, itemsPerPage }) => {
  const totalPages = Math.ceil(total / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      {pageNumbers.map(number => (
        <button key={number} onClick={() => setCurrentPage(number)} disabled={number === currentPage}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
