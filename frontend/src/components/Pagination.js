import React from "react";
import "./Pagination.css";

const Pagination = ({ pageIndex, total, perPage, onNext, onPrevious }) => {
  const lastPage = Math.ceil(total / perPage);
  const previous =
    pageIndex > 1 ? (
      <button onClick={onPrevious} className="Pagination-paginate">
        &lt; Previous
      </button>
    ) : null;
  const next =
    pageIndex < lastPage ? (
      <button onClick={onNext} className="Pagination-paginate">
        Next &gt;
      </button>
    ) : null;
  return (
    <div className="Pagination">
      <div className="Pagination-stats">
        Page {pageIndex} of {lastPage}
        &nbsp;({perPage} items per page)
      </div>
      <div className="Pagination-actions">
        {previous}&nbsp;
        {next}
      </div>
    </div>
  );
};

export default Pagination;
