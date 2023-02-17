"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { QuestionsType } from "../types/QuestionsType";
import Question from "./Question";

const getQuestion = async () => {
  const response = await axios.get("https://opentdb.com/api.php?amount=1");
  return response.data;
};

export default function QuestionLoader() {
  const { data, error, isLoading } = useQuery<QuestionsType>({
    queryFn: getQuestion,
    queryKey: ["get-question"],
  });
  if (error) return <div>{error}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.results.map((question, i) => (
        <Question key={i} question={question.question} />
      ))}
    </div>
  );
}
