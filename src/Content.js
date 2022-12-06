import { useState, useEffect } from 'react';

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
// Call callback only on first render
// 3 useEffect(callback, [deps])
// Call callback on every render if deps changed
// -------------------
//      1,2,3
// 1. callback always run after render (component mounted)
// 2. Cleanup function always called bufore component unmounted
// 3. Cleanup function always called before callback run

function Content() {
    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log(`Mounted or re-render ${count} times`);
        return () => {
            console.log(`cleanup ${count} times`);
        }
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                click me
            </button>
        </div>
    );
}

export default Content;
