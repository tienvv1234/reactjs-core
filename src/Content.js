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
    const [posts , setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            });
    }, []); 
    

    return (
        <div>
            <input type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
            <ul>
                {posts.map(post => (
                    <li>{post}</li>
                ))}
            </ul>
            {console.log("render")}
        </div>
    )
}

export default Content