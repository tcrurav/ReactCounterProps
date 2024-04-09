function CounterDecrementer({ decrementCounter }) {

  return (
    <button onClick={() => decrementCounter()}>Decrement Counter</button>
  )
}

export default CounterDecrementer;