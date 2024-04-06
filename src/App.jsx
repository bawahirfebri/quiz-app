import questions from "./data/quiz";
import Question from "./components/Question.jsx";
import { useState } from "react";
import QuestionButtons from "./components/QuestionButtons.jsx";
import QuestionStatus from "./components/QuestionStatus.jsx";
import ScoreResult from "./components/ScoreResult.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(null);

  const handleOptionClick = (questionId, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [questionId]: option,
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((questions) => {
      if (selectedOptions[questions.id] === questions.answer) {
        totalScore++;
      }
    });
    setScore(totalScore);
  };

  const restartQuiz = () => {
    setCurrentPage(0);
    setSelectedOptions({});
    setScore(null);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleQuestionInfoClick = (clickPage) => {
    setCurrentPage(clickPage);
  };

  const questionStatus = (index) => {
    const isQuestionAnswered = selectedOptions[index + 1] !== undefined;
    const isCurrentPage = currentPage === index;

    if (isQuestionAnswered && isCurrentPage) {
      return "current-page";
    } else if (isQuestionAnswered) {
      return "question-filled";
    }

    return isCurrentPage ? "current-page" : null;
  };

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === questions.length - 1;

  return (
    <>
      {score === null && (
        <div className="questions">
          <QuestionStatus questions={questions} questionStatus={questionStatus} handleQuestionInfoClick={handleQuestionInfoClick} />
          <Question questions={questions} currentPage={currentPage} handleOptionClick={handleOptionClick} selectedOptions={selectedOptions} score={score} />
          <QuestionButtons isFirstPage={isFirstPage} isLastPage={isLastPage} prevPage={prevPage} nextPage={nextPage} calculateScore={calculateScore} />
        </div>
      )}
      {score !== null && (
        <ScoreResult questions={questions} currentPage={currentPage} score={score} restartQuiz={restartQuiz} />
      )}
    </>
  );
}

export default App;
