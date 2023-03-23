"use client";

import { useState } from "react";
import Answer from "./Answer";

type QuestionProps = {
  question: string;
  answer: string;
  incorrectAnswers: string[];
};

export default function Question({
  question,
  answer,
  incorrectAnswers,
}: QuestionProps) {
  const [grade, setGrade] = useState(false);
  const allAnswers = [...incorrectAnswers, answer];
  allAnswers.sort(() => Math.random() - 0.5);

  const gradeQuestion = (userAnswer: string) => {
    if (userAnswer === answer) {
      setGrade(true);
    }
    return;
  };

  return (
    <div className='mt-16 mx-auto bg-white border-2 px-8 pt-16'>
      <h1 className='text-center mb-8'>{question}</h1>
      {grade && <p>Correct!</p>}
      <div className='my-16 flex flex-col gap-8'>
        {allAnswers.map((answer, i) => (
          <Answer key={i} answer={answer} gradeQuestion={gradeQuestion} />
        ))}
      </div>
    </div>
  );
}
