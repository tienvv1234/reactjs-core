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

const tabs = ['posts', 'comments', 'albums'];

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type} `)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, [type]);

    return (
        <div>
            {tabs.map((tab) => (
                <button 
                    key={tab} 
                    onClick={() => setType(tab)
                }>
                    {tab}
                </button>
            ))}
            <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Content;
