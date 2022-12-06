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


function Content() {
    const [count, setCount] = useState(180);

    useEffect(() => {
        console.log('count1', count)
        const timeId = setInterval(() => {
            console.log('count', count)
            // setCount(count - 1);
            // this will not affect the count
            // because the count is not changed
            // variable count is closure
            setCount(count => count - 1)
        }, 1000);

        return () => {
            clearInterval(timeId);
        }
    }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count - 1);
    //     }, 1000);
    // }, [count]);
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}

export default Content;
