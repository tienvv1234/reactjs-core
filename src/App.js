import { useState } from "react";

const orders = [10, 20, 30]

function App() {
  console.log("App component is rendered");
  // const total = orders.reduce((acc, order) => acc + order, 0); // this will be called every time App is rendered
  // we should not dot it here because it will be called every time App is rendered
  // we should move it to the place init state
  // console.log("total", total);

  const [counter, setCounter] = useState(() => {
    // this function will be called only once
    console.log("init state");
    // we can do some heavy calculations here
    const total = orders.reduce((acc, order) => acc + order, 0);
    console.log("total", total);

    return total; // this value will be used as initial state
  });
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

