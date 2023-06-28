import React, { useState } from "react";
import { Game } from "./Game";
import { Result } from "./Result";
import "./Quiz.scss";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Quiz() {
  const [step, setSep] = React.useState(0);
  const question = questions[step];
  console.log(question);
  const [correct, setCorrect] = useState(0);
  const persenTage = Math.round((step / questions.length) * 100);

  const onclickVariant = (i) => {
    if (i === question.correct) {
      setCorrect(correct + 1);
    }
    setSep(step + 1);
  };
  React.useEffect(() => {
    document.title = "quiz";
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>React Quiz</h1>
      <div className="quiz">
        {step !== questions.length ? (
          <Game
            question={question}
            onclickVariant={onclickVariant}
            persenTage={persenTage}
            step={step}
          />
        ) : (
          <Result
            questions={questions}
            correct={correct}
            persenTage={persenTage}
          />
        )}
      </div>
    </div>
  );
}

export default Quiz;
