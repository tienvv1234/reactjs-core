import { useState } from "react";

function App() {
  console.log("App component is rendered");
  const [counter, setCounter] = useState(1);
  console.log("counter", counter);
  const increment = () => {
    console.log("increment", counter);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // counter will be plus only one and it will be rendered only once
    
    
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    // prevCounter is the previous value of counter (1) (4) (7)
    // useState callback function
    // counter will be plus three and it will be rendered only once
    console.log("after increment", counter);
  };
  console.log('end of App component');
  return (
    <div className="App">
      {console.log("rendering div", counter)}
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;

