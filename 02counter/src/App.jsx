import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);
  let addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log(counter);
    }
  };
  let removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log(counter);
    }
  };
  return (
    <>
      <h1>Chai aur React </h1>
      <h3>Counter value {counter}</h3>
      <button onClick={addValue}>Add Value{counter}</button>
      <button onClick={removeValue}>Remove Value{counter}</button>
      <footer>Footer {counter}</footer>
    </>
  );
}

export default App;
