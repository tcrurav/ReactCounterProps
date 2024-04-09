import CounterReseterAndDisplayer from "../counter-reseter-and-displayer/CounterReseterAndDisplayer";
import "./Header.css";

function Header({ initialValue, resetCounter }) {
  return (
    <div className="header-wrapper">
      <h1>This is a Header</h1>
      <CounterReseterAndDisplayer initialValue={initialValue} resetCounter={resetCounter} />
    </div>
  )
}

export default Header;