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

const tabs = ['posts', 'comments', 'albums'];

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGotop, setShowGotop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type} `)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            console.log('scroll', window.scrollY);
            if (window.scrollY > 200) {
                setShowGotop(true);
            } else {
                setShowGotop(false);
            }

            // setShowGotop(window.scrollY > 200);
        }

        window.addEventListener('scroll', handleScroll);

        // cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [showGotop]);

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

            {showGotop && (
                <button
                    style={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    );
}

export default Content;
