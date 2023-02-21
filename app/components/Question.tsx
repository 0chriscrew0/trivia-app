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
    <div className='mt-16 mx-auto bg-white'>
      <h1 className='text-center mb-8'>{question}</h1>
      <div className='my-16'>
        {allAnswers.map((answer, i) => (
          <Answer key={i} answer={answer} />
        ))}
      </div>
    </div>
  );
}
