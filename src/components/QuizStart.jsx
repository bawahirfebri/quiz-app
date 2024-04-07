function QuizStart({startQuiz}) {
  return (
    <div className="quiz__result">
      <h2>Mulai Quiz</h2>
      <button onClick={startQuiz}>Mulai</button>
    </div>
  );
}

export default QuizStart;
