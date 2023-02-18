"use client";

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
  const allAnswers = [...incorrectAnswers, answer];
  allAnswers.sort(() => Math.random() - 0.5);
  return (
    <div className='my-8'>
      <h1>{question}</h1>
      <div>
        {allAnswers.map((answer, i) => (
          <Answer key={i} answer={answer} />
        ))}
      </div>
    </div>
  );
}
