import React from "react";

function QuestionButtons({isFirstPage, isLastPage, prevPage, nextPage, calculateScore}) {
  return (
    <div className="buttons">
      {!isFirstPage && (
        <button className="prev-btn" onClick={prevPage}>
          Prev
        </button>
      )}
      {!isLastPage && (
        <button className="next-btn" onClick={nextPage}>
          Next
        </button>
      )}
      {isLastPage && (
        <button className="finish-btn" onClick={calculateScore}>
          Selesai
        </button>
      )}
    </div>
  );
}

export default QuestionButtons;
