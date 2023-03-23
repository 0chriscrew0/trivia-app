"use client";

import { useState } from "react";
import Answer from "./Answer";

type QuestionProps = {
  question: string;
  answer: string;
  incorrectAnswers: string[];
  updateQuestion: () => void;
};

enum QuestionStatus {
  Unanswered,
  Correct,
  Incorrect,
}

export default function Question({
  question,
  answer,
  incorrectAnswers,
  updateQuestion,
}: QuestionProps) {
  const [grade, setGrade] = useState(QuestionStatus.Unanswered);
  const allAnswers = [...incorrectAnswers, answer];
  allAnswers.sort(() => Math.random() - 0.5);

  const gradeQuestion = (userAnswer: string) => {
    if (userAnswer === answer) {
      setGrade(QuestionStatus.Correct);
    } else {
      setGrade(QuestionStatus.Incorrect);
    }
    updateQuestion();
  };

  return (
    <div className='mt-16 mx-auto bg-white border-2 px-8 pt-16'>
      <h1 className='text-center mb-8'>{question}</h1>
      {grade === QuestionStatus.Correct && <p>Correct!</p>}
      {grade === QuestionStatus.Incorrect && <p>Wrong!</p>}
      <div className='my-16 flex flex-col gap-8'>
        {allAnswers.map((answer, i) => (
          <Answer key={i} answer={answer} gradeQuestion={gradeQuestion} />
        ))}
      </div>
    </div>
  );
}
