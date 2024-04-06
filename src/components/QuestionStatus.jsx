import React from "react";

function QuestionStatus({questions, questionStatus, handleQuestionInfoClick}) {
  return (
    <div className="questions__status">
      {questions.map((question, index) => (
        <div key={index} className="question__status" id={questionStatus(index)} onClick={() => handleQuestionInfoClick(index)}>
          <p>{index + 1}</p>
        </div>
      ))}
    </div>
  );
}

export default QuestionStatus;
