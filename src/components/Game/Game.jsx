import React from "react";

const Game = ({
  arrSize,
  step,
  question,
  onClickVariant,
  onClickNext,
  onClickPrev,
}) => {
  const parcent = Math.round((step / arrSize) * 100);

  return (
    <>
      <div className="mainBlockGame">
        <div className="progress">
          <div
            style={{ width: `${parcent}%` }}
            className="progress__inner"
          ></div>
        </div>
        <h1>
          {question.id}. {question.title}
        </h1>
        <ul>
          {question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text}>
              {text}
            </li>
          ))}
        </ul>
        <button onClick={() => onClickPrev(step)} className="_buttonPrev">
          Prev
        </button>
        <button onClick={() => onClickNext()} className="_buttonNext">
          Next
        </button>
      </div>
    </>
  );
};

export default Game;
