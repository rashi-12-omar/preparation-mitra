import React, { useState, useEffect } from 'react';
import { fetchQuestions } from '../../services/api';

const QuizEngine = ({ category }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    fetchQuestions(category).then(data => setQuestions(data));
  }, [category]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    
    const next = currentIdx + 1;
    if (next < questions.length) {
      setCurrentIdx(next);
    } else {
      setFinished(true);
    }
  };

  if (questions.length === 0) return <div>Loading {category} questions...</div>;

  return (
    <div className="quiz-card">
      {finished ? (
        <div className="results">
          <h3>Practice Efficiency: {Math.round((score / questions.length) * 100)}%</h3>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      ) : (
        <div className="question-box">
          <h2>{questions[currentIdx].questionText}</h2>
          <div className="options">
            {questions[currentIdx].options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(opt.isCorrect)}>
                {opt.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizEngine;
