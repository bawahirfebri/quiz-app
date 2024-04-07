import questions from "./data/quiz";
import Question from "./components/Question.jsx";
import { useEffect, useState } from "react";
import QuestionButtons from "./components/QuestionButtons.jsx";
import QuestionStatus from "./components/QuestionStatus.jsx";
import QuizResult from "./components/QuizResult.jsx";
import QuizStart from "./components/QuizStart.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(1000);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft === 0) {
        calculateScore();
      } else {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleOptionClick = (questionId, option) => {
    setSelectedOptions((prevState) => {
      if (prevState[questionId] === option) {
        const newState = { ...prevState };
        delete newState[questionId];
        return newState;
      } else {
        return {
          ...prevState,
          [questionId]: option,
        };
      }
    });
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

  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  const restartQuiz = () => {
    setTimeLeft(10);
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
      {score === null && !isQuizStarted && <QuizStart startQuiz={startQuiz} />}

      {score === null && isQuizStarted && (
        <div className="questions">
          {/* <QuestionStatus questions={questions} questionStatus={questionStatus} handleQuestionInfoClick={handleQuestionInfoClick} /> */}
          <p>
            {currentPage + 1}/{questions.length} {timeLeft}
          </p>
          <Question questions={questions} currentPage={currentPage} handleOptionClick={handleOptionClick} selectedOptions={selectedOptions} score={score} />
          <QuestionButtons isFirstPage={isFirstPage} isLastPage={isLastPage} prevPage={prevPage} nextPage={nextPage} calculateScore={calculateScore} />
        </div>
      )}

      {score !== null && <QuizResult questions={questions} score={score} restartQuiz={restartQuiz} />}
    </>
  );
}

export default App;
