"use client";

import { decode } from "html-entities";

type AnswerProps = {
  answer: string;
};

export default function Answer({ answer }: AnswerProps) {
  return <div>{decode(answer)}</div>;
}
