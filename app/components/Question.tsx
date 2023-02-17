"use client";

type QuestionProps = {
  question: string;
};

export default function Question({ question }: QuestionProps) {
  return (
    <div>
      <h1>{question}</h1>
    </div>
  );
}
