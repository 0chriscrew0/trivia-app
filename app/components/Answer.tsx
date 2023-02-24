"use client";

import { decode } from "html-entities";

type AnswerProps = {
  answer: string;
};

export default function Answer({ answer }: AnswerProps) {
  return (
    <button className='text-center border-2 py-2 hover:bg-green-400 hover:drop-shadow-lg hover:scale-105'>
      {decode(answer)}
    </button>
  );
}
