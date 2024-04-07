function QuizResult({questions, score, restartQuiz}) {
  return (
    <div className="quiz__result">
      <h2>Hasil Nilai</h2>
      <p>
        {score} dari {questions.length}
      </p>
      <button onClick={restartQuiz}>
        Mulai Kembali
      </button>
    </div>
  );
}

export default QuizResult;
