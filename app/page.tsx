"use client";

import { Roboto } from "@next/font/google";
import QuestionLoader from "./components/QuestionLoader";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <h1>Trivia App</h1>
      <QuestionLoader />
    </main>
  );
}
