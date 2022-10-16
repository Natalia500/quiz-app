import "./app.scss";
import React, { useState } from "react";
import Result from "./components/Result/Result";
import Game from "./components/Game/Game";

import questions from "./assets/questions.json";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];
  const arrSize = questions.length;
  const [answers] = useState([false]);
  let countCorrectQuestions = 0;

  const onClickVariant = (index) => {
    if (index == question.correct) {
      answers[question.id] = true;
    } else {
      answers[question.id] = false;
    }
    answers.map(sum);
    function sum(item) {
      if (item) {
        countCorrectQuestions += 1;
      }
    }
    setCorrect(countCorrectQuestions);
  };

  const onClickNext = () => {
    setStep(step + 1);
  };

  const onClickPrev = (step) => {
    if (step == 0) {
      step = 0;
      return;
    }
    setStep(step - 1);
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
          onClickNext={onClickNext}
          onClickPrev={onClickPrev}
          arrSize={arrSize}
        />
      ) : (
        <Result correct={correct} question={question} arrSize={arrSize} />
      )}
    </div>
  );
}

export default App;
