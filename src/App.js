import { useState } from "react";


function App() {
  const [info, setInfo] = useState({
    name: "John",
    age: 25,
  });

  const handleUpdate = () => {
    // setInfo({
    //   address: "123 Main St",  
    // });
    // this will overwrite the previous state
    // {"address":"123 Main St"} we will lose the name and age

    // to fix this we can use the spread operator
    setInfo({
      ...info,
      address: "123 Main St",
    });
  }

  return (
    <div>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate} > update </button>
    </div>
  )
}

export default App;

