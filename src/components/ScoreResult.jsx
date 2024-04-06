import React from "react";

function ScoreResult({questions, currentPage, score, restartQuiz}) {
  return (
    <div className="quiz__result">
      <h2>Hasil Nilai</h2>
      <p>
        {score} dari {questions.length}
      </p>
      <button onClick={restartQuiz} disabled={currentPage < questions.length - 1}>
        Mulai Kembali
      </button>
    </div>
  );
}

export default ScoreResult;
