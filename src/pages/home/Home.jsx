import { useState, useEffect } from "react";
import CounterIncrementer from "../../components/counter-incrementer/CounterIncrementer";
import Header from "../../components/header/Header";
import CounterDecrementer from "../../components/counter-decrementer/CounterDecrementer";
import "./Home.css";

function Home() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prevValue) => prevValue + 1);
  }

  const decrementCounter = () => {
    setCounter((prevValue) => prevValue - 1);
  }

  const resetCounter = () => {
    setCounter(0);
  }

  return (
    <>
      <Header initialValue={counter} resetCounter={resetCounter} />
      <div className="home-counter-wrapper">
        <div className="home-incrementer">
          <CounterIncrementer incrementCounter={incrementCounter} />
        </div>
        <div className="home-decrementer">
          <CounterDecrementer decrementCounter={decrementCounter} />
        </div>
      </div>
    </>
  )
}

export default Home;