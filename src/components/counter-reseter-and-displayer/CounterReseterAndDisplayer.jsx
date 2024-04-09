import "./CounterReseterAndDisplayer.css";

function CounterReseterAndDisplayer({ initialValue, resetCounter }) {
  return (
    <div className="counter-reseter-and-displayer-wrapper">
      <span>{initialValue}</span>
      <button onClick={() => resetCounter()}>Reset Counter</button>
    </div>
  )
}

export default CounterReseterAndDisplayer;