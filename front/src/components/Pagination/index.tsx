interface BootstrapPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function BootstrapPagination({ currentPage, totalPages, onPageChange }: BootstrapPaginationProps) {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 0; i < totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
          <a className="page-link" href="#" onClick={() => onPageChange(i)}>
            {i + 1} 
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav aria-label="Page navigation example" style={{marginTop : "10px"}}>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
          <a className="page-link" href="#" onClick={() => onPageChange(currentPage - 1)}>
            Previous
          </a>
        </li>
        {renderPageNumbers()}
        <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
          <a className="page-link" href="#" onClick={() => onPageChange(currentPage + 1)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default BootstrapPagination;


