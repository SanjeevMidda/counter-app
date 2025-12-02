import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="loggingContainer">
        <p>Current: 0</p>
        <p>History: 1</p>
      </div>
      <div className="mainContainer">
        <div className="counterContainer">
          <h1>0</h1>
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
