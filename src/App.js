import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  console.log(name);
  // this is one way binding
  return (
    <div style={{ padding: 32}}>
      <input 
        onChange={event => setName(event.target.value)}
      />
      <button onClick={() =>
        setName('abc def') // this will set the value of name to 'abc def'
        // but it will not update the input field
        // because the input field is not bound to the state
        // one way binding
      }
      >Clear</button>
    </div>
  )
}

export default App;

