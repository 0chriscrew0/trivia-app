"use client";

import { decode } from "html-entities";

type AnswerProps = {
  answer: string;
  gradeQuestion: (userAnswer: string) => void;
};

export default function Answer({ answer, gradeQuestion }: AnswerProps) {
  return (
    <button
      onClick={() => gradeQuestion(answer)}
      className='text-center border-2 py-2 hover:drop-shadow-lg hover:scale-105 hover:border-0 hover:bg-gray-200'
    >
      {decode(answer)}
    </button>
  );
}
