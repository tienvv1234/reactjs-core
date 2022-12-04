import { useState, useEffect } from "react";

// Side effect

// Update DOM

// Call Api
// Listen DOM events

// Cleanup
// clear timeout / interval
// remove listener / unsubscribe

  // useEffect(callback, [deps?])
  // 1 useEffect(callback)
  // Call callback on every render
  // Call Callback after add element to DOM
  // 2 useEffect(callback, [])

  // 3 useEffect(callback, [deps])

  // -------------------
  // 1. callback always run after render (component mounted)


function Content () {
    const [title, setTitle] = useState('');

    useEffect(() => {
        // do something make side effect
        // should do it in useEffect
        console.log("mounted");
        document.title = title;
    }); 

    return (
        <div>
            <input type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
            {console.log("render")}
        </div>
    )
}

export default Content