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

// FQA
// 1. callback gọi sau khi element được mount vào DOM 
// tức là nó phải chạy hết render trước rồi mới chạy callback
// 2. Phân biệt mount và Rendered tức là đã được mount vào DOM và đã được render ra DOM
// 3. Có thẻ sử dụng nhiều dep, ít nhất 1 dependency phải thay đổi thì callback mới được gọi
// 4, Khi setState cùng 1 giá tri thì component không render lại (chỗ  nầy có 2 case 1 là với object và array, 2 là với primitive type)

const lesson = [
    {
        id: 1,
        name: 'React',
    },
    {
        id: 2,
        name: 'React2',
    },
    {
        id: 3,
        name: 'React3',
    },
];
function Content() {
    const [lessionId, setLessionId] = useState(1);
    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessionId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${lessionId}`, handleComment);
        }
    }, [lessionId]);
    return (
        <div>
            <ul>
                {lesson.map((item) => (
                    <li 
                        style={{ color: item.id === lessionId ? 'red' : '#333' }}
                        key={item.id}
                        onClick={() => setLessionId(item.id)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Content;
