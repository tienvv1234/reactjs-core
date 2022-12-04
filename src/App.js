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

  const [checked, setChecked] = useState([]);
  const handleCheck = (id) => {
    //way 1
    if (checked.includes(id)) {
      setChecked(checked.filter((item) => item !== id));
    } else {
      setChecked([...checked, id]);
    }

    //way 2
    // setChecked(prev => {
    //   if (prev.includes(id)) {
    //     return prev.filter(item => item !== id);
    //   }
    //   return [...prev, id];
    // });
  }
  console.log(checked);

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
          <input type='checkbox'
          checked={checked.includes(course.id)}
          onChange={() => handleCheck(course.id)}/>
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Clear</button>
    </div>
  )
}

export default App;
