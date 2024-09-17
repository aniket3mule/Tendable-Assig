import React, { useState, useEffect } from 'react';

// Questions object
export const QUESTIONS = {
  1: "Can you code in Ruby?",
  2: "Can you code in JavaScript?",
  3: "Can you code in Swift?",
  4: "Can you code in Java?",
  5: "Can you code in C#?"
};

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [yesCount, setYesCount] = useState(0);
  const [totalRuns, setTotalRuns] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [runScores, setRunScores] = useState<number[]>([]);
  const [avgScores, setAvgScores] = useState<string>();

  // Calculate the score for the current run
  const calculateScore = () => {
    return (100 * yesCount) / Object.keys(QUESTIONS).length;
  };

  // Handle the user’s response
  const handleAnswer = (answer: string) => {
    if (answer === 'yes') {
      setYesCount(yesCount + 1);
    }

    if (currentQuestionIndex < Object.keys(QUESTIONS).length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const score = calculateScore();
      setRunScores([...runScores, score]);
      setTotalScore(totalScore + score);
      setTotalRuns(totalRuns + 1);
      setCurrentQuestionIndex(1);
      setYesCount(0);
    }
  };

  // Calculate the average score across all runs
  const calculateAverageScore = () => {
    if (runScores.length === 0) return 0;
    return totalScore / totalRuns;
  };

  useEffect(() => {
    if (totalRuns > 0) {
        setAvgScores(calculateAverageScore().toFixed(2));
    }
  }, [totalRuns]);

  return (
    <div className="Questions">
      <h1>Question {currentQuestionIndex}</h1>
      <p>{QUESTIONS[currentQuestionIndex as keyof typeof QUESTIONS]}</p>
      <button onClick={() => handleAnswer('yes')}>Yes</button>
      <button onClick={() => handleAnswer('no')}>No</button>
      <h1>Total Score {totalScore}</h1>
      <h1>Average Score {avgScores}</h1>
    </div>
  );
};

export default Questions;
