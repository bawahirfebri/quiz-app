import { useState } from "react";

function Question({ questions, currentPage, handleOptionClick, selectedOptions, score }) {
  return (
    <>
      <div className="question">
        <p>{questions[currentPage].question}</p>
      </div>
      <ul className="options">
        {questions[currentPage].options.map((option) => (
          <li key={option} className="option" id={selectedOptions[questions[currentPage].id] === option ? "option-selected" : ""} onClick={() => handleOptionClick(questions[currentPage].id, option)}>
            <label>{option}</label>
            <input type="checkbox" checked={selectedOptions[questions[currentPage].id] === option} onChange={() => {}} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Question;
