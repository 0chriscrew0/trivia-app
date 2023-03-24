"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { decode } from "html-entities";
import { QuestionsType } from "../types/QuestionsType";
import Question from "./Question";
import { useEffect, useState } from "react";
import { setUncaughtExceptionCaptureCallback } from "process";

const getQuestion = async () => {
  const response = await axios.get("https://opentdb.com/api.php?amount=10");
  return response.data;
};

export default function QuestionLoader() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const { data, error, isLoading } = useQuery<QuestionsType>({
    queryFn: getQuestion,
    queryKey: ["get-question"],
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      // when time is up
      setQuestionNumber(questionNumber + 1);
    }, 10000);
    return () => clearTimeout(timer);
  });

  const updateQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const updateScore = () => {
    setScore(score + 1);
  };

  if (error) return <div>{`Error: ${error}`}</div>;
  if (isLoading) return <div>Loading...</div>;

  const questions = data?.results;
  if (questions === undefined) {
    return;
  }
  const question = questions[questionNumber];
  const numQuestions = questions.length;

  return (
    <div className='mx-auto'>
      {questionNumber < numQuestions ? (
        <Question
          question={decode(question.question)}
          answer={question.correct_answer}
          incorrectAnswers={question.incorrect_answers}
          updateQuestion={updateQuestion}
          updateScore={updateScore}
        />
      ) : (
        <div>{`You  got ${score} out of ${numQuestions} questions right!`}</div>
      )}
    </div>
  );
}
