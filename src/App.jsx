import { useState } from "react";
import "./index.css";

function App() {
  const [counterValue, setCounterValue] = useState(10);

  const increment = () => {
    setCounterValue((counterValue) => counterValue + 1);
  };

  const decrement = () => {
    setCounterValue((counterValue) => counterValue - 1);
  };

  const reset = () => {
    setCounterValue(0);
  };

  return (
    <div className="App">
      <div className="loggingContainer">
        <p>
          Current: <span>{counterValue}</span>
        </p>
        <p>
          History: <span>1</span>
        </p>
      </div>
      <div className="mainContainer">
        <div className="counterContainer">
          <h1>{counterValue}</h1>
        </div>
        <div className="actionsContainer">
          <button id="add">+</button>
          <div className="resetCircle">
            <button id="reset">R</button>
          </div>
          <button id="minus">-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
