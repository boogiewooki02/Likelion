import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [target, setTarget] = useState(10);

  const generateRandomTarget = () => {
    const newTarget = Math.floor(Math.random() * 20) + 1;
    setTarget(newTarget);
  };
  const generateRandomNum = () => {
    const newRandomNum = Math.floor(Math.random() * 20) + 1;
    setNum(newRandomNum);
  };

  useEffect(() => {
    generateRandomTarget();
  }, []);

  const increaseNum = () => {
    const newNum = num + 1;
    setNum(newNum);
    if (newNum === target) {
      setTimeout(() => {
        alert("목표치 도달!");
        generateRandomTarget();
        generateRandomNum();
      });
    }
  };
  const decreaseNum = () => {
    const newNum = num - 1;
    setNum(newNum);
    if (newNum === target) {
      setTimeout(() => {
        alert("목표치 도달!");
        generateRandomTarget();
        generateRandomNum();
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="count-container">
        <h2>카운터입니다.</h2>
        <p>
          목표 숫자: <span>{target}</span>
        </p>
        <div className="screen-container">{num}</div>
        <div className="button-container">
          <button onClick={increaseNum}>increase 1</button>
          <button onClick={decreaseNum}>decrease 1</button>
        </div>
      </div>
    </div>
  );
}

export default App;
