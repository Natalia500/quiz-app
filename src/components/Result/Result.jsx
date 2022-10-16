import React from "react";

const Result = ({ correct, arrSize }) => {
  return (
    <div className="result">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
          width={100}
        />
        <h2>
          You got {correct} answers from {arrSize}
        </h2>
        <a href="/">
          <button className="btnTryAgain">Try again</button>
        </a>
      </div>
    </div>
  );
};

export default Result;
