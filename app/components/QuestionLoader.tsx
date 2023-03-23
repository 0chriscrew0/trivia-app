"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { decode } from "html-entities";
import { QuestionsType } from "../types/QuestionsType";
import Question from "./Question";
import { useState } from "react";

const getQuestion = async () => {
  const response = await axios.get("https://opentdb.com/api.php?amount=10");
  return response.data;
};

export default function QuestionLoader() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const { data, error, isLoading } = useQuery<QuestionsType>({
    queryFn: getQuestion,
    queryKey: ["get-question"],
    refetchOnWindowFocus: false,
  });

  const updateQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  if (error) return <div>{`Error: ${error}`}</div>;
  if (isLoading) return <div>Loading...</div>;

  const questions = data?.results;
  if (questions === undefined) {
    return;
  }
  const question = questions[questionNumber];

  return (
    <div className='mx-auto'>
      <Question
        question={decode(question.question)}
        answer={question.correct_answer}
        incorrectAnswers={question.incorrect_answers}
        updateQuestion={updateQuestion}
      />
    </div>
  );
}
