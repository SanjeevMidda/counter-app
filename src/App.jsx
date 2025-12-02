import { useState } from "react";
import "./index.css";

function App() {
  const [counterValue, setCounterValue] = useState(0);

  const increment = () => {
    setCounterValue((counterValue) => counterValue + 1);
  };

  const decrement = () => {
    if (counterValue === 0) {
      setCounterValue(0);
    } else {
      setCounterValue((counterValue) => counterValue - 1);
    }
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
          <button id="increment" onClick={increment}>
            +
          </button>
          <div className="resetCircle">
            <button id="reset" onClick={reset}>
              R
            </button>
          </div>
          <button id="decrement" onClick={decrement}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
