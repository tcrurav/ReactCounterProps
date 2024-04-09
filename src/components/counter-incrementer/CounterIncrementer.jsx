function CounterIncrementer({incrementCounter}){

  return(
    <button onClick={() => incrementCounter()}>Increment Counter</button>
  )
}

export default CounterIncrementer;