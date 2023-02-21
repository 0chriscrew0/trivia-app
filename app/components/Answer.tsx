"use client";

import { decode } from "html-entities";

type AnswerProps = {
  answer: string;
};

export default function Answer({ answer }: AnswerProps) {
  return (
    <div className='mx-auto text-center my-8 border-2 py-2'>
      {decode(answer)}
    </div>
  );
}
