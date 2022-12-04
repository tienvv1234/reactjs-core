import { useState } from "react";

const courses = [
  {
    id: 1,
    name: 'Learn React',
  },
  {
    id: 2,
    name: 'Learn Vue',
  },
]

function App() {

  const [checked, setChecked] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(checked);
  }
  return (
    <div style={{ padding: 32}}>
      {courses.map((course) => (
        // key is required for React to know which element to update
        // must send key in the root element
        <div key={course.id}>
          <input type='radio' checked={checked === course.id} onChange={() => setChecked(course.id)}/>
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Clear</button>
    </div>
  )
}

export default App;
