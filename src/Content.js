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
    const [avatar, setAvatar] = useState(null);
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        console.log(file)
        // create preview
        file.preview = URL.createObjectURL(file);
        // file avatar preview in memory
        setAvatar(file);
    }

    useEffect(() => {
        // clean up
        return () => {
            if (avatar) {
                // remove preview clear memory
                avatar && URL.revokeObjectURL(avatar.preview);
            }
        }
    }, [avatar]);

    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && <img src={avatar.preview} alt="avatar" width={'40%'} />}
        </div>
    );
}

export default Content;
