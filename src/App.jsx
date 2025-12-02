import { useState } from "react";
import "./index.css";

function App() {
  const [counterValue, setCounterValue] = useState(0);
  const [history, setHistory] = useState([]);

  const increment = () => {
    setCounterValue((counterValue) => counterValue + 1);
    addToHistory(counterValue);
  };

  const decrement = () => {
    if (counterValue === 0) {
      setCounterValue(0);
    } else {
      setCounterValue((counterValue) => counterValue - 1);
      addToHistory(counterValue);
    }
  };

  const reset = () => {
    setCounterValue(0);
  };

  const addToHistory = (newValue) => {
    setHistory((history) => [newValue, ...history]);
  };

  return (
    <div className="App">
      <div className="loggingContainer">
        <p>
          Current: <span>{counterValue}</span>
        </p>

        <div className="historyContainer">
          <p>History</p>

          <div className="previousCounterValues">
            {history.map((item) => {
              return <span>{item}</span>;
            })}
          </div>
          {}
        </div>
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
